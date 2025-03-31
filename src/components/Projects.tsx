import MaxWidthWrapper from "./MaxWidthWrapper";
import Title from "./Title";

import tpIcon from "../assets/icon-5.png";
import ebPhoto from "../assets/logo.svg";
import { ArrowRight } from "iconoir-react";
import eb6 from "../assets/Stock photos - pexels.com-5.png";
import track from "../assets/Shot-4.png";
import { motion, Variants } from "framer-motion";

// Reusable ProjectCard component
const ProjectCard = ({
  title,
  icon,
  description,
  image1,
  image3,
  link,
  imageAlt,
}: any) => {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 100, // Starting position offscreen (downward)
    },
    onscreen: {
      opacity: 1,
      y: 0, // Final position (centered)
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="bg-zinc-100 relative overflow-hidden w-full md:h-[600px] h-[400px] rounded-3xl cursor-pointer border-zinc-300/30 border-[1px]"
      onClick={() => (window.location.href = link)}
    >
      <div className="flex flex-row justify-start items-center space-x-4 sm:ml-16 ml-8 h-1/3">
        <img
          src={icon}
          alt={`${title} Logo`}
          className="sm:h-16 sm:w-16 h-12 w-12 rounded-xl"
        />
        <h1 className="sm:text-4xl text-md font-semibold">{title}</h1>
      </div>
      <div className="sm:w-1/2 w-full flex flex-col justify-between items-start h-2/3">
        <p className="text-md md:text-xl font-extralight sm:ml-16 mx-2 text-zinc-500">
          {description}
        </p>
        <div className="flex flex-row space-x-2 sm:ml-16 mx-2 mb-8">
          <p className="font-regular">Learn more</p>
          <ArrowRight strokeWidth={3} />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl duration-300 opacity-85 hover:opacity-100 hover:scale-[100.8%] transition-all">
        {/* Render image1 */}
        {image1 && (
          <img
            src={image1}
            alt={imageAlt}
            className="absolute transform rotate-[15deg] -bottom-12 md:-bottom-28 -right-12 h-[450px] md:h-[800px]"
          />
        )}

        {/* Render image3 with different rotation and size adjustments */}
        {image3 && (
          <img
            src={image3}
            alt={imageAlt}
            className="absolute transform bottom-0 -right-20 md:h-[100%] h-[90%]"
          />
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-center items-center w-full">
        <Title>My Latest Projects</Title>
      </div>

      <div className="space-y-12">
        {/* ProjectCard for Track Pacer */}
        <ProjectCard
          title="Track Pacer"
          icon={tpIcon}
          description="Track Pacer is a pacer system that allows runners to track their running progress. Users can create a preset, and the light ring around the track will send a pacer light at whatever time and speed the user chooses.  I created the app in React Native and the hardware using the Arduino IDE."
          image3={track}
          link="https://github.com/erikberrg/track-pacer"
          imageAlt="Track Mockup"
        />
        {/* ProjectCard for EB Photography */}
        <ProjectCard
          title="EB Photography"
          icon={ebPhoto}
          description="EB Photography is a website for my photography business that I created using Next.js and hosted on AWS in an S3 Bucket. Users can view and download my photos and contact me for inquiries."
          image1={eb6}
          link="https://erikberg.photography"
          imageAlt="Photography"
        />
      </div>
    </MaxWidthWrapper>
  );
}
