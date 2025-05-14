const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// ✅ 使用 Render 指定的 port，否則預設 5000（本地用）
const port = process.env.PORT || 5000;

// 假設的 AI 藝術作品資料
const artworks = [
  { id: 1, title: 'Art 1', imageUrl: '/images/art1.jpg', description: 'This is AI Art 1' },
  { id: 2, title: 'Art 2', imageUrl: '/images/art2.jpg', description: 'This is AI Art 2' },
  // 更多作品...
];

app.get('/api/artworks', (req, res) => {
  res.json(artworks);
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});