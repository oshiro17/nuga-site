type InvitePageProps = {
  params: Promise<{
    uid: string;
  }>;
};

const appStoreUrl =
  "https://apps.apple.com/jp/app/nuga-%E7%B4%84%E6%9D%9F%E3%82%A2%E3%83%97%E3%83%AA-%E5%8F%8B%E9%81%94%E3%83%81%E3%83%A3%E3%83%83%E3%83%88/id6754442698";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.nonokaoshiro.ringring";

export default async function InvitePage({ params }: InvitePageProps) {
  const { uid } = await params;
  const appLink = `https://www.nuga.tokyo/u/${encodeURIComponent(uid)}`;

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur">
        <p className="mb-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-cyan-200 uppercase">
          NUGA Invite
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          NUGAの招待リンクです
        </h1>
        <p className="mt-4 text-sm leading-7 text-white/75">
          アプリがインストールされていれば、このリンクをタップしたときにNUGAが開きます。
          開かない場合はアプリを最新版にしてからもう一度試してください。
        </p>
        <div className="mt-8 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
          <div className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
            Invite Link
          </div>
          <div className="mt-2 break-all text-sm text-white/85">{appLink}</div>
        </div>
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
          <a
            href={appStoreUrl}
            className="flex-1 rounded-2xl bg-white px-5 py-4 text-center font-semibold text-black transition hover:opacity-90"
          >
            App Storeで開く
          </a>
          <a
            href={playStoreUrl}
            className="flex-1 rounded-2xl border border-white/20 px-5 py-4 text-center font-semibold text-white transition hover:bg-white/10"
          >
            Google Playで開く
          </a>
        </div>
      </div>
    </main>
  );
}
