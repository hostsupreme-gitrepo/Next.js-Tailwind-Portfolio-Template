// components
import { Navbar, Footer } from "@/components";
import Image from "next/image";

// sections
import Testimonial from "./testimonial";

const ITEMS = [
  {
    img: `/image/IMG_4481.jpg`,
    title: "2 Women in Hijab",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    pictureleft: true
  },
  {
    img: `/image/IMG_4548.jpg`,
    title: "James Baldwin",
    desc: "",
  
  },
  {
    img: `/image/IMG_9140.jpg`,
    title: "Unknown Street Illustration",
    desc: "",
  
  },
  {
    img: `/image/IMG_4448.jpg`,
    title: "Man in Hat",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",

  },
  {
    img: `/image/Donald-Glover-Sketch_2026-05-09_070115.png`,
    title: "Donald Glover",
    desc: "",
  
  },
  {
    img: `/image/IMG_4509.jpg`,
    title: "Unknown Street Illustration",
    desc: "",
  
  },
];



export default function GalleryPage() {
    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-5xl font-bold uppercase text-center">
                    Gallery
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {ITEMS.map((item, index) => (
                        <div
                            key={index} {...item}
                            className="overflow-hidden rounded-2xl bg-white shadow-xl"
                        >
                            <div  className="p-2 mb-2 text-xl  ">
                                {item.title}
                            </div>
                            <div className="aspect-[4/3] bg-slate-200" >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={768}
                                    height={768}
                                    className="h-full w-full object-cover"
                            />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
              <Footer />
              </>
    );
}
