"use client";

import { ProjectCard2 } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `/image/IMG_4481.jpg`,
    title: "Paintings",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    pictureleft: true
  },
  {
    img: `/image/IMG_4548.jpg`,
    title: "Drawings",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    pictureleft: false
  },
  {
    img: `/image/IMG_9140.jpg`,
    title: "Illustrations",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    pictureleft: true
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-40 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-1 gap-y-2 md:grid-cols-1 xl:grid-cols-1">
        {PROJECTS.map((props, idx) => (
          <ProjectCard2 key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
