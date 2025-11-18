export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">NUGA</h1>

      <p className="text-lg text-center max-w-xl leading-relaxed mb-10">
        遊びたい気持ちが重なったときだけ、そっとつながるアプリ。
        <br />
        気まずくない、自然に遊べるきっかけをつくります。
      </p>

      <a
        href="#"
        className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition"
      >
        Coming Soon
      </a>

      <footer className="mt-20 text-sm text-gray-500">
        © {new Date().getFullYear()} NUGA
      </footer>
    </main>
  );
}