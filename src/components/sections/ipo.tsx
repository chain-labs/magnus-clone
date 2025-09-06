"use client";

import siteContent from "@/content/site";
import { PrimeOnboardingModal } from "../prime";
import { useState } from "react";

export default function IPO() {
	const ipo = siteContent.ipo;
	const [dialogOpen, setDialogOpen] = useState(false);
	return (
		<section
			className="pt-12 pb-32 bg-gradient-to-b from-blue-50 to-white"
			id="ipoSection"
		>
			<h1
				className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 sm:mb-10"
				style={{
					fontSize: "36px",
					fontWeight: "bold",
					textAlign: "center",
					marginTop: "2rem",
					paddingLeft: "1rem",
					paddingRight: "1rem",
					lineHeight: 1.2,
				}}
			>
				{ipo.title}
			</h1>

			<div className="px-4 sm:px-0 mb-8 mt-5">
				<div className="relative overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
					<div className="flex items-center justify-start sm:justify-center border-b border-gray-200 w-max sm:w-auto mx-auto">
						{ipo.billingTabs.map((t) => (
							<button
								key={t}
								className="whitespace-nowrap py-2 px-3 sm:px-4 text-sm sm:text-lg font-semibold border-b-2 transition-colors text-blue-700 border-blue-700"
							>
								{t}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-20 pt-10 md:pt-14 lg:pt-14">
				<div className="flex flex-wrap justify-center gap-6">
					{ipo.cards.map((card) => (
						<div
							key={card.key}
							className="relative w-full sm:w-[350px] max-w-full font-poppins rounded-xl bg-white border-[1px] border-blue-200 shadow-[0px_4px_12px_0px_rgba(59,130,246,0.1)] py-4 cursor-pointer overflow-hidden flex flex-col"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-40" />
							<div className="flex items-start pl-7 pt-2 pb-7 md:items-center relative z-10">
								<div className="overflow-hidden rounded-lg w-full">
									<h2
										className="font-poppins text-[22px] font-bold leading-[35px] text-left text-[#333333] truncate"
										title={card.name}
									>
										{card.name}
									</h2>
									<div className="flex items-baseline">
										<h2 className="text-3xl font-bold text-black">
											{card.currencySymbol}
											{card.price}
											<span className="text-gray-600 text-sm">
												{" "}
												{card.priceSuffix}
											</span>
										</h2>
									</div>
								</div>
							</div>
							<div className="flex justify-start items-start pl-7 relative z-10">
								<div className="w-[80%] border-t-[1px] border-b-[1px] border-blue-100" />
							</div>
							<div className="flex flex-col items-start pt-7 p-4 pb-16 space-y-2 w-full relative z-10 flex-grow">
								<div className="flex w-full mb-2">
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
										className="lucide lucide-circle-check text-blue-600 mr-2 flex-shrink-0"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<path d="m9 12 2 2 4-4"></path>
									</svg>
									<div className="flex flex-col w-full">
										<h4 className="text-md font-bold font-poppins text-gray-900 pb-2 whitespace-nowrap overflow-hidden text-ellipsis">
											Offerings
										</h4>
									</div>
								</div>
								<div className="flex flex-col items-start px-7 w-full">
									<div className="font-poppins text-[12.5px] flex flex-col items-start space-y-2 text-[#666666] description-container w-full whitespace-pre-line overflow-y-auto h-64 sm:h-72 md:h-[356px]">
										{card.description}
									</div>
								</div>
							</div>
							<div className="w-full bottom-0 p-4 flex justify-center align relative z-10">
								<button className="group w-full py-2.5 px-4 flex items-center justify-center rounded-lg font-medium text-sm text-white relative overflow-hidden transition-all duration-300 shadow-md bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 hover:-translate-y-0.5 hover:shadow-blue-300/30 bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%]">
									<span className="relative z-10 flex items-center justify-center">
										Invest Now
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
											className="lucide lucide-arrow-right w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
										>
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</span>
								</button>
							</div>
							<div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-12 -mt-12 opacity-50" />
						</div>
					))}
				</div>
			</div>
			<PrimeOnboardingModal
				open={dialogOpen}
				onOpenChange={setDialogOpen}
			/>
		</section>
	);
}
