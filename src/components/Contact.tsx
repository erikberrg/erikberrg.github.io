import { Github, Instagram, Linkedin } from "iconoir-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Title from "./Title";

export default function Contact() {
    return (
        <MaxWidthWrapper>
            <Title>Want to work together?</Title>
            <div className="w-full h-24 bg-zinc-100 rounded-3xl flex flex-row justify-between items-center sm:mb-16 mb-8 border-zinc-300/30 border-[1px]">
                <div className="sm:ml-8 ml-8">
                    <p className="sm:text-2xl text-md text-zinc-500 font-regular">erikd.berg@outlook.com</p>
                </div>
                <div className="flex flex-row sm:mr-8 mr-8 space-x-4">
                    <a className="p-2 bg-zinc-200 rounded-full hover:bg-zinc-800 hover:text-white" href="https://www.linkedin.com/in/erikberrg/" target="_blank" rel="noreferrer">
                        <Linkedin strokeWidth={2} height={24} width={24} />
                    </a>
                    <a className="p-2 bg-zinc-200 rounded-full hover:bg-zinc-800 hover:text-white" href="https://www.instagram.com/erikberrg/" target="_blank" rel="noreferrer">
                        <Instagram strokeWidth={2} height={24} width={24} />
                    </a>
                    <a className="p-2 bg-zinc-200 rounded-full hover:bg-zinc-800 hover:text-white" href="https://github.com/erikberrg" target="_blank" rel="noreferrer">
                        <Github strokeWidth={2} height={24} width={24} />
                    </a>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}