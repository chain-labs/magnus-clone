const siteContent = {
	header: {
		logo: "/assets/logo.png",
		links: [
			{
				href: "#plans",
				label: "Plans",
			},
			{
				href: "# about",
				label: "About RA",
			},
			{
				href: "#faq",
				label: "FAQ",
			},
		],
	},
	subscriptions: {
		id: "plans",
		title: "Stock Recommendations To Elevate Your Portfolio",
		billingCycles: [
			{ key: "yearly", label: "Yearly" },
			{ key: "halfYearly", label: "Half-yearly" },
			{ key: "quarterly", label: "Quarterly" },
		],
		plans: [
			{
				key: "prime",
				name: "Prime",
				currency: "INR",
				currencySymbol: "₹",
				priceSuffix: "+ GST",
				prices: {
					yearly: 11999,
					halfYearly: 6999,
					quarterly: 3999,
				},
				features: [
					"Messages for when to buy",
					"Messages for when to sell",
					"Messages for partial profit booking",
					"Messages for full profit booking",
					"Research reports for all recommendations",
					"Regular updates on portfolio stocks",
					"Customer care support via email",
					"Quarterly live webinars to solve your queries",
				],
				cta: {
					label: "Invest Now",
					href: "#pricing",
				},
			},
		],
	},
	diyVideos: {
		title: "DIY Videos",
		description:
			"Explore our collection of expert videos designed to help you make informed investment decisions.",
		items: [
			{
				id: "r5VqQq5fESU",
				title: "💬 Common Questions",
				thumb: "https://img.youtube.com/vi/r5VqQq5fESU/hqdefault.jpg",
				duration: "3:45",
			},
			{
				id: "IMt8gETvUts",
				title: "🔄 Frequency Of Recommendations?",
				thumb: "https://img.youtube.com/vi/IMt8gETvUts/hqdefault.jpg",
				duration: "3:45",
			},
			{
				id: "P_AQuKuDXdk",
				title: "🎯📊 What's The Advised Range?",
				thumb: "https://img.youtube.com/vi/P_AQuKuDXdk/hqdefault.jpg",
				duration: "3:45",
			},
		],
	},
	ipo: {
		title: "Top Picks for IPO Success",
		billingTabs: ["Yearly"],
		cards: [
			{
				key: "ipo-edge",
				name: "IPO Edge",
				price: 9999,
				currencySymbol: "₹",
				priceSuffix: "+ GST",
				description: `For every IPO we track, we’ll tell you:

Avoid
Apply for Listing Gains
Apply and Hold for Long-Term

Our view based on fundamentals, valuation, sector outlook, and peer comparisons

Plan Type: Mainboard IPOs
Duration: Yearly
Price: ₹11,999 (including GST)

Description: Covers all major IPOs listed on the NSE/BSE mainboard with timely recommendations and guidance`,
				cta: {
					label: "Invest Now",
					href: "#pricing",
				},
			},
			{
				key: "ipo-edge-sme-mainboard",
				name: "IPO Edge - SME + Mainboard",
				price: 16950,
				currencySymbol: "₹",
				priceSuffix: "+ GST",
				description: `For every IPO we track, we’ll tell you:

Avoid
Apply for Listing Gains
Apply and Hold for Long-Term

Our view based on fundamentals, valuation, sector outlook, and peer comparisons

Plan Type: Mainboard + SME IPOs
Duration: Yearly
Price: ₹19,999/- (including GST)

Description: Includes everything in the Mainboard IPO plan, plus detailed coverage of high-potential SME IPOs across sectors `,
				cta: {
					label: "Invest Now",
					href: "#pricing",
				},
			},
		],
	},
	faq: {
		title: "Frequently Asked Questions",
		left: [
			{
				q: "What services will I receive?",
				a: "Our platform provides stock recommendations aimed at medium to long-term growth, typically held for 6 - 12 months. In addition, you'll receive high-conviction swing trading calls occasionally, with a shorter holding period of 7 - 30 days. This gives you a mix of stable growth and quick opportunities. You will also be informed about the correct time to sell your investments and book profits.",
			},
			{
				q: "Other than stock recommendations, is there anything else I will receive?",
				a: " Absolutely! In addition to stock recommendations, you’ll gain access to timely market updates, insights into trending sectors, and our in-house research reports. You’ll also be invited to exclusive webinars, where we explain the reasoning behind our stock picks, when to buy or sell, and highlight key sectors to watch. These resources will give you a deeper understanding of market trends and help you make more informed investment decisions.",
			},
			{
				q: "How will I receive the information?",
				a: "All information will be delivered directly to your phone via WhatsApp messages under our branding. Stock recommendations will come in a standardized format, allowing you to easily approve the transaction. You’ll be automatically redirected to your brokerage app (e.g., Zerodha, Angel One) to place the trade seamlessly. Additionally, you’ll receive regular updates, sector insights, and educational content through the same WhatsApp chat, ensuring everything is conveniently in one place.",
			},
			{
				q: "How can I contact the Research Analyst if I face any issues?",
				a: "Once you have purchased a plan, please log in to the investor portal. On the bottom-right side, you will find a chat icon. You can leave your contact information, and our customer care team will get back to you within 24-48 hours to resolve the issue.",
			},
			{
				q: "How are the stock weightages determined?",
				a: "Weightages are carefully allocated to ensure diversification, stability, and growth potential. Adjustments may be made periodically to reflect our latest views on individual stocks and their role in the overall portfolio",
			},
		],
		right: [
			{
				q: "How much capital is required to begin?",
				a: " You can start with as little as ₹50,000, and gradually increase your investment over time. However, we recommend starting with ₹2,00,000 or more to effectively build a diversified portfolio of high-quality stocks through our recommendations.",
			},
			{
				q: "What is your investment philosophy?",
				a: " Our investment philosophy is centered around identifying high-quality, high-growth stocks with strong sectoral tailwinds, and recommending them at the most opportune time, giving you the advantage of early entry. We focus on fundamentally sound companies, potential turnarounds, and special situations that have the potential to deliver significant returns. Our approach is designed to provide you with the best possible chance to grow your wealth while minimizing risks, through well-researched and timely stock picks.",
			},
			{
				q: "How will I know when to renew my plan?",
				a: "You will receive an email notification before your plan expires so that you can renew. You can also opt for auto renewal if you take a recurring subscription payment.",
			},
			{
				q: "Would I lose my current plan if I upgrade to a longer term plan?",
				a: "No worries! Purchase the longer term plan now, and your remaining subscription time will be added at the end, so you don’t waste a single rupee.",
			},
			{
				q: "Will I get support if I have questions?",
				a: "If you have any technical queries with regards to broker connection or other technical issues, reach out to our technical team at magnushathawayinvestments@gmail.com – they will schedule a discussion with you. ",
			},
		],
	},
	team: {
		title: "Meet the RA and Team",
		members: [
			{
				name: "Alireza Azar",
				image: "/assets/team/alireza.png",
				instagram:
					"https://www.instagram.com/mr.talkstock?igsh=MWhnOHRmYXEybnBucQ==",
				bio: `Alireza Azar is a seasoned finance professional and the face behind Mr. TalkStock, a platform dedicated to empowering investors through knowledge and strategy
With over 12 years of experience in the Indian stock market, he combines deep market insights with practical investment strategies. His expertise and focus lies in helping retail investors achieve financial success
An experienced Chartered Accountant and a SEBI Registered Research Analyst, Ali’s investment philosophy focuses on identifying high-quality, high-growth stocks with a medium to long-term perspective
His diverse career path includes roles as a financial news anchor, accounts professor, and now, a full-time content creator, where he continues to simplify complex financial concepts for thousands of followers.`,
				years: 12,
				sebi: "INH000016588",
			},
			{
				name: "Rahul Pandey",
				image: "/assets/team/rahul.png",
				twitter:
					"https://x.com/Stock_Precision?t=J7vM7vANFFfrlEVfCNq8Zg&s=09",
				bio: `Rahul is an accomplished capital markets professional with over a decade of experience, specializing in portfolio investing, options writing, and quantitative and fundamental analysis. An NSE Certified Analyst and former Wilhelmsen professional, Rahul leverages his expertise to decode market trends and investment strategies,
 earning the trust of over 1,85,000+ followers across social media. Rahul’s unique blend of analytical skills and practical knowledge makes him a go-to authority in the finance community.`,
				years: 10,
			},
		],
	},
	footer: {
		brand: "Magnus Hathaway",
		logo: "/assets/logo.png",
		nav: [
			{ label: "Disclaimer", href: "#" },
			{ label: "T&C Magnus Hathaway", href: "#" },
			{ label: "Privacy Policy", href: "#" },
			{ label: "Contact Us", href: "#" },
			{ label: "Investor Charter", href: "#" },
			{ label: "Disclosures", href: "#" },
			{ label: "Grievance Redressal", href: "#" },
		],
		raInfo: {
			name: "Alireza Azar",
			sebiRegNo: "INH000016588",
			address:
				"904, A Wing, Salarpuria Silverwoods, Varthur Road, CV Raman Nagar, Nagavara Palya, Bengaluru 560093",
		},
		disclaimers: [
			"Investments in securities market are subject to market risks. Read all the security related documents carefully before investing.",
			"Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
		],
		copyright: "Copyright © 2024 All rights reserved",
		credit: {
			by: "AlphaQuark",
			label: "Made with ❤️ by AlphaQuark",
		},
	},
};

export default siteContent;
