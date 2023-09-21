import React from "react";
import faq from "../../public/assets/faq.png";
import Image from "next/image";

function Faq() {
	return (
		<section
			id="faq"
			className="container mx-auto p-8 mb-8 flex flex-col items-center md:flex-row gap-6">
			<div className="md:w-1/2">
				<p className="text-2xl font-bold mb-4 text-center sm:text-left">
					<span>Frequently Ask</span> <br />
					<span className="text-[#D434FE]"> Question </span>
				</p>
				<p>
					We got answers to the questions that you might want to ask about
					getlinked Hackathon 1.0
				</p>
				<div className="flex flex-col gap-3 mt-6 text-sm">
					<p className="flex justify-between gap-6 ">
						<span>
							Can I work on a project I started before the hackathon ?
						</span>
						<button className="text-[#D434FE] text-xl font-bold">+</button>
					</p>
					<hr className="border-t border-[#D434FE]/80 " />
					<p className="flex justify-between gap-6 ">
						<span>What happens if I need help during the hackathon ?</span>
						<button className="text-[#D434FE] text-xl font-bold">+</button>
					</p>
					<hr className="border-t border-[#D434FE]/80 " />
					<p className="flex justify-between gap-6 ">
						<span>{`What happens if I don't have an idea for a project ?
+`}</span>
						<button className="text-[#D434FE] text-xl font-bold">+</button>
					</p>
					<hr className="border-t border-[#D434FE]/80 " />
					<p className="flex justify-between gap-6 ">
						<span>Can I join a team or do I have to come with one ?</span>
						<button className="text-[#D434FE] text-xl font-bold">+</button>
					</p>
					<hr className="border-t border-[#D434FE]/80 " />
					<p className="flex justify-between gap-6 ">
						<span>What happens after the hackathon ends ?</span>
						<button className="text-[#D434FE] text-xl font-bold">+</button>
					</p>
					<hr className="border-t border-[#D434FE]/80 " />
					<p className="flex justify-between gap-6">
						<span>
							Can I work on a project I started before the hackathon ?
						</span>
						<button className="text-[#D434FE] text-xl font-bold">+</button>
					</p>
					<hr className="border-t border-[#D434FE]/80 " />
				</div>
				<div></div>
			</div>
			<div className="md:w-1/2">
				<Image
					className="  w-full"
					src={faq}
					alt="judges-image"></Image>
			</div>
		</section>
	);
}

export default Faq;
