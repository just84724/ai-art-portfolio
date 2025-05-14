const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// ✅ 使用 Render 指定的 port，否則預設 5000（本地用）
const port = process.env.PORT || 5000

// 假設的 AI 藝術作品資料
const artworks = [
  { id: 1, title: 'Art 1', imageUrl: '/images/art1.jpg', description: 'This is AI Art 1' },
  { id: 2, title: 'Art 2', imageUrl: '/images/art2.jpg', description: 'This is AI Art 2' },
  { id: 3, title: 'Art 3', imageUrl: '/images/art3.jpg', description: 'This is AI Art 3' },
  { id: 4, title: 'Art 4', imageUrl: '/images/art4.jpg', description: 'This is AI Art 4' },
  { id: 5, title: 'Art 5', imageUrl: '/images/art5.jpg', description: 'This is AI Art 5' },
  { id: 6, title: 'Art 6', imageUrl: '/images/art6.jpg', description: 'This is AI Art 6' },
  { id: 7, title: 'Art 7', imageUrl: '/images/art7.jpg', description: 'This is AI Art 7' },
  { id: 8, title: 'Art 8', imageUrl: '/images/art8.jpg', description: 'This is AI Art 8' },
  { id: 9, title: 'Art 9', imageUrl: '/images/art9.jpg', description: 'This is AI Art 9' },
  { id: 10, title: 'Art 10', imageUrl: '/images/art10.jpg', description: 'This is AI Art 10' }, 
  { id: 11, title: 'Art 11', imageUrl: '/images/art11.jpg', description: 'This is AI Art 11' },
  { id: 12, title: 'Art 12', imageUrl: '/images/art12.jpg', description: 'This is AI Art 12' },
  { id: 13, title: 'Art 13', imageUrl: '/images/art13.jpg', description: 'This is AI Art 13' },
  { id: 14, title: 'Art 14', imageUrl: '/images/art14.jpg', description: 'This is AI Art 14' },
  
  // 更多作品...
];

app.get('/api/images', (req, res) => {
  res.json(artworks);
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});

