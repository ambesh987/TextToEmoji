const inputModel = require("../Model/inputModel");

const post = async (req, res) => {
  try {
    const data = await inputModel.create(req.body);
    res.status(200).json({
      status: "success",
      message: "data successfully created",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error creating",
    });
  }
};

const allData = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const skip = (page - 1) * limit;

    const inputData = await inputModel.find().skip(skip).limit(limit);
    const totalCount = await inputModel.count();

    res.status(200).json({
      status: "success",
      dataCount: inputData.length,
      totalCount,
      inputData,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "something went wrong",
    });
  }
};

module.exports = {
  post,
  allData,
};