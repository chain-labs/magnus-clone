import siteContent from "@/content/site";
import { Instagram, Twitter } from "lucide-react";

export default function Team() {
	const team = siteContent.team;
	return (
		<section
			className="pb-24 pt-14 bg-gradient-to-b from-gray-50 to-white"
			id={team.id}
		>
			<div className="container mx-auto px-4">
				<h2 className="text-5xl font-extrabold text-center mb-20 text-gray-800">
					{team.title.split("RA and Team")[0]}
					<span className="text-[#1a378d] relative">
						<br className="md:hidden" /> RA
						<span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-200 -z-10 transform -skew-x-12" />
					</span>
				</h2>

				<div className="max-w-[900px] px-0 md:px-36 lg:px-36 mx-auto">
					{team.members.map((m) => (
						<div key={m.name}>
							<div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col group h-full">
								<div className="relative h-64 md:h-96">
									<img
										src={m.image}
										alt={m.name}
										className="w-full h-full object-cover object-top"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-25" />
									<div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
										<h3 className="text-2xl md:text-3xl font-bold mb-2">
											{m.name}
										</h3>
									</div>
								</div>

								<div className="p-4 md:p-6 flex flex-col flex-grow bg-white z-10">
									<div className="h-48 md:h-[25.5rem] lg:h-[20rem] overflow-auto no-scrollbar relative">
										<p className="text-black font-poppins text-sm md:text-base leading-relaxed flex-grow pb-8 whitespace-pre-line">
											{m.bio}
										</p>
									</div>

									<div className="flex flex-col gap-4 mt-3">
										{m.instagram && (
											<div className="flex items-center gap-4">
												<a
													href={m.instagram}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 text-[#1a378d] hover:text-[#0f2259] transition-colors font-medium text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full"
												>
													<Instagram />
													<span>Visit Instagram</span>
												</a>
											</div>
										)}
										{/* {m.twitter && (
											<div className="flex items-center gap-4">
												<a
													href={m.twitter}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 text-[#1a378d] hover:text-[#0f2259] transition-colors font-medium text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full"
												>
													<Twitter />
													<span>Visit Twitter</span>
												</a>
											</div>
										)} */}

										<div className="flex flex-row items-start md:items-center gap-2 md:gap-10 mt-2">
											<div className="flex items-center gap-2">
												<img src="/assets/icons/guard-tick.png" />
												<div className="flex flex-col">
													<div className="text-gray-700 font-bold text-sm md:text-base">
														{m.years}+ years
													</div>
													<div className="text-xs md:text-sm leading-snug md:leading-6 text-gray-500 font-semibold">
														Years of Experience
													</div>
												</div>
											</div>
											{m.sebi && <div className="flex items-center gap-2">
												<img src="/assets/icons/sebi.png" />
												<div className="flex flex-col">
													<div className="text-gray-700 font-bold text-sm md:text-base">
														{m.sebi}
													</div>
													<div className="text-xs md:text-sm leading-snug md:leading-6 text-gray-500 font-semibold">
														SEBI Registered
													</div>
												</div>
											</div>}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
