const fs = require("fs");

module.exports = {
  sender: (currFile, res) => {
    fs.readFile(currFile, (err, products) => {
      if (err) {
        res.statusCode = 404;
        res.end("not found");
      } else {
        res.end(products);
      }
    });
  }
};
