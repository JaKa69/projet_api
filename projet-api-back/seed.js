require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/User");
const Category = require("./models/Category");
const Component = require("./models/Component");
const Merchant = require("./models/Merchant");
const Price = require("./models/Price");
const Configuration = require("./models/Configuration");

async function seed() {
  await mongoose.connect(process.env.MONGO_CONNECTION);

  console.log("Suppression des données existantes...");

  if (await User.countDocuments() > 0) {
    console.log("Base déjà initialisée");
    process.exit();
    }
  await Promise.all([
    User.deleteMany(),
    Category.deleteMany(),
    Component.deleteMany(),
    Merchant.deleteMany(),
    Price.deleteMany(),
    Configuration.deleteMany()
  ]);

  // USERS

  const hashedAdmin = await bcrypt.hash("admin", 10);
  const hashedGuest = await bcrypt.hash("guest", 10);

  const admin = await User.create({
    firstname: "Admin",
    lastname: "Root",
    email: "admin@test.com",
    password: hashedAdmin,
    role: "admin"
  });

  const guest = await User.create({
    firstname: "Guest",
    lastname: "User",
    email: "guest@test.com",
    password: hashedGuest,
    role: "user"
  });

  // CATEGORIES

  const cpuCategory = await Category.create({
    name: "CPU",
    description: "Processeurs"
  });

  const gpuCategory = await Category.create({
    name: "GPU",
    description: "Cartes graphiques"
  });

  // COMPONENTS

  const cpu = await Component.create({
    category: cpuCategory._id,
    brand: "AMD",
    title: "Ryzen 7 7800X",
    model: "7800X",
    description: "Processeur haute performance",
    specifications: { cores: 8, threads: 16 },
    image: "cpu.jpg"
  });

  const gpu = await Component.create({
    category: gpuCategory._id,
    brand: "NVIDIA",
    title: "RTX 4070",
    model: "4070",
    description: "Carte graphique gaming",
    specifications: { vram: "12GB" },
    image: "gpu.jpg"
  });

  // MERCHANTS

  const amazon = await Merchant.create({
    name: "Amazon",
    websiteUrl: "https://amazon.fr",
    affiliateRate: 5,
    conditions: "Livraison rapide"
  });

  const ldlc = await Merchant.create({
    name: "LDLC",
    websiteUrl: "https://ldlc.com",
    affiliateRate: 4,
    conditions: "Garantie 2 ans"
  });

  // PRICES

  const cpuPriceAmazon = await Price.create({
    component: cpu._id,
    merchant: amazon._id,
    price: 399
  });

  const gpuPriceAmazon = await Price.create({
    component: gpu._id,
    merchant: amazon._id,
    price: 599
  });

  // CONFIGURATION DE TEST

  await Configuration.create({
    user: guest._id,
    name: "Config Gaming",
    components: [
      {
        component: cpu._id,
        price: cpuPriceAmazon._id
      },
      {
        component: gpu._id,
        price: gpuPriceAmazon._id
      }
    ],
    totalPrice: 399 + 599
  });

  console.log("Seed terminé avec succès ✅");
  process.exit();
}

seed();