const generateConfigPdf = require("../services/pdf.service.js");

module.exports.exportPdf = async (req, res) => {
  try {
    await generateConfigPdf(req.params.id, res);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
