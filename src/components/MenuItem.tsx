import React, { PropsWithChildren } from "react";

type Props = {
  link?: string;
};

export default function MenuItem({
  children,
  link = "",
}: PropsWithChildren<Props>) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        className="text-white text-lg  font-medium hover:text-gray-400 transition-all"
      >
        {children}
      </a>
    </li>
  );
}
