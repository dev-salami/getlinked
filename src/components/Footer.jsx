import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import x from "../../public/assets/x.svg";
import ig from "../../public/assets/ig.svg";
import facebook from "../../public/assets/facebook.svg";
import linkedin from "../../public/assets/linkedin.svg";

function Footer() {
	return (
		<section className="bg-[#100B20] mt-40 lg:mt-0 xl:mt-40 ">
			<div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-around container    py-10 ">
				<div className="flex flex-col items-center md:items-start gap-8 md:w-2/5">
					<Link
						href="/"
						className="text-3xl font-bold">
						<span className="text-white">get</span>
						<span className="text-[#D434FE]">Linked</span>
					</Link>

					<p className="md:text-left text-center">
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</p>
					<div className="gap-6 flex justify-center mb-4">
						<p className="border-r-2 pr-6 border-[#D434FE]">Terms of Use</p>
						<p>Privacy Policy</p>
					</div>
				</div>
				<div className="md:w-1/4 flex justify-center flex-col items-center">
					<div className="flex flex-col items-center gap-4 text-sm">
						<p className="text-[#D434FE] font-semibold text-xl">Useful Links</p>
						<Link href="/#">Overview</Link>
						<Link href="/#timeline">Timeline</Link>
						<Link href="/#faq">FAQS</Link>
						<Link href="register">register</Link>
					</div>
					<div className="mt-6 flex flex-col items-center">
						<span className="text-[#D434FE] font-semibold mb-2">
							Follow Us on
						</span>

						<div className="flex gap-6 items-center ">
							<button>
								<Image
									className="h-6   w-fit"
									src={ig}
									alt="instagram-logo"></Image>
							</button>
							<button>
								<Image
									className="h-4   w-fit"
									src={x}
									alt="x-icon"></Image>
							</button>
							<button>
								<Image
									className="h-5   w-fit"
									src={facebook}
									alt="facebook-icon"></Image>
							</button>
							<button>
								<Image
									className="h-7   w-fit"
									src={linkedin}
									alt="linkedin-icon"></Image>
							</button>
						</div>
					</div>
				</div>
				<div className="md:w-1/4 flex flex-col items-center gap-3 mt-6 md:mt-0">
					<p className="text-[#D434FE] font-semibold  text-xl">Contact Us</p>
					<div className="flex gap-4">
						<HiLocationMarker size={30} />
						<p>
							27, Alara Street <br />
							Yaba 100012 <br />
							Lagos State
						</p>
					</div>
					<div className="flex gap-4">
						<BiPhoneCall size={30} />
						<p>Call Us : 07067981819</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
