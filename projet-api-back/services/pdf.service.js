const PDFDocument = require("pdfkit");
const Configuration = require("../models/Configuration.js");

module.exports.generateConfigPdf = async (configId, user, res) => {
  const config = await Configuration.findById(configId)
    .populate("components.component")
    .populate("components.price");

  if (!config) throw new Error("Configuration introuvable");
  if (config.user.toString() !== user.id && user.role !== "admin") {
    throw new Error("Accès non autorisé");
  }

  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${config.name}.pdf`
  );

  doc.pipe(res);

  doc.fontSize(20).text(`Configuration : ${config.name}`, { underline: true });
  doc.moveDown();

  config.components.forEach((item, index) => {
    doc
      .fontSize(12)
      .text(
        `${index + 1}. ${item.component.title} - ${item.price.price} €`
      );
  });

  doc.moveDown();
  doc.fontSize(14).text(`Coût total : ${config.totalPrice} €`, {
    bold: true
  });

  doc.end();
};
