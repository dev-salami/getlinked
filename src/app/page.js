import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Privacy from "@/components/Privacy";
import Prizes from "@/components/Prizes";
import Successmodal from "@/components/Successmodal";
import Timeline from "@/components/Timeline";

import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Faq />
			<Timeline />
			<Prizes />
			<Partners />
			<Privacy />
		</>
	);
}
