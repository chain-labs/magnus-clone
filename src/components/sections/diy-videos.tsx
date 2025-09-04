import siteContent from "@/content/site";

export default function DIYVideos() {
  const videos = siteContent.diyVideos;
  return (
    <section className="py-10 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-2">{videos.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{videos.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.items.map((v) => (
            <div key={v.id} className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 bg-white">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-30 z-10" />
                <img src={v.thumb} alt={v.title} className="w-full h-52 object-cover rounded-t-xl" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-all duration-300 z-20 opacity-0">
                  <button className="bg-white rounded-full p-4 shadow-xl transform transition-transform duration-300 hover:scale-110 group" aria-label="Play video">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play h-8 w-8 text-gray-800 group-hover:text-black">
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </button>
                </div>
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full z-30">{v.duration}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{v.title}</h3>
                <p className="text-gray-600">
                  {v.id === "r5VqQq5fESU"
                    ? "Quick answers to the most frequently asked questions about investing through our platform."
                    : v.id === "IMt8gETvUts"
                    ? "Learn how often we update our investment recommendations and what triggers these updates."
                    : "Learn how the advised range helps you stay within suitable investment boundaries tailored to your risk profile."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
