import Category from "../models/Category.js";

export const getAll = () => Category.find();
export const create = (data) => Category.create(data);
export const update = (id, data) =>
  Category.findByIdAndUpdate(id, data, { new: true });
export const remove = (id) => Category.findByIdAndDelete(id);
