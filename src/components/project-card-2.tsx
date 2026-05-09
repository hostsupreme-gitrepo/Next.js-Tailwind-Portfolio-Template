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
            <CardHeader floated={false} className="mx-0 mt-0 mb-6 md:h-[50vh]">
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
            <CardBody className="p-0 flex flex-col  items-center gap-2 w-full">
                <a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-800"   >
                    <Typography variant="h5" className="mb-2 text-7xl">
                        {title}
                    </Typography>
                </a>
{/*                 <Typography className="mb-6 font-normal !text-gray-500">
                    {desc}
                </Typography>
                <Button color="gray" size="sm">
                    see details
                </Button> */}
            </CardBody>
        )
    }

    const bgcolor = pictureleft ? "bg-black" : "bg-blue-00";
    const carrdstyle = `flex flex-col md:flex-row items-center gap-6 ${bgcolor}`;
    
    return (
        <Card color="transparent" shadow={false} className={carrdstyle}>
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