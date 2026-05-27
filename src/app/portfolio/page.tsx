// components
import { Navbar, Footer, PortfolioCard } from "@/components";


// sections
// import Testimonial from "./testimonial";

const ITEMS = [
    {
        img: `/image/IMG_4481.jpg`,
        title: "2 Women in Hijab",
        desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
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
        title: "Playing Bass",
        desc: "",

    },
    {
        img: `/image/muslim_woman-ib.jpg`,
        title: "Muslim Woman",
        desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    },

    {
        img: `/image/IMG_0504.jpg`,
        title: "Man in Turbin",
        desc: "",

    },
    {
        img: `/image/unknown_man_2026-05-09_072533.png`,
        title: "Unknown Man",
        desc: "",

    },
    {
        img: `/image/Scan_20260414-adjusted.JPG`,
        title: "Self Portrait",
        desc: "",

    },
];



export default function PortfolioPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="mb-8 text-5xl font-bold uppercase text-center">
                        Portfolio
                    </h2>
                    <div className="container mx-auto grid grid-cols-1 gap-x-1 gap-y-2 md:grid-cols-1 xl:grid-cols-1">

                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {ITEMS.map((item, index) => (
                            <PortfolioCard key={index} {...item} images={ITEMS.map(i => i.img)} startIndex={index} />
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
