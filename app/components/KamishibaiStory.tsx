import Image from "next/image";

type StoryLine = {
  text: string;
  emphasis?: boolean;
  muted?: boolean;
};

type StoryFrame = {
  image: string;
  alt: string;
  lines: StoryLine[];
  roomy?: boolean;
};

const STORY_FRAMES: StoryFrame[] = [
  {
    image: "/1.png",
    alt: "上京して少し孤独を感じる女の子の場面",
    roomy: true,
    lines: [
      { text: "上京したけど、友達できないな" },
      { text: "あの子、毎日いるな…\n声かけてみようかな" },
      { text: "でも、声かけにくい、、、", muted: true },
    ],
  },
  {
    image: "/2.png",
    alt: "NUGAで気になる相手を見つけた場面",
    lines: [
      { text: "え！", emphasis: true },
      { text: "NUGAのレーダーに、あの子がいる" },
      { text: "この席のところ…！" },
    ],
  },
  {
    image: "/3.png",
    alt: "ウィンク機能で安心してつながれると気づく場面",
    roomy: true,
    lines: [
      { text: "友達追加しようかな…" },
      { text: "でも、いきなりはびっくりするかも" },
      { text: "あ、NUGAには、ウィンク機能があるんだ" },
      { text: "お互いに送ったときだけ\nつながるんだよね" },
    ],
  },
  {
    image: "/4.png",
    alt: "ウィンク成立でうれしくつながる場面",
    lines: [
      { text: "あ！ウィンク成立した！", emphasis: true },
      { text: "私も気になってました！" },
      { text: "気づいたら、仲良くなってた" },
    ],
  },
];

export default function KamishibaiStory() {
  return (
    <section id="story" className="bg-[#f8f7ff] px-4 py-20 text-gray-800 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7b50eb] sm:text-sm">
            Story
          </p>
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            NUGAで自然につながる
          </h3>
          {/* <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
            話しかける前の迷いから、安心してつながれる瞬間まで。
            <br />
            心の声のテンポで、ゆっくり読める構成です。
          </p> */}
        </div>

        <div className="space-y-14 sm:space-y-16">
          {STORY_FRAMES.map((frame) => (
            <article
              key={frame.image}
              className="rounded-3xl border border-[#e8e2ff] bg-white/95 p-4 shadow-[0_22px_60px_-38px_rgba(94,23,235,0.55)] transition-transform duration-300 hover:-translate-y-0.5 sm:p-5"
            >
              <div className="overflow-hidden rounded-2xl border border-[#efeafd] bg-white">
                <Image
                  src={frame.image}
                  alt={frame.alt}
                  width={2000}
                  height={1300}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="h-auto w-full"
                />
              </div>

              <div className={`px-2 pb-3 pt-6 text-center sm:px-3 ${frame.roomy ? "space-y-6 sm:space-y-7" : "space-y-4 sm:space-y-5"}`}>
                {frame.lines.map((line) => (
                  <p
                    key={line.text}
                    className={`whitespace-pre-line leading-[1.9] ${
                      line.emphasis
                        ? "text-2xl font-extrabold leading-tight text-[#5e17eb] sm:text-[1.95rem]"
                        : line.muted
                          ? "text-[1.04rem] text-gray-500 sm:text-lg"
                          : "text-[1.04rem] text-gray-700 sm:text-lg"
                    }`}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

  
      </div>
    </section>
  );
}
