import MaxWidthWrapper from "./MaxWidthWrapper";
import Title from "./Title";

import tpIcon from "../assets/tpIcon.png";
import ebPhoto from "../assets/ebPhoto.png";
import { ArrowRight } from "iconoir-react";
import eb5 from "../assets/pictures/eb5.avif";
import eb6 from "../assets/pictures/eb6.avif";
import track from "../assets/track.png";
import { motion, Variants } from "framer-motion";

// Reusable ProjectCard component
const ProjectCard = ({
  title,
  icon,
  description,
  image1,
  image2,
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
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is in view, only once
      variants={cardVariants}
      className="bg-zinc-100 relative overflow-hidden w-full md:h-[600px] h-[400px] rounded-3xl cursor-pointer border-zinc-300/30 border-[1px]"
      onClick={() => (window.location.href = link)}
    >
      <div className="flex flex-row justify-between items-center w-full h-1/3">
        <div className="flex flex-row justify-start items-center space-x-4 sm:ml-16 ml-8">
          <img
            src={icon}
            alt={`${title} Logo`}
            className="sm:h-16 sm:w-16 h-12 w-12"
          />
          <h1 className="sm:text-4xl text-md font-semibold">{title}</h1>
        </div>
        <div className="sm:mr-16 mr-8">
          <ArrowRight strokeWidth={3} />
        </div>
      </div>
      <div className="sm:w-1/2 w-full">
        <p className="text-xl font-regular sm:ml-16 mx-2 text-zinc-500">
          {description}
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl duration-300 opacity-80 hover:opacity-100 hover:scale-[101%] transition-all">
        {/* Render image1 */}
        {image1 && (
          <img
            src={image1}
            alt={imageAlt}
            className="absolute transform rotate-12 rounded-lg bottom-0 right-[5%] md:h-[60%] sm:h-[50%] h-[40%]"
          />
        )}

        {/* Render image2 */}
        {image2 && (
          <img
            src={image2}
            alt={imageAlt}
            className="absolute transform -rotate-12 rounded-lg bottom-[-8%] sm:right-[28%] right-[42%] md:h-[60%] sm:h-[50%] h-[40%]"
          />
        )}

        {/* Render image3 with different rotation and size adjustments */}
        {image3 && (
          <img
            src={image3}
            alt={imageAlt}
            className="absolute transform sm:-rotate-12 rotate-6 rounded-lg sm:bottom-[20px] bottom-[-30px] sm:right-[20px] right-[-40px] md:h-[70%] h-[55%]"
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
          description="Track Pacer is a pacer system that allows runners to track their running progress. Users can create a preset, and the light ring around the track will send a pacer light at whatever time and speed the user chooses.  I created the app in React Native and the hardware using the Arduino IDE"
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
          image2={eb5}
          link="https://erikberg.photography"
          imageAlt="Photography"
        />
      </div>
    </MaxWidthWrapper>
  );
}
