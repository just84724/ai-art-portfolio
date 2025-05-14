import React from 'react';
import './app.css';  // 加入faceIn動畫必須加入app.css

const blogPosts = [
  {
    id: 1,
    title: '我的第一篇 AI 創作紀錄',
    date: '2025-04-20',
    content: '這篇文章分享了我第一張用 AI 畫出來的作品的心得...',
  },
  {
    id: 2,
    title: '嘗試不同模型的差異',
    date: '2025-04-22',
    content: '這次我嘗試了 SDXL 模型，畫風非常有層次感...',
  },
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