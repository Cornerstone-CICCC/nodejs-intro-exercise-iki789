import http from "http";

const server = http.createServer((request, response) => {
  if (request.url === "/" && request.method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Home</h1>");
    response.end();
  }
  if (request.url === "/about" && request.method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>About</h1>");
    response.end();
  }
  if (request.url === "/my-account" && request.method === "GET") {
    response.statusCode = 403;
    response.setHeader("Content-Type", "text/html");
    response.end("You have no access to this page");
  }

  response.statusCode = 404;
  response.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
