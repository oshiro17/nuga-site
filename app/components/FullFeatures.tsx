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
          NUGAの全機能一覧
        </h3>
        <p className="text-xl text-gray-600 mb-12 text-center">
          友達との繋がりを深める多様なツールが揃っています。
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <FeatureItemCard
            title="遊びたいスロット"
            description="この人と遊びたいけど誘いにくい時に便利。遊びたいスロットを送っておくだけで、相手も同じ時間に遊びたいと思っていた場合のみマッチ成立。断られる心配がありません。"
            icon={<IconSmartphone />}
            imageUrl={FEATURE_IMAGES.slot}
          />

          <FeatureItemCard
            title="匿名みんなで遊びたいカード"
            description="グループチャット内で匿名で『みんなで遊ばない？』を提案できます。賛成が半数を超えると賛成した人だけ公開され、言い出しっぺも自然に含まれる仕組みなので気まずさゼロ。"
            icon={<IconUsers />}
            imageUrl={FEATURE_IMAGES.anonGroup}
          />

          <FeatureItemCard
            title="しんぷるモード"
            description="SNSが苦手な人でも安心して使える、シンプルで迷わないチャット専用モード。インストール後すぐに直感的に使い始められます。"
            icon={<IconSmartphone />}
            imageUrl={FEATURE_IMAGES.simpleMode}
          />

          <FeatureItemCard
            title="電話リクエスト"
            description="久しぶりに電話したいけど相手の気分が分からない…。そんな時は電話リクエストを送るだけ。相手も『電話したい』気分のときだけマッチする安心設計です。"
            icon={<IconPhone />}
            imageUrl={FEATURE_IMAGES.phone}
          />

          <FeatureItemCard
            title="友だち探し"
            description="友だち、友だちの友だち、近くの人を一覧から探せます。地図のレーダー表示で距離感を把握しながら相手を確認し、気になった人はプロフィールからすぐ友だち追加できます。"
            icon={<IconMap />}
            imageUrl={FEATURE_IMAGES.map}
          />

          <FeatureItemCard
            title="プロフィール"
            description="名前・一言・SNSリンク・アイコンを自由に編集可能。自分専用のQRコードも表示でき、その場で簡単に友だち追加してもらえます。"
            icon={<IconUser />}
            imageUrl={FEATURE_IMAGES.profile}
          />

          <FeatureItemCard
            title="1対1チャット"
            description="2人だけのチャットルームでテキスト・画像送信・既読管理に対応。マッチした相手とは自動でチャットが開くためスムーズに会話がスタートできます。"
            icon={<IconMessageSquare />}
            imageUrl={FEATURE_IMAGES.chat1on1}
          />

          <FeatureItemCard
            title="グループチャット"
            description="複数人で会話できるグループトーク。テキスト、返信、画像送信もでき、コミュニケーションを広げられます。"
            icon={<IconMessageCircle />}
            imageUrl={FEATURE_IMAGES.groupChat}
          />

          <FeatureItemCard
            title="日程調整"
            description="複数の候補日を出して、誰がどの日に参加できるかを投票できます。結果は見やすい表として表示され、予定決めがスムーズに。"
            icon={<IconCalendarCheck />}
            imageUrl={FEATURE_IMAGES.schedule}
          />

          <FeatureItemCard
            title="匿名タイムライン"
            description="ランダムネームで自由につぶやける匿名タイムライン。2列グリッドでサクサク読めて、コメントも匿名で参加可能。通報機能もあり安全設計です。"
            icon={<IconMessageSquareText />}
            imageUrl={FEATURE_IMAGES.timeline}
          />

          <FeatureItemCard
            title="通知管理"
            description="通知の許可状況を自動で確認し、通知設定やトークン更新、バッジ消去まで裏側で管理。重要な連絡を見逃さないようサポートします。"
            icon={<IconBell />}
            imageUrl={FEATURE_IMAGES.notification}
          />

        </div>
      </div>
    </section>
  );
}