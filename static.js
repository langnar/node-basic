const { sender } = require("./sendHelper");
const path = "/home/NIX/nikitina/projects/react-practice-test-shop/build";
module.exports = {
  static: (req, res) => {
    let currFile = req.url.includes("static")
      ? path + req.url
      : path + "/index.html";
    sender(currFile, res);
  }
};
