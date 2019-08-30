const webHookHandler = require("github-webHook-handler");
const Koa = require("koa");
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const app = new Koa();
router.post("/webhook", async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
  next();
});
app.use(router.routes());
app.listen(5002, () => {
  console.log("http listen at 5001");
});
