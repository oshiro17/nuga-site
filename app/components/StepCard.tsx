"use client";

type StepCardProps = {
  number: number;
  title: string;
  children: React.ReactNode;
};

export default function StepCard({ number, title, children }: StepCardProps) {
  return (
    <div className="relative p-6 bg-white rounded-xl shadow-xl transition duration-500 hover:shadow-2xl hover:border-r-4 hover:border-yellow-500">

      {/* 左に丸番号 */}
      <span className="absolute left-0 top-0 mt-[-10px] ml-[-10px] bg-[#5e17eb] text-white rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold border-4 border-gray-100">
        {number}
      </span>

      <h4 className="text-2xl font-bold mb-3 text-[#5e17eb]">{title}</h4>

      <p className="text-lg text-gray-700 leading-relaxed">
        {children}
      </p>

    </div>
  );
}