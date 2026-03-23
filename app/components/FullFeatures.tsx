import FeatureItemCard from "./FeatureItemCard";
import { FEATURE_IMAGES } from "../constants/featureImages";

import {
  Smartphone as IconSmartphone,
  Users as IconUsers,
  Phone as IconPhone,
  Map as IconMap,
  User as IconUser,
  MessageSquare as IconMessageSquare,
  MessageCircle as IconMessageCircle,
  CalendarCheck as IconCalendarCheck,
  MessageSquareText as IconMessageSquareText,
  Bell as IconBell,
} from "lucide-react";

export default function FullFeatures() {
  return (
    <section id="full-features" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">

        <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          NUGAの機能
        </h3>
        <p className="text-xl text-gray-600 mb-12 text-center">
          友達との繋がりを深める多様なツールが揃っています。
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <FeatureItemCard
            title="スロットマッチング"
            description="「遊びたい時間」を送るだけで、時間が重なった瞬間に自動マッチ。マッチ成立通知、重複スロット整理、即チャット導線、複数日まとめ送信（最大7日）まで対応。予定調整は、送るだけ。合った瞬間にマッチ。"
            icon={<IconSmartphone />}
            imageUrl={FEATURE_IMAGES.slot}
          />

  
          <FeatureItemCard
            title="ウィンクで繋がる"
            description="学校や街中で“あ、この人とSNSつながりたい”と思っても、いきなりフォローするのはちょっと怖い。
NUGAなら、まずはウィンク。
相手もあなたにウィンクしていたときだけ、お互いに通知されてDMが解放されます。
片方だけのウィンクは相手に知られません。"
            icon={<IconPhone />}
            imageUrl={FEATURE_IMAGES.wink}
          />

          {/* <FeatureItemCard
            title="濃いチャット体験（1対1・グループ）"
            description="画像送信、返信、ピン留め、送信取り消し、既読管理、通知連携に対応。画像は期限付き表示で期限後は自動クリーンアップ。雑談から約束まで、1つのトークで完結。"
            icon={<IconMessageSquare />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="スタンプ作成機能（画像＋絵文字＋音声）"
            description="自作スタンプを段階UIで作成し、チャットに即送信。音声付きスタンプの再生まで対応。自分だけのスタンプで、会話がキャラになる。"
            icon={<IconMessageCircle />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="シール帳（コレクション）体験"
            description="シール帳の背景変更、配置ドラッグ、拡大、ページ追加まで対応。集める、並べる、魅せる。あなたのシール帳。"
            icon={<IconCalendarCheck />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="シール交換マーケット"
            description="交換リクエスト作成、承諾/辞退、承諾時の自動移転、通知、公式キャンペーン配布、いいね機能まで実装。欲しいシールは、交渉して手に入れる。"
            icon={<IconUsers />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="グループ向け遊び機能"
            description="日程投票カード、匿名「みんなで遊びたい」カード（過半数で開示）を用意。グループの“遊びたい”を、自然にまとめる。"
            icon={<IconCalendarCheck />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="友達追加導線が多い（離脱しにくい）"
            description="ID検索、QR読み取り/表示、友達の友達、近くのユーザー、友達一覧管理まで対応。つながり方を、1つにしない。"
            icon={<IconUser />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="安心・運用機能"
            description="ブロック/通報、権限ルールによる公開範囲制御、通知トークン清掃、期限データ掃除など保守面を整備。楽しいだけじゃない。安心して使える設計。"
            icon={<IconBell />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="しんぷるモード"
            description="UIを絞ったEasyモードを実装。高機能版が重いユーザーにも対応。迷わず使える、やさしいモード。"
            icon={<IconSmartphone />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="基本基盤（認証・プロフィール・通知）"
            description="メール認証、パスワード再設定、ID設定、プロフィール編集、SNS連携、プッシュ通知連携を網羅。"
            icon={<IconMessageSquareText />}
            imageUrl={FEATURE_IMAGES.slot}
          /> */}

        </div>
      </div>
    </section>
  );
}
