const { sender } = require("./sendHelper");
const path = "/home/NIX/nikitina/projects/react-practice-test-shop/build";
module.exports = {
  assets: (req, res) => {
    let currFile = path + req.url.replace("/assets", "");
    sender(currFile, res);
  }
};
