const mongose = require("mongoose");
const watcheSchema = new mongose.Schema({
  image_url: String,
  title: String,
  description: String,
  toUSD: String,
});
const watchModal = mongose.model("flower", watcheSchema);

let seedTest = () => {
  let data = new watchModal({
    image_url: "shaima",
    title: "hi how ",
    description: "zsdfgfdhghkhkl",
    toUSD: "23",
  });
  data.save();
};
seedTest();

module.exports = {
  watchModal,
};
