const webHookHandler = require("github-webHook-handler");
const handler = webHookHandler({ path: "/", secret: "mySecret" });
const httpServer = http
  .createServer((req, res) => {
    handler(req, res, err => {
      res.statusCode = 404;
      res.end("no such location");
    });
  })
  .listen(5001);
handler.on("error", err => {
  console.error("Error", err.message);
});
handler.on("push", event => {
  console.log(
    "Received a push event for %s to %s",
    event.payload.repository.name,
    event.payload.ref
  );
});
