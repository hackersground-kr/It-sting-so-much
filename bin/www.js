const app = require("../app");

app.listen(process.env.PORT, () => {
  console.log(`서버가 포트 ${process.env.PORT}에서 실행 중입니다.`);
});
