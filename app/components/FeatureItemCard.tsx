"use client";

import React from "react";

type FeatureItemCardProps = {
  title: string;
  description: string;
  // icon: React.ReactNode;
  imageUrl: string;
  featureFlag?: string;
};

export default function FeatureItemCard({
  title,
  description,
  // icon,
  imageUrl,
  featureFlag,
}: FeatureItemCardProps) {
  return (
    <div className="
      group relative overflow-hidden rounded-3xl shadow-lg 
      bg-white/60 backdrop-blur-sm border border-white/40 
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
    ">
      {/* 画像 */}
      <div className="relative w-full aspect-[2/1] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-500 
                     group-hover:scale-105 group-hover:brightness-90"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/cccccc/555555?text=No+Image";
          }}
        />

        {/* うっすら紫のグラデオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#5e17eb]/30 to-transparent" />

        {featureFlag ? (
          <div className="absolute top-4 right-3 z-20 rotate-2">
            <div className="relative inline-flex items-center bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
              {featureFlag}
              <span
                aria-hidden="true"
                className="absolute top-0 -right-3 h-0 w-0 border-y-[14px] border-y-transparent border-l-[12px] border-l-emerald-500"
              />
            </div>
          </div>
        ) : null}

        {/* アイコンのバッジ */}
        {/* <div className="
          absolute top-4 left-4 p-3 rounded-2xl 
          bg-white/30 backdrop-blur-md shadow-md
          text-[#5e17eb] group-hover:scale-110 transition
        ">
          {icon}
        </div> */}
      </div>

      {/* テキスト部分 */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h4>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
