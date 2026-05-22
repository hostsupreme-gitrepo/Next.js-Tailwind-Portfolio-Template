import Image from "next/image";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface PortfolioCardProps {
  img: string;
  title: string;
  desc: string;
}

export function PortfolioCard({ img, title, desc }: PortfolioCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-1000 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="left-1 max-w-3xl rounded-md bg-white p-1 cursor-pointer"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={img}
              alt={title}
              width={1200}
              height={1200}
              onClick={() => setIsOpen(false)}
              className="h-auto w-full rounded-xl object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

      <Card
        color="transparent"
        shadow={false}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      >
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 aspect-[4/3]">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-0">
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
        </CardBody>
      </Card>
    </>
  );
}

export default PortfolioCard;