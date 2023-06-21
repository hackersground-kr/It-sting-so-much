const express = express();
const app = express;

app.get('/', (req, res) => {
  res.send('루트 페이지');
});

app.listen(8000, () => {
  console.log('서버 가동');
});

