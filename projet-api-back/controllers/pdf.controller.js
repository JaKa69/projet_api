const pdfService = require("../services/pdf.service.js");

module.exports.exportPdf = async (req, res) => {
  try {
    await pdfService.generateConfigPdf(req.params.id, req.user, res);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
