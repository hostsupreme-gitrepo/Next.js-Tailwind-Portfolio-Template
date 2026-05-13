export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-5xl font-bold uppercase text-center">
                    Gallery
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12].map((item) => (
                        <div
                            key={item}
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
