import React from "react";
import { IconType } from "react-icons";

type Props = {
  children: React.ReactNode;
  icon: IconType;
};

export default function ButtonTag({ children, icon }: Props) {
  const Icon = icon;
  return (
    <button
      className="bg-gray-800 text-gray-800 text-xl gap-2 inline-flex items-center px-2.5 py-0.5 rounded mr-2
       dark:bg-zinc-800
     dark:text-slate-100 border border-gray-600 border-opacity-40"
    >
      <Icon />
      {children}
    </button>
  );
}
