import Router from "koa-router";
import data from "../model/data";
const apiRouter = new Router();

apiRouter.get("/", async ctx => {
  try {
    ctx.body = {
      status: 200,
      data
    };
  } catch (error) {
    console.log(error);
  }
});

export default apiRouter;
