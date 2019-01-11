const http = require("http");
const path = "/home/NIX/nikitina/projects/react-practice-test-shop/build";
const fs = require("fs");
const { api } = require("./api");
const { assets } = require("./assets");
const { static } = require("./static");

http
  .createServer((req, res) => {
    const url = new URL(`http://localhost:3010${req.url}`);

    if (url.pathname.startsWith("/api")) {
      api(req, res);
    } else if (url.pathname.startsWith("/assets")) {
      assets(req, res);
    } else {
      static(req, res);
    }
  })
  .listen(3010);
