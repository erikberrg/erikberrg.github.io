import MaxWidthWrapper from "./MaxWidthWrapper";
import Title from "./Title";
import pfp from "../assets/pfp.avif";
import { ArrowRight } from "iconoir-react";
import resume from "../assets/resume.pdf";

export default function About() {
    return (
        <MaxWidthWrapper>
            <Title>About Me</Title>
            <div>
                <p className="text-2xl text-zinc-500 font-light tracking-wide">
                    Full time student, part time tennis player, and aspiring software developer.
                </p>
                <div className="flex sm:flex-row flex-col gap-4 pt-8">
                    <div className="sm:w-1/3 w-full bg-zinc-100 md:h-[600px] h-[300px] rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${pfp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                    <div className="flex flex-col justify-between items-end sm:w-2/3 w-full bg-zinc-100 md:h-[600px] h-[300px] rounded-3xl sm:p-8 p-4 border-zinc-300/30 border-[1px]">
                        <div className="space-y-4">
                            <p className="md:text-xl text-md text-zinc-500 font-extralight tracking-wide">I am currently pursuing a Bachelor of Science in Computer Information Systems at the University of Wisconsin Stevens Point, where I also played varsity tennis.  My experience playing on a team has equipped me with a solid foundation in teamwork, discipline, and being a part of something bigger than myself.  I am driven by a passion for innovation and creativity, always striving to push boundaries and learn as much as possible.</p>
                            <p className="md:text-xl invisible md:visible text-zinc-500 font-extralight tracking-wide">I have experience in React Native, React, Next.js, Vite, R, C++, Java, Javascript/Typescript, Tailwind, HTML, CSS, Adobe Suite, Affinity Suite, Microsoft Suite and much more.  Below is a link to my resume if you would like to know more.</p>
                        </div>
                        <a href={resume} download rel="Resume" className="flex flex-row items-center justify-between gap-2 text-base text-black bg-zinc-200 rounded-full w-fit px-4 py-2 font-regular tracking-wide hover:bg-zinc-800 hover:text-white transition-all invisible md:visible">Resume<ArrowRight height={24} strokeWidth={2}/></a>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}