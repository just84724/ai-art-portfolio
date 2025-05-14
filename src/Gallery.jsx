import React, { useState } from 'react';
import './App.css'
//import 'react-image-lightbox/style.css';
//import Lightbox from 'react-image-lightbox';



const images = [
  {
    id: 1,
    imageUrl: '/images/art1.jpg',
    title: '阿爾托莉雅·潘德拉貢(Saber)',
    description: '使用 Illustrious 模型創作，呈現柔和夢幻感。',
    prompt:'提示詞: masterpiece,best quality, amazing quality, very aesthetic,absurdres,highres,rei \(sanbonzakura\), fishine, fuzichoco, lam \(ramdayo\), void 0, rella, 1girl,  saber \(fate\), drawing sword, glowing eyes, medium breasts, expressionless, high collar, black golden robe, pauldrons, gauntlets, armor, sharp crown, holy magic, glowing magic, holding holy staff, holy sword, holding sword, sword at front, sword over face, sword over one eye, looking at viewer, face focus, upper body, close up, front view, backlighting, cinematic lighting, lens flare, dark red theme, dark background, cloudy sky, night, star \(symbol\), spot color, ',
    category: ['混合畫家風格','角色人物'],
  },
  {
    id: 2,
    imageUrl: '/images/art2.jpg',
    title: '阿爾托莉雅·潘德拉貢(Saber)',
    description: '結合未來感與宗教風格的實驗性作品。',
    prompt:'提示詞: masterpiece,best quality, amazing quality, very aesthetic,absurdres,highres,rei \(sanbonzakura\), fishine, fuzichoco, lam \(ramdayo\), void 0, rella, 1girl,  saber \(fate\), drawing sword, glowing eyes, medium breasts, expressionless, high collar, black golden robe, pauldrons, gauntlets, armor, sharp crown, holy magic, glowing magic, holding holy staff, holy sword, holding sword, sword at front, sword over face, sword over one eye, looking at viewer, face focus, upper body, close up, front view, backlighting, cinematic lighting, lens flare, dark red theme, dark background, cloudy sky, night, star \(symbol\), spot color,',
    category: '混合畫家風格',
  },
  {
    id: 3,
    imageUrl: '/images/art3.jpg',
    title: '阿爾托莉雅·潘德拉貢(Saber)',
    description: 'LoRA 訓練的和風角色，展現細節刻畫。',
    prompt:'提示詞:  masterpiece,best quality, amazing quality, very aesthetic,absurdres,highres, as109:0.7, ask_(askzy), wlop, ningen_mame, ciloranko, artist:rhasta:0.7, tidsean, 1girl,  saber \(fate\), drawing sword, glowing eyes, medium breasts, expressionless, high collar, black golden robe, pauldrons, gauntlets, armor, sharp crown, holy magic, glowing magic, holding holy staff, holy sword, holding sword, sword at front, sword over face, sword over one eye, looking at viewer, face focus, upper body, close up, front view, backlighting, cinematic lighting, lens flare, dark red theme, dark background, cloudy sky, night, star \(symbol\), spot color,',
    category: '混合畫家風格',
  },
  {
    id: 4,
    imageUrl: '/images/art4.jpg',
    title: '原創角色',
    description: '無線條風格，加入了各個畫家的風格。',
    prompt:'提示詞:<lora:SDXL\Illustrious\dj_sloppa_noob_v2_vpred.safetensors:0.6:1.0>(no lineart:1.1),Tsukumizu,(porforever:0.5),(rei \(sanbonzakura\):0.8),ask \(askzy\), (ciloranko:0.7), (sho \(sho lwlw\):0.9), (as109:0.75), stocking_\(psg\), panty_\(psg\), long_hair, back to back, breasts, looking_at_viewer, blush, smile, open_mouth, bangs, blue_eyes, multiple_girls, blonde_hair, dress, bow, 2girls, cleavage, hair_between_eyes, bare_shoulders, jewelry, medium_breasts, green_eyes, blue_hair, collarbone, upper_body, pink_hair, purple_hair, ahoge, hair_bow, heart, multicolored_hair, earrings, frills, parted_lips, sleeveless, choker, shiny, blunt_bangs, necklace, two-tone_hair, aqua_eyes, eyelashes, sleeveless_dress, siblings, blue_bow, red_dress, frilled_dress, bright_pupils, white_pupils, hoop_earrings, colored_inner_hair, frilled_choker ,very aesthetic, masterpiece, best quality, highres, absurdres',
    category: '混合畫家風格',
  },
  {
    id: 5,
    imageUrl: '/images/art5.jpg',
    title: '混合畫家風格',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞: 1girl,solo,katana,holding sword,red eyes,hair ornament,multicolored hair,japanese clothes,long hair,moody lighting,looking at viewer,body facing left,kimono,oil-paper umbrella,streaked hair,tassel,hair bun,hair flower,bangs,long sleeves,bell,frilled sleeves,off shoulder,parted lips,white hair,frills,grey hair,wide sleeves,hair bell,bare shoulders,sash,sheath,spider lily,flower field,rurudo,(kani biimu:0.5),(fuzichoco:0.3),(wlop:0.5),(mignon:0.4),(momoko \(momopoco\):0.6),(kazutake hazano:0.6),masterpiece,highres,incredibly absurdres,large full moon,night sky,',
    category: '混合畫家風格',
  },
  {
    id: 6,
    imageUrl: '/images/art6.jpg',
    title: '原創角色',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞: (konpaku_youmu:1.2),(solo:1.6),alternate costume,(artist:chyan),[[[artist:kanikama]]],((artist:mika_pikazo)),(artist:leiq),[[artist:toosaka_asagi]],(limited palette ),((high contrast)),(eye_trail),short hair,holding guan_dao,flaming sword,white hair,blue eyes,japanese clothes,gloves,hair ornament,sash,sideboob,((dragon tattoo)),green kimono,kimono dress,(arm tattoo),looking at viewer,castle,lake,sky,cloud,stairs,light_trail,star (sky),',
    category: '混合畫家風格',
  },
  {
    id: 7,
    imageUrl: '/images/art7.jpg',
    title: '砂狼白子',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞: masterpiece, best quality, good quality, <lora:SagawaSDXLstyle:0.5>, <lora:dj_sloppa_noob_v2_vpred:0.6>, <lora:zhuyuan-noob-Tanger-000013:0.8>, 1girl, solo, shiroko \(blue archive\),  breasts, gloves, solo, white background, cleavage, pale skin, simple background, holding gun, handgun,',
    category: '混合畫家風格',
  }, 
  {
    id: 8,
    imageUrl: '/images/art8.jpg',
    title: '原創角色',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞:8k, best quality, masterpiece, (ultra-detailed), (high detailed skin), (artist:ningen_mame:0.9), (artist:sho_(sho_lwlw):0.9), (artist:rhasta:0.9), (artist:wlop:0.7), (artist:ke-ta:0.6), (fkey:0.5), (tianliang duohe fangdongye:0.5), (hiten \(hitenkei\):0.6), best quality, amazing quality, very aesthetic, (artist:onineko:0.826446), (artist:hito komoru:0.8), (artist:quasarcake:0.9), (artist:reoen:0.826446), artist:machi, (7769:1.21), solo, hand fan, flower, japanese clothes, holding, blonde kimono, (golden trim:1.2), jewelry, holding fan, sash, sitting, looking at viewer, obi, tabi, long sleeves, socks, folding fan, white socks, wide sleeves, bangs, knee up, indoors, yellow flower, thighs, jewelry, flower, covered mouth, tassel, covering mouth, dutch angle, earrings, pelvic curtain, (large breasts:1.2), cleavage, hanging breasts, masterpiece, best quality, amazing quality, very aesthetic, absurdres, 1girl, solo, shiroko \(blue archive\) ',
    category: '混合畫家風格',
  },
  {
    id: 9,
    imageUrl: '/images/art9.jpg',
    title: '原創角色',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞:rei \(sanbonzakura\), fishine, fuzichoco, lam \(ramdayo\), void 0, rella, 1girl, mature female, tall female, dark purple hair, short hair, wavy hair, yellow eyes, thick eyelashes, + +, jitome, glowing eyes, medium breasts, expressionless, high collar, black golden robe, pauldrons, gauntlets, armor, sharp crown, holy magic, glowing magic, holding holy staff, holy sword, holding sword, sword at front, sword over face, sword over one eye, looking at viewer, face focus, upper body, close up, front view, backlighting, cinematic lighting, lens flare, dark red theme, dark background, cloudy sky, night, star \(symbol\), spot color,, masterpiece, best quality, amazing quality, very aesthetic, absurdres, best quality, newest, ',
    category: '混合畫家風格',
  },
  {
    id: 10,
    imageUrl: '/images/art10.jpg',
    title: '原創角色',
    description: '使用各個畫家風格混合成的AI繪圖。',
    prompt:'提示詞: luo tianyi,sitting on boat,alternate_costume,(artist:atdan:0.9),(artist:torino_aqua:0.8),(artist:izumi_tsubasu:0.9),(artist:kedama_milk:1.05),(artist:nardack:0.75),(artist:ke-ta:0.95),(artist:toosaka_asagi:0.7),(artist:sho_(sho_lwlw):0.8),(artist:as109:0.8),{{{{{{{{ink_wash_painting,sketch,Chinese style}}}}}}},year 2024, 1girl,{{{portrait}}},close-up,{{{transparent clothes,see-through chinese hanfu}}},{{white trim}},{{{{naked blue chinese hanfu}}}},{hanfu neck strap},breasts strap,erotic lingerie,{{{side-tie}}},{{long rope}},strapless,ribbon,chinese knot,{{{see-through shawl,see-through capelet ,tassel,floating clothes,gold trim}}},lotus,cleavage,wide sleeves,sitting on boat,boat,lotus leaf,lotus flower,collarbone,long sleeves,temple,mountain,buddha,sun,clouds,{{fog}},rain,water,splashing,hydrokinesis,wading,huge leaf,holding huge leaf,rain,leaf umbrella,lotus leaf, ',
    category: '混合畫家風格',
  },
  {
    id: 11,
    imageUrl: '/images/art11.jpg',
    title: '艾拉(戰雙帕彌什)',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞:1girl, ayla \(punishing: gray raven\), punishing: gray raven, bathtub,feet,hand on own face,smile,underwear,petals,leaf,waves,pointing at viewer, [artist:alpha],artist:ciloranko,solo,[artist:sho (sho lwlw)],[[tianliang duohe fangdongye]],[artist:rhasta],kani biimu,(wlop:0.6), masterpiece,best quality,newest,absurdres,highres,very awa,year 2024, newest,masterpiece,best quality, amazing quality, very aesthetic,absurdres,highres,',
    category: '混合畫家風格',
  },
  {
    id: 12,
    imageUrl: '/images/art12.jpg',
    title: '黑貞德(Fate/Grand Order)',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞: masterpiece,best quality, amazing quality, very aesthetic,absurdres,1girl, jeanne d"arc alter \(avenger\) \(first ascension\) \(fate\), fate/grand order,(cato (monocatienus):0.6,(engiyoshi:0.7),(shigino sohuzi:0.7),(gotyou:0.6),(jabara tornado:0.6),(masakichi (crossroad):0.7),large breasts, full body, closed mouth,light smile,cowboy shot,v,vibrant colors',
    category: '混合畫家風格',
  },
  {
    id: 13,
    imageUrl: '/images/art13.jpg',
    title: '黑貞德(Fate/Grand Order)',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞: very awa,year 2024, newest,masterpiece,best quality, amazing quality, very aesthetic,absurdres,highres,1girl, jeanne d"arc alter \(avenger\) \(first ascension\) \(fate\), fate/grand order,(peach11 01:0.7),gloves,elbow gloves, black gloves, white background, bare shoulders, simple background,  thighs, bangs, holding gun, handgun,looking away,bend over,',
    category: '混合畫家風格',
  },
  {
    id: 14,
    imageUrl: '/images/art14.jpg',
    title: 'Last Order(魔法禁書目錄)',
    description: '使用各個畫家風格混合成的AI繪圖，具有不同的特色。',
    prompt:'提示詞: extremely detailed cg, an extremely delicate, shiny hair, (shiny skin:1.1), (perfect lighting), (dynamic angle), ((Ultra-Detailed)), ((Ambient Light)), Backlighting, Realistic Shadows, (Detailed Face), (Detailed Hair:1.1), (Hyper-Detailed Eyes), Soft Light, Soft Lighting, (highly detailed:1.1), delicate details,soft lighting,shiny skin,extremely ,anime picture,high resolution,(delicated beautiful detaile glossy transparent hair:1.1), (delicated beautiful detaile eyes:1.1),Maximum clarity and sharpness,Multi-layered textures,delicate details,soft lighting, ray tracing,aalo, short hair, ahoge, goggles on head, blush stickers, collarbone, polka dot dress, blue dress, labcoat, white coat, long sleeves, indoors, restaurant, dinner, night, wine, small meals, wine glass, cheers, table, red sofa,chandelier, leather sofa, sitting, smile, open mouth,cowboy shot,vibrant colors,colorful,light smile,anime screencap, anime stylistic,',
    category: '角色人物',
  },
  
  

  // 你可以繼續加更多作品
];

const categories = ['首頁', '角色人物','混合畫家風格'];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('首頁');
  const [selectedImage, setSelectedImage] = useState(null);
  const imageGroups = images.reduce((acc, item) => {
    if (!acc[item.imageUrl]) {
      acc[item.imageUrl] = new Set();
    }
    acc[item.imageUrl].add(item.category);
    return acc;
  }, {});
  
  // 把出現在兩個以上類別的 imageUrl 挑出來
  const duplicateUrls = Object.entries(imageGroups)
    .filter(([_, categories]) => categories.size > 1)
    .map(([url]) => url);
  
  // 再回傳對應的完整圖片資料
  const duplicateImagesInDifferentCategories = images.filter(item =>
    duplicateUrls.includes(item.imageUrl)
  );

  const filteredImages = selectedCategory === '首頁'
    ? images
    : images.filter(img => img.category === selectedCategory);
    
    

  return (
    <div> 
    <div className="fade-in">   {/* 加入fadeIn動畫 */}
      <h1 className="text-4xl font-bold text-center mb-8">AI Art Gallery</h1>
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        
        style={{ backgroundImage: "url(/images/background.jpg)" }}
      />
    
      
  
      {/* 分類按鈕區塊 */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
  
      {/* 縮圖顯示區塊 */}
      <div className="w-full h-48 object-cover"> {/*thumbnail-container 原來的縮圖格式*/}
        {filteredImages.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={image.title}
            className="thumbnail"
            onClick={() => setSelectedImage(image.imageUrl)} // 點擊縮圖顯示原圖
          />
        ))}
      </div>
  
      {/* 放大圖片的Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="放大圖片" />
          </div>
        </div>
      )}
  
      {/* 圖片格線展示區塊 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => {
          const realIndex = images.findIndex(img => img.id === image.id);
          return (
            <div
              key={image.id}
              className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
              onClick={() => {
                setPhotoIndex(realIndex);
                setIsOpen(true);
              }}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-extrabold text-black">{image.title}</h2>
                <p className="text-sm text-gray-600">{image.description}</p>
                <p className="text-xl font-bold">{image.prompt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  
  )
}
