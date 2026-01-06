import Price from "../models/Price.js";

export const getByComponent = (componentId) =>
  Price.find({ component: componentId }).populate("merchant");

export const create = (data) => Price.create(data);

export const update = (id, data) =>
  Price.findByIdAndUpdate(id, data, { new: true });

export const remove = (id) =>
  Price.findByIdAndDelete(id);
