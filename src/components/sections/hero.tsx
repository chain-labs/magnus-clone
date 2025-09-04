import Image from "next/image";

export default function Hero() {
	return (
		<div className="relative overflow-hidden">
			<picture>
				<source
					media="(min-width: 768px)"
					srcSet="/assets/desktop-hero.png"
				/>
				<source
					media="(max-width: 767px)"
					srcSet="/assets/mobile-hero.png"
				/>
				<img
					src="/assets/desktop-hero.png"
					alt="Background"
					className="w-full h-auto object-cover transition-all duration-300 ease-in-out"
					style={{
						width: "100%",
						height: "auto",
						objectFit: "cover",
					}}
				/>
			</picture>
			<div className="absolute top-8 right-6 md:top-8 md:right-4 z-10">
				<div className="relative flex flex-col items-end">
					<button
						className="group relative p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300/50 cursor-pointer z-10 overflow-hidden"
						aria-label="Follow Magnus Hathaway on LinkedIn"
						style={{
							background:
								"linear-gradient(135deg, rgba(0, 119, 181, 0.3) 0%, rgba(0, 119, 181, 0.6) 100%)",
							backdropFilter: "blur(10px)",
							border: "1px solid rgba(255, 255, 255, 0.2)",
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"></div>
						<div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out blur-sm"></div>
						<div className="text-2xl font-semibold relative z-10 text-white transition-all duration-500 ease-in-out group-hover:scale-110">
							Trusted by 3300+ Clients
						</div>
					</button>
					<div className="absolute bottom-0 right-0 w-14 md:w-16 h-14 md:h-16 rounded-full border-2 border-blue-400/60 transition-all duration-700 ease-in-out pointer-events-none opacity-40 scale-110 animate-ping"></div>
				</div>
			</div>
			<div className="absolute bottom-6 right-6 md:bottom-4 md:right-4 z-10">
				<div className="relative flex flex-col items-end">
					<div className="bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-lg border border-gray-200 mb-2 transition-all duration-700 ease-in-out transform translate-y-3 opacity-0 scale-95">
						<div className="flex items-center space-x-2">
							<div className="text-xs font-semibold text-gray-900 whitespace-nowrap">
								Connect With Us On LinkedIn
							</div>
						</div>
					</div>
					<button
						className="group relative p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300/50 cursor-pointer z-10 overflow-hidden"
						aria-label="Follow Magnus Hathaway on LinkedIn"
						style={{
							background:
								"linear-gradient(135deg, rgba(0, 119, 181, 0.3) 0%, rgba(0, 119, 181, 0.6) 100%)",
							backdropFilter: "blur(10px)",
							border: "1px solid rgba(255, 255, 255, 0.2)",
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"></div>
						<div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out blur-sm"></div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-linkedin w-5 h-5 md:w-6 md:h-6 relative z-10 text-white transition-all duration-500 ease-in-out group-hover:scale-110"
						>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
							<rect width="4" height="12" x="2" y="9"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
					</button>
					<div className="absolute bottom-0 right-0 w-14 md:w-16 h-14 md:h-16 rounded-full border-2 border-blue-400/60 transition-all duration-700 ease-in-out pointer-events-none opacity-0 scale-100"></div>
				</div>
			</div>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5 transition-opacity duration-700 ease-in-out pointer-events-none opacity-0"></div>
		</div>
	);
}
