"Use strict";
const { watchModal } = require("../Modal/Flower.Modal");
let getTestControllers = (req, res) => {
  watchModal.find().then((data) => {
    res.status(200).json(data);
  });
};
let creatTest = (req, res) => {
  let testData = req.body;
  let newData = new watchModal(testData);
  newData.save();
  res.status(200).json(newData);
};
const deleteTest = (req, res) => {
  let idTest = req.parame.id;
  watchModal.findByIdAndDelete(idTest).then(() => {
    watchModal.find({}).then((data) => res.json(data));
  });
};
constupdataTest = async (req, res) => {
  let watchitem = req.parame.id;
  let update = req.body;
  watchModal.findOne({ _id: watchitem }).then((item) => {
    (item.image_url = update.image_url),
      (item.title = update.title),
      (item.description = update.description),
      (item.toUSD = update.toUSD);
    item.save();
  });
  let up = await watchModal.find({});
  res.status(200).send(up);
};

module.exports = {
  getTestControllers,
  creatTest,
  deleteTest,
  constupdataTest,
};
