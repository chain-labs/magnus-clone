import { any } from "zod";

const siteContent = {
	header: {
		logo: "/assets/logo.png",
		links: [
			{
				href: "#plans",
				label: "Plans",
			},
			{
				href: "#about",
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
			{ key: "quarterly", label: "Quarterly" },
		],
		plans: [
			{
				key: "prime",
				name: "Bespoke Investing",
				currency: "INR",
				currencySymbol: "₹",
				priceSuffix: "(GST Incl)",
				prices: {
					yearly: 17699,
					quarterly: 6999,
				},
				features: {
					yearly: [
						"Messages for when to buy, and when to sell",
						"Messages for when to book out partial gains, or full profits",
						"Research report for all investing recommendations",
						"Occasional swing trades depending on market conditions",
						"Regular update on portfolio stocks",
						"Customer care support via email",
					],
					quarterly: [
						"Messages for when to buy, and when to sell",
						"Messages for when to book out partial gains, or full profits",
						"Research report for all investing recommendations",
						"Occasional swing trades depending on market conditions",
						"Regular update on portfolio stocks",
						"Customer care support via email",
					],
				},
				cta: {
					yearly: {
						label: "Invest Now",
						href: "https://magnushathaway.exlyapp.com/checkout/6f71cbff-4b3b-4505-b9da-36bcfcaa9e5b",
					},
					quarterly: {
						label: "Invest Now",
						href: "https://magnushathaway.exlyapp.com/checkout/e6b1b9ca-da1a-4ac1-88ce-4e24105e6a0c",
					},
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
				priceSuffix: "(GST Incl)",
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
				priceSuffix: "(GST Incl)",
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
		id:"faq",
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
		id:"about",
		title: "Meet the",
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
		],
	},
	footer: {
		brand: "Magnus Hathaway",
		logo: "/assets/logo.png",
		nav: [
			{
				label: "Investor Charter (Annexure A)",
				href: "https://magnushathaway.b-cdn.net/1.%20Annexure%20A-%20Investor%20Charter.docx.pdf",
			},
			{
				label: "Investor Complaints (Annexure B)",
				href: "https://magnushathaway.b-cdn.net/2.%20Annexure%20B%20-%20Complaint%20Data.xlsx%20-%20Annexure-%20B.pdf",
			},
			{
				label: "Grievance Redressal Process",
				href: "https://magnushathaway.b-cdn.net/3.%20Redressal%20Grievance.docx.pdf",
			},
			{
				label: "Disclaimers",
				href: "https://magnushathaway.b-cdn.net/4.%20Disclaimer.docx.pdf",
			},
			{
				label: "Disclosures",
				href: "https://magnushathaway.b-cdn.net/5.%20Disclosures.docx.pdf",
			},
			{
				label: "Escalation Matrix",
				href: "https://magnushathaway.b-cdn.net/6.%20Escalation%20Matrix.docx.pdf",
			},
			{
				label: "Audit Report",
				href: "https://magnushathaway.b-cdn.net/8.%20Audit%20Status.docx.pdf",
			},
			{
				label: "Code of Conduct",
				href: "https://magnushathaway.b-cdn.net/10.%20Code%20of%20Conduct.docx.pdf",
			},
			{
				label: "PMLA Policy",
				href: "https://magnushathaway.b-cdn.net/11.%20PMLA%20Policy.docx.pdf",
			},
		],
		raInfo: {
			name: "Alireza Azar",
			sebiRegNo: "INH000016588",
			address:
				"No. 15/A904, Varthur Road, C V Raman Nagar, Nagavara Palya, Bangalore, Karnataka - 560093",
		},
		grievance: {
			name: "Abdul Ahad Khan",
			tel: "+91 9636336788",
			email: "ahad@magnushathaway.com",
		},
		contact: {
			name: "Alireza Azar",
			tel: "+91 99834 51155",
			email: "ali_azar@live.com",
		},
		sebiOffice: {
			address: "Head Office Address: Plot No. C4-A, ‘G’ Block Bandra-Kurla Complex, Bandra (East), Mumbai, Maharashtra - 400051",
			localAddress: "7th Floor, 756-L, Anna Salai, Chennai - 600002, Tamil Nadu"
		},
		disclaimers: [
			"Investment in securities market are subject to market risks. Read all the related documents carefully before investing.",
			"Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
		],
		copyright: "Copyright © 2025 All rights reserved",
		credit: {
			by: "Chainlabs",
			label: "Made with ❤️ by Chainlabs",
		},
	},
};

export default siteContent;
