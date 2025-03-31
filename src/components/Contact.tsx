import { Github, Instagram, Linkedin } from "iconoir-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Title from "./Title";

export default function Contact() {
    return (
        <MaxWidthWrapper>
            <Title>Want to work together?</Title>
            <div className="w-full h-24 bg-zinc-100 rounded-3xl flex flex-row justify-between items-center sm:mb-16 mb-8 border-zinc-300/30 border-[1px]">
                <div className="sm:ml-4 ml-4">
                    <p className="sm:text-2xl text-md text-zinc-500 font-regular">erikd.berg@outlook.com</p>
                </div>
                <div className="flex flex-row sm:mr-4 mr-4 space-x-4">
                    <a href="https://www.linkedin.com/in/erikberrg/" target="_blank" rel="noreferrer">
                        <Linkedin strokeWidth={2} height={32} width={32} />
                    </a>
                    <a href="https://www.instagram.com/erikberrg/" target="_blank" rel="noreferrer">
                        <Instagram strokeWidth={2} height={32} width={32} />
                    </a>
                    <a href="https://github.com/erikberrg" target="_blank" rel="noreferrer">
                        <Github strokeWidth={2} height={32} width={32} />
                    </a>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}