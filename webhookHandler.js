const createHandler = require("github-webHook-handler");
const handler = createHandler({
  path: "webHook",
  secret: "mySecret"
});

module.exports = () => {
  return;
};
