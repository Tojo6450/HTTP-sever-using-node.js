
const http = require("http");

//web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> I am Supriyo Ghorui I am a Web developer.</h1>");
    res.end();
  }

  if (req.url === "/source-code") {
    res.write(
      "Hello, I am learning and my source code"
    );
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("This is my Contact number");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🔥 Listening on PORT ${PORT}`);
const http = require("http");})

