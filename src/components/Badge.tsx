import Image from "next/image";
import React from "react";

type Props = {
  tech:
    | "javascript"
    | "react"
    | "next"
    | "tailwind"
    | "angular"
    | "java"
    | "python";
};

export default function Badge({ tech }: Props) {
  const icons = {
    javascript: {
      icon: "/assets/javascript.svg",
      color: "text-yellow-javascript",
      name: "Javascript",
    },
    react: {
      icon: "/assets/react.svg",
      color: "text-blue-react",
      name: "React",
    },
    next: {
      icon: "/assets/next.svg",
      color: "text-white",
      name: "Next.js",
    },
    tailwind: {
      icon: "/assets/tailwind.svg",
      color: "text-blue-tailwind",
      name: "Tailwind",
    },
    angular: {
      icon: "/assets/angular.svg",
      color: "text-red-angular",
      name: "Angular",
    },
    java: {
      icon: "/assets/java.svg",
      color: "text-red-java",
      name: "Java",
    },
    python: {
      icon: "/assets/python.svg",
      color: "text-blue-python",
      name: "Python",
    },
  };

  const { icon, color, name } = icons[tech];
  return (
    <>
      <span
        className={`inline-flex items-center ${color} border-b-[1px] border-slate-50 border-opacity-10 p-0`}
      >
        <Image
          src={icon}
          alt="tag"
          width={16}
          height={16}
          className="mr-1 p-0"
        />
        {name}
      </span>
    </>
  );
}
