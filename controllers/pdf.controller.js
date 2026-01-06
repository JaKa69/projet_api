import { generateConfigPdf } from "../services/pdf.service.js";

export const exportPdf = async (req, res) => {
  try {
    await generateConfigPdf(req.params.id, res);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
