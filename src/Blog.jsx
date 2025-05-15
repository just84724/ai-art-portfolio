import React from 'react';
import './App.css';  // 加入faceIn動畫必須加入app.css

const blogPosts = [
  {
    id: 1,
    title: '我的第一篇 AI 創作紀錄',
    date: '2023-05-02',
    content: '我第一次使用 PixAI 網站製作 AI 繪圖時，還是在 SD1.5 模型的時代，當時產出的圖片畫質相當粗糙，必須透過加入提升畫質的提示詞，才能勉強提高成品品質。如今已經來到 2025 年，AI 繪圖技術與兩年前相比有了極大的進步，現在不僅有 pony 模型、Illustrious XL 模型等高品質模型可用，最新版本的 Illustrious 模型甚至內建了藝術家標籤，能自由組合風格，大幅提升了創作的彈性與表現力。',
  },
  {
    id: 2,
    title: 'AI模型快速成長的一年',
    date: '2024-01-30',
    content: '2024 年可說是 AI 繪圖開始快速成長的一年，其中 Pony 模型的推出讓許多 AI 繪圖創作者感到相當震撼與驚訝。這個創新的模型讓套用各種風格、提示詞以及提升畫質的操作變得更加容易。回想在 SD1.5 的時代，想完成一張高品質的圖像往往需要搭配大量的 LoRA，例如：姿勢用的 LoRA、強化細節的 LoRA、眼睛專用的 LoRA，甚至還有一些迷因風格的 LoRA，才能達到理想效果。',
  },
  {
    id: 3,
    title: 'illustrious XL 模型的推出與崛起',
    date: '2025-01-30',
    content: '其實早在 2024 年 10 月，就已經發布了 Illustrious 模型，這也是當時讓許多 AI 繪圖創作者感到驚艷的一款模型。它可以套用各種藝術家的標籤來產生不同的風格，甚至可以進行風格混合。特別是其中的 NoobAI-XL 模型，更採用了 V-pred 與 Epsilon-pred 這兩種預測機制，這種預測模型是一種相當新穎的方法，能將多位藝術家的風格整合到同一模型中，所生成的圖像往往具有明顯的畫師風格（雖然仍然可能出現斷手或過擬合的問題）。到了 2025 年，Illustrious XL 模型正式進入爆發性成長的時期，幾乎所有的模型或 LoRA 都會搭配使用 Illustrious XL 的風格。我目前最常用的也是這款模型。',
  },
  {
    id: 4,
    title: '目前的 AI 繪圖生態',
    date: '2025-02-01',
    content: '而今年隨著 Illustrious XL 的大幅成長，新手與模型創作者都變得更容易上手。由於許多提示詞已經被簡化，模型本身就內建了基本的細節與畫質表現，使用者只需專注於如何設計出自己想要的 AI 圖像，或是創造專屬的 LoRA，大大降低了創作的門檻。',
  }
];

export default function Blog() { 
  return (
    <div>  
      <div className="fade-in">   {/* 加入faceIn動畫 */}
      <h1 className="text-2xl font-bold mb-4">Blog 部落格</h1> 
      </div>
      {blogPosts.map(post => (
        <div className="fade-in"> {/* 加入faceIn動畫 */}
        <div key={post.id} className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <p>{post.content}</p>
          <button className="mt-2 text-blue-500 hover:underline">閱讀更多</button>
          </div>
        </div>
        
      ))}
    </div>
  );
}