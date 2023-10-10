import Header from "@/components/Header";
import ProfileImage from "@/components/ProfileImage";
import Badge from "@/components/Badge";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import ButtonTag from "@/components/ButtonTag";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#ffff",
        }}
        outerStyle={{
          mixBlendMode: "exclusion",
          border: "3px solid #ffff",
        }}
      />
      <Header />

      <main className="">
        <div className="sm:w-[70ch] sm:mx-auto md:w-[70ch] md:mx-auto p-4">
          <ProfileImage />
          <div className="pt-2">
            <h1 className="text-white text-xl pb-2">
              Hey, i’m <span className="font-bold">Fabricio</span>, full stack
              developer and technology
              <span className="font-bold"> enthusiast</span>.
            </h1>
            <p className="text-gray-300 text-lg pb-4">
              I’m truly passionate about software development and love engaging
              in discussions to enhance the development experience.{" "}
            </p>
            <p className="text-white text-lg pb-4">
              I have a strong background in creating management systems for
              companies and have had the privilege to work on projects for the
              government of São Paulo.
            </p>
            <p className="text-gray-300 text-lg pb-4">
              On the front-end, I’m proficient in a wide range of tools,
              including <Badge tech="javascript" /> , <Badge tech="react" />,{" "}
              <Badge tech="next" />, and <Badge tech="angular" /> , among
              others. When it comes to the back-end, I bring my expertise in{" "}
              <Badge tech="java" /> and <Badge tech="python" /> to the table.
            </p>
            <p className="text-white text-lg pb-4">
              I have varied interests, watching anime, running, boxing, learning
              new languages, studying psychology and finance.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <ButtonTag icon={BsGithub}>Github</ButtonTag>
            <ButtonTag icon={BsLinkedin}>Linkedin</ButtonTag>
          </div>
        </div>
      </main>
    </>
  );
}
