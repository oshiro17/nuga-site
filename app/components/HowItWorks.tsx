"use client";
// --- NUGAの仕組みセクションのステップカードヘルパー ---
function StepCard({ number, title, children }) {
  return (
    <div className="relative p-6 pl-14 md:pl-16 bg-white rounded-xl shadow-lg border-l-4 border-transparent hover:border-[#5e17eb] transition duration-300 transform hover:scale-[1.01] group">
      {/* ステップ番号 */}
      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-[-12px] bg-[#5e17eb] text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold shadow-md transition duration-300 group-hover:bg-[#4d13c7]">
        {number}
      </span>
      <h4 className="text-xl font-bold mb-2 text-gray-900">{title}</h4>
      <p className="text-lg text-gray-700">{children}</p>
    </div>
  );
}
export default function HowItWorks() {
  const matchSuccessImageUrl = "/match-success.png"; // ← 画像ファイル名に変更してね

   return (
    <section 
      id="how-it-works" 
      className="py-24 px-4 bg-gray-100 text-gray-800 relative overflow-hidden"
      style={{ 
        // 「かっこいい」背景に刷新: グリッド、ドット、そしてグラデーションを組み合わせたモダンな背景
        backgroundImage: `
          linear-gradient(to right, #e7e7e7 1px, transparent 1px),
          linear-gradient(to bottom, #e7e7e7 1px, transparent 1px),
          radial-gradient(circle at center, #bfdbfe 1px, transparent 1px),
          linear-gradient(to top, #ffffff 0%, #f3f4f6 100%)
        `,
        backgroundSize: '40px 40px, 40px 40px, 8px 8px, 100% 100%',
        backgroundPosition: '0 0, 0 0, 0 0',
        backgroundBlendMode: 'soft-light, soft-light, normal, normal',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        <h3 className="text-sm font-semibold tracking-widest uppercase text-[#5e17eb] mb-3 text-center">
          How It Works
        </h3>

        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center leading-tight text-gray-900">
          気まずさゼロの新しい繋がり方
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* 左側: ステップ説明 */}
          <div className="space-y-10">

            {/* 導入部分 (デザイン強化) */}
            <div className="p-6 bg-white rounded-xl shadow-2xl border-l-8 border-[#5e17eb] transform hover:scale-[1.01] transition duration-300">
              <h4 className="text-2xl font-extrabold text-gray-900">📱 NUGAってどんなアプリ？</h4>

            </div>

            {/* ステップ 1 (ホバーエフェクトと装飾を追加) */}
            <StepCard number={1} title="「この時間この人と遊びたいよ～！」を送信">
              遊びたい時間帯を「スロット」として登録。<span className="font-semibold text-red-500">相手にはまだ通知されません。</span>
            </StepCard>

            {/* ステップ 2 (ホバーエフェクトと装飾を追加) */}
            <StepCard number={2} title="マッチング成立">
              相手も同じ時間に遊びたいと思ってたら、<span className="text-red-500 font-extrabold">即座にマッチング成立！</span>その時にだけ、はじめてお互いに「遊びたいと思ってた」ことがわかるんです。
            </StepCard>

            {/* 結論部分 (背景とボーダーのスタイルを強化) */}
            <div className="p-6 bg-[#5e17eb]/10 rounded-xl shadow-inner border border-[#5e17eb]/30">
              <h4 className="text-2xl font-bold mb-3 text-gray-900">自然な距離感でつながる</h4>
              <p className="text-lg text-gray-700">
                相手も遊びたいと思っていた場合だけマッチングだから、<span className="font-extrabold text-[#5e17eb]">断られることも、気まずさもありません。</span>
              </p>
            </div>

          </div>

          {/* 右側: 画像と装飾 (よりダイナミックなデザインに) */}
          <div className="flex justify-center items-center relative p-8">
            {/* 浮遊する背景エレメント (アニメーションを強調) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-[#5e17eb]/10 animate-[spin_30s_linear_infinite] opacity-50"></div>
              <div className="w-64 h-64 rounded-full bg-[#5e17eb]/20 absolute animate-[ping_3s_infinite] opacity-30"></div>
            </div>

            {/* 画像コンテナ (傾斜と深い影で立体感を強調) */}
            <div className="relative w-full max-w-sm rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] border-[10px] border-gray-900 bg-gray-900 overflow-hidden transform rotate-[-4deg] hover:rotate-0 transition duration-500 ease-in-out">
              {/* ノッチ */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-lg z-10"></div>
              
              {/* 画像本体 */}
              <img 
                src={matchSuccessImageUrl} 
                alt="NUGAのマッチング" 
                className="w-full h-auto object-cover" 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x500/808080/ffffff?text=Match+Success'; e.target.alt = 'プレースホルダー画像：マッチング成功を喜ぶ人'; }}
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* 以下のCSSアニメーション定義が必要です */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}