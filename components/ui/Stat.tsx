"use client";

import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

type Props = {
  number: number;
  label: string;
  suffix?: string;
};

export default function Stat({ number, label, suffix = "" }: Props) {
  return (
    <div>
      <p className="text-4xl font-bold text-cyan-400">
        <CountUp
  end={number}
  duration={2}
  separator=""
/>
        {suffix}
      </p>

      <p className="mt-2 text-gray-300">{label}</p>
    </div>
  );
}