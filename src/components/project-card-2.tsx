import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  orientation: "left" | "right";
}

export function ProjectCard2({ img, title, desc, orientation }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false} className="flex flex-col md:flex-row items-center gap-6">
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 md:h-[50vh]">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>

      <CardBody className="p-0 flex flex-col items-start gap-2">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button color="gray" size="sm">
          see details
        </Button>
      </CardBody>

      
    </Card>
  );
}

export default ProjectCard2;