import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      {/* ここに追加で content を書ける */}
      <section id="features" className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-extrabold mb-4 text-[#5e17eb]">
            NUGAが選ばれる理由
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            あなたの日常を豊かにする、独自の機能をご紹介します。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard title="ディープコネクション" description="表面的ではなく、価値観が合う親友と深く繋がれます。" />
            <FeatureCard title="プライベートサークル" description="信頼できる少人数グループで安全に交流できます。" />
            <FeatureCard title="共通の熱中度" description="熱中度アルゴリズムがあなたに合う相手を見つけます。" />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="text-4xl mb-4 text-[#5e17eb]">✨</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}