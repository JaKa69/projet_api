import Merchant from "../models/Merchant.js";

export const getAll = () => Merchant.find();

export const getById = (id) => Merchant.findById(id);

export const create = (data) => Merchant.create(data);

export const update = (id, data) =>
  Merchant.findByIdAndUpdate(id, data, { new: true });

export const remove = (id) =>
  Merchant.findByIdAndDelete(id);
