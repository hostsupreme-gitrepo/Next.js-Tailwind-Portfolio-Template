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
  images?: string[];
  startIndex?: number;
}

export function PortfolioCard({ img, title, desc, images = [], startIndex = 0 }: PortfolioCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const gallery = images.length ? images : [img];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    // reset index when image source or gallery changes
    setIndex(0);
  }, [img, images]);

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + 1) % gallery.length);
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-1 items-center justify-items-center w-full max-w-[95vw]">
            <div className="flex items-center justify-center lg:justify-start text-white text-xl lg:text-5xl">
              <div
                className="p-2 hover:text-blue-gray-400"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev(e);
                }}
              >
                {`< Previous`}
              </div>
            </div>

            <div
              className="flex justify-center max-w-3xl rounded-md bg-white p-1"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={gallery[index]}
                alt={title}
                width={1200}
                height={1200}
                onClick={() => setIsOpen(false)}
                className="h-auto w-full rounded-md object-contain max-h-[90vh]"
              />
            </div>

            <div className="flex items-center justify-center lg:justify-end text-white text-xl lg:text-5xl">
              <div
                className="p-2 hover:text-blue-gray-400 "
                onClick={(e) => {
                  e.stopPropagation();
                  showNext(e);
                }}
              >
                {`Next >`}
              </div>
            </div>
          </div>
        </div>
      )}

      <Card
        color="transparent"
        shadow={false}
        onClick={() => {
          setIndex(startIndex);
          setIsOpen(true);
        }}
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