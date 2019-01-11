const fs = require("fs");

module.exports = {
  api: (req, res) => {
    const url = new URL(`http://localhost:3010${req.url}`);
    const splitUrl = url.pathname.split("/");
    let data = fs.readFileSync("db.json");
    let parsedProducts = JSON.parse(data).discs;
    let sendData;

    if (url.pathname.endsWith("discs")) {
      const params = url.searchParams;
      let page = parseInt(params.get("_page"));
      let limit = parseInt(params.get("_limit"));
      if (page) {
        if (limit) {
          let start = limit * page - limit;
          let end = limit * page;
          sendData = parsedProducts.slice(start, end);
        } else {
          sendData = parsedProducts;
        }
      } else {
        sendData = parsedProducts.slice(0, limit);
      }
      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      res.write(JSON.stringify(sendData));
      res.end();
    } else if (splitUrl[2] === "discs") {
      sendData = parsedProducts.find(el => el.id === parseInt(splitUrl[3]));

      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      res.write(JSON.stringify(sendData));
      res.end();
    }
  }
};
