"use client";
import { useEffect, useMemo, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import siteContent from "@/content/site";
import { CreditCard, Mail, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSubscription } from "@/state/subscription-context";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type SubscriptionDialogProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	planKey?: string;
	cycleKey?: string; // e.g. 'yearly' | 'halfYearly' | 'quarterly'
};

export default function SubscriptionDialog({
	open,
	onOpenChange,
	planKey,
	cycleKey,
}: SubscriptionDialogProps) {
	const subs = siteContent.subscriptions;
	const plan = useMemo(() => {
		if (!subs?.plans?.length) return undefined;
		return subs.plans.find((p: any) => p.key === planKey) ?? subs.plans[0];
	}, [subs, planKey]);
	const {
		state,
		updateField,
		setStep,
		validateStep,
		goNextFrom,
		submit,
		init,
	} = useSubscription();

	// initialize store with incoming plan/cycle when opened
	useEffect(() => {
		if (!open) return;
		init({
			planKey: planKey ?? plan?.key,
			cycleKey:
				cycleKey ??
				state.fields.cycleKey ??
				subs?.billingCycles?.[0]?.key ??
				"yearly",
		});
	}, [open, planKey, cycleKey, plan, state.fields.cycleKey, subs, init]);

	const activeCycle =
		state.fields.cycleKey ?? subs?.billingCycles?.[0]?.key ?? "yearly";

	const price = useMemo(() => {
		if (!plan) return undefined;
		const key = activeCycle as keyof typeof plan.prices;
		const val = plan.prices?.[key];
		return typeof val === "number" ? val : undefined;
	}, [plan, activeCycle]);

	// Derived/controlled values from global store
	const {
		fullName,
		email,
		dob,
		phone,
		address,
		city,
		pincode,
		pan,
		consent,
		countryCode,
	} = state.fields;

	const steps = [
		{
			key: "personal",
			title: "Personal Info",
			subtitle: "Name, email & date of birth",
			complete:
				fullName.trim() !== "" &&
				email.trim() !== "" &&
				dob.trim() !== "",
		},
		{
			key: "contact",
			title: "Contact Details",
			subtitle: "Phone & address",
			complete:
				phone.trim() !== "" &&
				address.trim() !== "" &&
				city.trim() !== "" &&
				pincode.trim() !== "",
		},
		{
			key: "kyc",
			title: "KYC Verification",
			subtitle: "PAN details",
			complete: pan.trim().length >= 10,
		},
		{
			key: "plan",
			title: "Plan & Billing",
			subtitle: "Choose subscription",
			complete: Boolean(activeCycle) && consent,
		},
	] as const;

	const completed = steps.filter((s) => s.complete).length;
	const total = steps.length;
	const openItem = state.step;

	const personalComplete = steps.find((s) => s.key === "personal")?.complete;
	const contactComplete = steps.find((s) => s.key === "contact")?.complete;
	const contactOngoing = openItem === "contact" && !Boolean(contactComplete);
	const planComplete = steps.find((s) => s.key === "plan")?.complete;
	const planOngoing = openItem === "plan" && !Boolean(planComplete);

	// Country code support for Contact step (lightweight)
	const COUNTRY_CODES = useMemo(
		() => [
			{ code: "+91", label: "India" },
			{ code: "+1", label: "United States" },
			{ code: "+358", label: "Finland" },
			{ code: "+44", label: "United Kingdom" },
			{ code: "+61", label: "Australia" },
			{ code: "+49", label: "Germany" },
			{ code: "+81", label: "Japan" },
		],
		[]
	);
	const [countryOpen, setCountryOpen] = useState(false);
	const [countrySearch, setCountrySearch] = useState("");
	const filteredCountries = useMemo(() => {
		const q = countrySearch.toLowerCase();
		return COUNTRY_CODES.filter(
			(c) => c.code.includes(q) || c.label.toLowerCase().includes(q)
		);
	}, [COUNTRY_CODES, countrySearch]);

	const goNext = () => {
		// validate current step with stricter rules before moving forward
		goNextFrom(openItem as any);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md p-0 overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border-0 shadow-2xl">
				{/* Top banner with gradient */}
				<div className="relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
					<div className="relative flex items-center justify-between px-6 text-white min-h-[120px]">
						<div>
							<DialogTitle className="text-xl font-bold text-white">
								{plan?.name?.toLowerCase?.() ?? "prime"}
							</DialogTitle>
							<DialogDescription className="text-white/80">
								{price !== undefined ? (
									<span>
										{plan?.currencySymbol}
										{price} {plan?.priceSuffix}
									</span>
								) : (
									<span>Complete your subscription</span>
								)}
							</DialogDescription>
						</div>
					</div>
				</div>

				{/* Progress */}
				<div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-blue-50">
					<div className="flex items-center justify-between mb-3">
						<span className="text-sm font-semibold text-gray-700 flex items-center">
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
								className="lucide lucide-shield h-4 w-4 mr-2 text-blue-600"
							>
								<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
							</svg>
							Progress
						</span>
						<span className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm">
							{completed}/{total} Complete
						</span>
					</div>
					<div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
						<div
							className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full transition-all duration-700 ease-out shadow-lg"
							style={{ width: `${(completed / total) * 100}%` }}
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
					</div>
				</div>

				{/* Sections */}
				<div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50/50 to-white">
					<div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-100/50 ">
						<Accordion
							type="single"
							collapsible
							value={openItem}
							onValueChange={(v) =>
								setStep(((v as string) || openItem) as any)
							}
							className="gap-2"
						>
							{/* Personal Info */}
							<AccordionItem
								value="personal"
								className={cn(
									"border-none rounded-xl transition-all duration-700 ease-in-out transform hover:scale-[1.02] overflow-hidden",
									personalComplete
										? "ring-2 ring-green-400 bg-gradient-to-br from-green-50 via-white to-emerald-50 shadow-lg shadow-green-100/50"
										: "ring-2 ring-blue-400 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-lg shadow-blue-100/50"
								)}
							>
								<AccordionTrigger className="px-4 group">
									<div className="flex items-center justify-between w-full">
										<div className="flex items-center space-x-4">
											<div
												className={cn(
													"w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg",
													personalComplete
														? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-200 group-hover:scale-110"
														: "bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-200 group-hover:scale-110"
												)}
											>
												<User className="text-white h-4 w-4" />
											</div>
											<div>
												<h3
													className={cn(
														"text-sm font-bold transition-colors duration-200",
														personalComplete
															? "text-gray-900 group-hover:text-blue-700"
															: "text-gray-900"
													)}
												>
													Personal Info
												</h3>
												<p className="text-xs text-gray-600">
													Name, email & date of birth
												</p>
											</div>
										</div>
										{personalComplete ? (
											<span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-0.5 rounded-full font-normal shadow-lg leading-none flex items-center">
												Done
											</span>
										) : null}
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<div className="px-4 pb-4 pt-0 bg-white/50 backdrop-blur-sm space-y-4">
										<div>
											<label className="block text-xs font-semibold text-gray-700 mb-2">
												Full Name{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<Input
												placeholder="Enter your full name"
												className="w-full h-10 text-sm border-2 border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-gray-300"
												value={fullName}
												onChange={(e) =>
													updateField(
														"fullName",
														e.target.value
													)
												}
												className={cn(
													"w-full h-10 text-sm border-2 border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-gray-300",
													state.errors.fullName &&
														"border-red-300 focus:ring-red-500"
												)}
											/>
											{state.errors.fullName ? (
												<p className="text-xs text-red-600 mt-1">
													{state.errors.fullName}
												</p>
											) : null}
										</div>
										<div>
											<label className="block text-xs font-semibold text-gray-700 mb-2">
												Email{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<Input
												type="email"
												placeholder="Enter your email address"
												className="w-full h-10 text-sm border-2 border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-gray-300"
												value={email}
												onChange={(e) =>
													updateField(
														"email",
														e.target.value
													)
												}
												className={cn(
													"w-full h-10 text-sm border-2 border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-gray-300",
													state.errors.email &&
														"border-red-300 focus:ring-red-500"
												)}
											/>
											{state.errors.email ? (
												<p className="text-xs text-red-600 mt-1">
													{state.errors.email}
												</p>
											) : null}
										</div>
										<div>
											<label className="block text-xs font-semibold text-gray-700 mb-2">
												Date of Birth{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<Input
												type="date"
												value={dob}
												onChange={(e) =>
													updateField(
														"dob",
														e.target.value
													)
												}
												className={cn(
													"w-full h-10 text-sm border-2 border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-gray-300",
													state.errors.dob &&
														"border-red-300 focus:ring-red-500"
												)}
											/>
											{state.errors.dob ? (
												<p className="text-xs text-red-600 mt-1">
													{state.errors.dob}
												</p>
											) : null}
										</div>
										<div>
											<Tooltip>
												<TooltipTrigger asChild>
													<span className="block w-full">
														<button
															disabled={
																!personalComplete
															}
															onClick={() => {
																if (
																	!validateStep(
																		"personal" as any
																	)
																)
																	return;
																setStep(
																	"contact" as any
																);
															}}
															className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
														>
															Continue to Contact
															<svg
																className="lucide lucide-chevron-right ml-2 h-4 w-4"
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path d="m9 18 6-6-6-6"></path>
															</svg>
														</button>
													</span>
												</TooltipTrigger>
												{!personalComplete ? (
													<TooltipContent
														sideOffset={6}
													>
														Fill all required fields
													</TooltipContent>
												) : null}
											</Tooltip>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Contact */}
							<AccordionItem
								value="contact"
								className={cn(
									"border-none rounded-xl transition-all duration-700 ease-in-out transform hover:scale-[1.02] overflow-hidden",
									"ring-2 ring-blue-400",
									contactOngoing
										? "bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-100/50 scale-[1.02] translate-y-0"
										: "bg-white"
								)}
							>
								<AccordionTrigger className="px-4 group">
									<div className="flex items-center justify-between w-full">
										<div className="flex items-center space-x-4">
											<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-200 group-hover:scale-110">
												<Mail className="text-white h-4 w-4" />
											</div>
											<div>
												<h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
													Contact
												</h3>
												<p className="text-xs text-gray-600">
													Phone & communication
												</p>
											</div>
										</div>
										{!contactComplete &&
										openItem === "contact" ? (
											<span className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-0.5 rounded-full font-normal animate-pulse shadow-lg leading-none flex items-center">
												In Progress
											</span>
										) : null}
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<div className="px-4 pb-4 pt-0 bg-white/50 backdrop-blur-sm space-y-4">
										<div>
											<label className="block text-xs font-semibold text-gray-700 mb-2">
												Phone Number{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<div className="flex space-x-2">
												<div className="relative">
													<button
														type="button"
														className="h-10 px-3 border-2 border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm text-sm flex items-center space-x-2 hover:border-gray-300 transition-all duration-200 font-medium"
														onClick={() =>
															setCountryOpen(
																(v) => !v
															)
														}
													>
														<span>
															{countryCode}
														</span>
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
															className="lucide lucide-chevron-down h-3 w-3"
														>
															<path d="m6 9 6 6 6-6"></path>
														</svg>
													</button>
													{countryOpen ? (
														<div className="absolute top-12 left-0 w-72 bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-20 max-h-48 overflow-y-auto backdrop-blur-lg">
															<div className="p-3 border-b border-gray-100">
																<input
																	type="text"
																	placeholder="Search countries..."
																	className="w-full h-9 text-sm border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
																	value={
																		countrySearch
																	}
																	onChange={(
																		e
																	) =>
																		setCountrySearch(
																			e
																				.target
																				.value
																		)
																	}
																/>
															</div>
															{filteredCountries.map(
																(c) => (
																	<div
																		key={
																			c.code
																		}
																		className="flex items-center px-3 py-2.5 rounded-lg mx-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 cursor-pointer text-sm font-medium"
																		onClick={() => {
																			updateField(
																				"countryCode",
																				c.code
																			);
																			setCountryOpen(
																				false
																			);
																		}}
																	>
																		{c.code}{" "}
																		{
																			c.label
																		}
																	</div>
																)
															)}
														</div>
													) : null}
												</div>
												<Input
													type="tel"
													placeholder="Enter mobile number"
													className={cn(
														"flex-1 h-10 text-sm border-2 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm border-gray-200 hover:border-gray-300",
														state.errors.phone &&
															"border-red-300 focus:ring-red-500"
													)}
													value={phone}
													onChange={(e) =>
														updateField(
															"phone",
															e.target.value
														)
													}
												/>
												{state.errors.phone ? (
													<p className="text-xs text-red-600 mt-1">
														{state.errors.phone}
													</p>
												) : null}
											</div>
										</div>
										<Tooltip>
											<TooltipTrigger asChild>
												<span className="block w-full">
													<button
														disabled={
															!contactComplete
														}
														onClick={() =>
															goNextFrom(
																"contact" as any
															)
														}
														className="w-full h-11 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-300 disabled:to-gray-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
													>
														Continue to Investment
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
															className="lucide lucide-chevron-right ml-2 h-4 w-4"
														>
															<path d="m9 18 6-6-6-6"></path>
														</svg>
													</button>
												</span>
											</TooltipTrigger>
											{!contactComplete ? (
												<TooltipContent sideOffset={6}>
													Complete phone and address
													details
												</TooltipContent>
											) : null}
										</Tooltip>
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* KYC */}
							<AccordionItem
								value="kyc"
								className={cn(
									"border-none rounded-xl transition-all duration-700 ease-in-out transform hover:scale-[1.02] overflow-hidden",
									"ring-2 ring-blue-400",
									openItem === "kyc" &&
										!steps.find((s) => s.key === "kyc")
											?.complete
										? "bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-100/50 scale-[1.02] translate-y-0"
										: "bg-white"
								)}
							>
								<AccordionTrigger className="px-4 group">
									<div className="flex items-center justify-between w-full">
										<div className="flex items-center space-x-4">
											<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-blue-200 group-hover:scale-110">
												<Settings className="text-white h-4 w-4" />
											</div>
											<div>
												<h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
													Kyc
												</h3>
												<p className="text-xs text-gray-600">
													PAN & Investment details
												</p>
											</div>
										</div>
										{openItem === "kyc" &&
										!steps.find((s) => s.key === "kyc")
											?.complete ? (
											<span className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-0.5 rounded-full font-normal animate-pulse shadow-lg leading-none flex items-center">
												In Progress
											</span>
										) : null}
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<div className="px-4 pb-4 pt-0 bg-white/50 backdrop-blur-sm space-y-4">
										<div>
											<label className="block text-xs font-semibold text-gray-700 mb-2">
												PAN Number{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<input
												type="text"
												placeholder="Enter PAN (e.g., ABCDE1234F)"
												maxLength={10}
												className={cn(
													"w-full h-10 text-sm border-2 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm uppercase border-gray-200 hover:border-gray-300",
													state.errors.pan &&
														"border-red-300 focus:ring-red-500"
												)}
												value={pan}
												onChange={(e) =>
													updateField(
														"pan",
														e.target.value.toUpperCase()
													)
												}
											/>
											{state.errors.pan ? (
												<p className="text-xs text-red-600 mt-1">
													{state.errors.pan}
												</p>
											) : null}
										</div>
										<Tooltip>
											<TooltipTrigger asChild>
												<span className="block w-full">
													<button
														disabled={
															!steps.find(
																(s) =>
																	s.key ===
																	"kyc"
															)?.complete
														}
														onClick={() => {
															if (
																!validateStep(
																	"kyc" as any
																)
															)
																return;
															setStep(
																"plan" as any
															);
														}}
														className="w-full h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
													>
														Continue to Plan
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
															className="lucide lucide-chevron-right ml-2 h-4 w-4"
														>
															<path d="m9 18 6-6-6-6"></path>
														</svg>
													</button>
												</span>
											</TooltipTrigger>
											{!steps.find((s) => s.key === "kyc")
												?.complete ? (
												<TooltipContent sideOffset={6}>
													Enter a valid PAN
												</TooltipContent>
											) : null}
										</Tooltip>
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Plan */}
							<AccordionItem
								value="plan"
								className={cn(
									"border-none rounded-xl transition-all duration-700 ease-in-out transform hover:scale-[1.02] overflow-hidden",
									"ring-2 ring-blue-400",
									planOngoing
										? "bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-blue-100/50 scale-[1.02] translate-y-0"
										: "bg-white"
								)}
							>
								<AccordionTrigger className="px-4 group">
									<div className="flex items-center justify-between w-full">
										<div className="flex items-center space-x-4">
											<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-indigo-500 to-blue-600 shadow-lg shadow-blue-200 group-hover:scale-110">
												<CreditCard className="text-white h-4 w-4" />
											</div>
											<div>
												<h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
													Plan
												</h3>
												<p className="text-xs text-gray-600">
													Choose subscription
												</p>
											</div>
										</div>
										{planOngoing ? (
											<span className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-0.5 rounded-full font-normal animate-pulse shadow-lg leading-none flex items-center">
												In Progress
											</span>
										) : null}
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<div className="px-4 pb-4 pt-0 bg-white/50 backdrop-blur-sm space-y-4">
										<div className="flex flex-col gap-2">
											<div className="text-sm font-semibold text-gray-700">
												One-Time Options
											</div>
											<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
												{subs?.billingCycles?.map(
													(c) => {
														const cardSelected =
															activeCycle ===
															c.key;
														const raw =
															plan?.prices?.[
																c.key as keyof typeof plan.prices
															];
														const priceFor =
															typeof raw ===
															"number"
																? raw
																: undefined;
														return (
															<button
																key={c.key}
																type="button"
																onClick={() =>
																	updateField(
																		"cycleKey",
																		c.key
																	)
																}
																className={cn(
																	"p-2 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm hover:shadow-sm text-left",
																	cardSelected
																		? "border-blue-500"
																		: "border-gray-200 hover:border-gray-300"
																)}
															>
																<div className="text-center">
																	<div className="mb-1.5">
																		<span className="text-xs font-semibold text-gray-900 block">
																			{
																				c.label
																			}
																		</span>
																		<div className="text-[11px] text-gray-600 mb-1">
																			&nbsp;
																		</div>
																		<div className="flex flex-col items-center justify-center">
																			<span className="text-sm font-bold text-blue-600">
																				{
																					plan?.currencySymbol
																				}
																				{
																					priceFor
																				}{" "}
																				{
																					plan?.priceSuffix
																				}
																			</span>
																		</div>
																	</div>
																	<div
																		className={cn(
																			"w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 mx-auto",
																			cardSelected
																				? "border-blue-600 bg-blue-600"
																				: "border-gray-300"
																		)}
																	></div>
																</div>
															</button>
														);
													}
												)}
											</div>
										</div>

										{state.errors.cycleKey ? (
											<p className="text-xs text-red-600 mt-1">
												{state.errors.cycleKey}
											</p>
										) : null}

										<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
											<label className="flex items-start space-x-3">
												<input
													type="checkbox"
													className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-all duration-200"
													checked={consent}
													onChange={(e) =>
														updateField(
															"consent",
															e.target.checked
														)
													}
												/>
												<span className="text-sm text-gray-700 leading-relaxed">
													I have gone through the
													Disclaimers mentioned in the
													website. I'm purchasing this
													plan with understanding of
													<button
														type="button"
														className="text-blue-600 underline hover:text-blue-700 font-semibold transition-colors duration-200 ml-1"
													>
														disclaimers
													</button>
												</span>
											</label>
											{state.errors.consent ? (
												<p className="text-xs text-red-600 mt-1">
													{state.errors.consent}
												</p>
											) : null}
										</div>

										<button
											disabled={!planComplete}
											onClick={() => {
												if (submit())
													onOpenChange(false);
											}}
											className="w-full h-12 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 text-white text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-[1.02] disabled:transform-none"
										>
											🚀 Complete Investment
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
												className="lucide lucide-chevron-right ml-2 h-4 w-4"
											>
												<path d="m9 18 6-6-6-6"></path>
											</svg>
										</button>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
