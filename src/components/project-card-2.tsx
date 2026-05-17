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
    pictureleft: boolean;
}

export function ProjectCard2({ img, title, desc, pictureleft }: ProjectCardProps) {

    const cardheader = () => {
        return (
            <CardHeader floated={false} className="mx-0 mt-0 mb-6 w-full md:w-1/2 bg-[#b5c8fc7c] md:h-[50vh] relative">
                <Typography variant="h5" className="md:hidden mb-2 pt-2 text-5xl  w-full text-center">
                    {title}
                </Typography>
                <Image
                    src={img}
                    alt={title}
                    width={768}
                    height={768}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
        )
    }

    const cardbody = () => {
        return (
            <CardBody className="p-0 hidden md:flex lg:flex flex-col items-center gap-2 w-full md:w-1/2">
                <a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-800 "   >
                    <Typography variant="h5" className="mb-2 text-5xl lg:text-7xl ">
                        {title}
                    </Typography>
                </a>
            </CardBody>
        )
    }

    const bgcolor = pictureleft ? "md:bg-black" : "md:bg-blue-700";
    const cardstyle = `flex flex-col md:flex-row items-center gap-6 ${bgcolor}`;

    return (
        <Card color="transparent" shadow={false} className={cardstyle}>
            {pictureleft ? (
                <>
                    {cardheader()}
                    {cardbody()}
                </>
            ) : (
                <>
                    {cardbody()}
                    {cardheader()}
                </>
            )}
        </Card>
    );
}

export default ProjectCard2;