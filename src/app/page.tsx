import DIYVideos from "@/components/sections/diy-videos";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import IPO from "@/components/sections/ipo";
import Subscription from "@/components/sections/subscription";
import Team from "@/components/sections/team";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Subscription />
      <IPO />
      <DIYVideos />
      <Team />
      <FAQ />
      <Footer />
		</>
	);
}
