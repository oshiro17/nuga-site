
export default function Hero() {
const appStoreBadge = "/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg";
const playStoreBadge = "GetItOnGooglePlay_Badge_Web_color_Japanese.png";
    return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">

      {/* 背景画像（public/bg-hero.png） */}
      <img
        src="/bg-hero.png"
        className="absolute inset-0 w-full h-full object-cover opacity-70 blur-sm"
        alt="NUGA background"
      />

      {/* 紫フィルター */}
      {/* <div className="absolute inset-0 bg-[#5e17eb] backdrop-blur-sm"></div> */}

      {/* 中央コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 max-w-4xl">

        {/* ロゴ + タイトル */}
        <div className="flex flex-col items-center mb-6">
          
          {/* ロゴ（public/nuga-logo.svg） */}
          <img
            src="/nuga-logo.png"
            className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] shadow-2xl mb-4 transform hover:scale-105 transition ring-4 ring-white/30"
            alt="NUGA Logo"
          />

          <h1 className="text-white font-black text-7xl md:text-9xl tracking-tighter drop-shadow-xl">
            NUGA
          </h1>
        </div>

        <h2 className="text-white text-3xl md:text-5xl font-bold mt-4 mb-8 drop-shadow-lg leading-tight">
          友達から親友へ。
        </h2>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <a href="https://play.google.com/store/apps/details?id=com.nonokaoshiro.ringring" className="inline-block rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition ring-2 ring-white/50">
            <img src={appStoreBadge} className="h-14 md:h-16 object-contain rounded-xl" />
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.nonokaoshiro.ringring" className="inline-block rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition ring-2 ring-white/50">
            <img src={playStoreBadge} className="h-14 md:h-16 object-contain rounded-xl" />
          </a>
        </div>

        <p className="mt-8 text-white/80 text-sm md:text-base font-medium">
          iOSとAndroidで公開中。今すぐ始めよう。
        </p>
      </div>
      
    </section>
  );
}