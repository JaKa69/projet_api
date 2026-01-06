import Component from "../models/Component.js";

export const getAll = (filters) =>
  Component.find(filters).populate("category");

export const getById = (id) =>
  Component.findById(id).populate("category");

export const create = (data) => Component.create(data);

export const update = (id, data) =>
  Component.findByIdAndUpdate(id, data, { new: true });

export const remove = (id) =>
  Component.findByIdAndDelete(id);
