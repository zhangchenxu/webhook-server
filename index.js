const webHookHandler = require("github-webHook-handler");
const handler = webHookHandler({ path: "/webhook", secret: "mySecret" });
const httpServer = http
  .createServer((req, res) => {
    handler(req, res, err => {
      res.statusCode = 404;
      res.end("no such location");
    });
  })
  .listen(5002);
handler.on("error", err => {
  console.error("Error", err.message);
});
handler.on("push", event => {
  console.log(
    "Received a push event for %s to %s",
    event.payload.repository.name,
    event.payload.ref
  );
  runCommand("sh", ["./auto_build.sh"], function(txt) {
    console.log(txt);
  });
});
function runCommand(cmd, args, callback) {
  var child = spawn(cmd, args);
  var response = "";
  child.stdout.on("data", function(buffer) {
    resp += buffer.toString();
  });
  child.stdout.on("end", function() {
    callback(resp);
  });
}
