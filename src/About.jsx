import React from 'react';
import './app.css';  // 加入faceIn動畫必須加入app.css

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="fade-in">   {/* 加入faceIn動畫 */}
      <h1 className="text-3xl font-bold mb-4">關於我</h1>
      
      
      <p className="mb-4 text-lg leading-relaxed">
        嗨，我是 AI 藝術創作者，來自台灣。
        我熱愛結合科技與藝術，透過各種 AI 模型（例如 Stable Diffusion、SDXL、LoRA）創作出獨特的風格作品。
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        我的作品主題多為幻想風格、美少女、奇幻世界觀與情感表現，並經常嘗試跨模組風格融合。
        除了圖像創作，我也會撰寫相關紀錄與教學文章，分享創作過程與技巧。
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        技術方面，我熟悉 React、Node.js、Vite、前後端整合，也有使用過 Linux、SQL、PHP、Unity 等技術。
        目前正在建立這個網站作為我的個人作品展示與部落格平台。
      </p>

      <p className="text-lg leading-relaxed">
        歡迎來信或私訊交流創作想法！💬
      </p>
      </div>
    </div>
  );
}