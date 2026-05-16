const ITEMS = [
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



export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-5xl font-bold uppercase text-center">
                    Gallery
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {ITEMS.map((item, index) => (
                        <div
                            key={index} {...item}
                            className="overflow-hidden rounded-3xl bg-white shadow-xl"
                        >
                            <div className="aspect-[4/3] bg-slate-200" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
