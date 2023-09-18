import Navbar from "@/components/Navbar";
import React from "react";

function Contact() {
	return (
		<section>
			<Navbar />
			<main className="grid grid-cols-1 md:grid-cols-2 container mb-6 mx-auto gap-6 mt-10 px-6">
				<div className="flex flex-col w-2/3 mx-auto gap-5">
					<h2 className="text-[#D434FE] font-semibold text-lg">Get In touch</h2>
					<p>Contact information</p>
					<p>
						27, Alara Street <br />
						Yaba 100012 <br />
						Lagos State
					</p>
					<p>Call Us : 07067981819</p>
					<p>
						We are open from Monday- Friday <br /> 08:00am - 05:00
					</p>
					<div>
						<span className="text-[#D434FE]">Share on</span> <br />
						<span>ig</span>
						<span>x</span>
						<span>f</span>
						<span>in</span>
					</div>
				</div>
				<div className="bg-white/10 rounded-xl p-5 lg:py-10 lg:px-20">
					<p className="my-4">
						Question or need assistance ? <br />
						Let us know about it
					</p>
					<div className="flex flex-col gap-4">
						<input
							className="bg-transparent  focus:border-[#D434FE] border-2 rounded-md p-1 h-fit focus:outline-none "
							type="text"
							placeholder="First Name"
						/>
						<input
							className="bg-transparent  focus:border-[#D434FE] border-2 rounded-md p-1 h-fit focus:outline-none "
							type="text"
							placeholder="Email Address"
						/>

						<textarea
							className="bg-transparent  focus:border-[#D434FE] border-2 rounded-md p-1 h-fit focus:outline-none "
							placeholder="Message"
							name=""
							id=""
							cols="30"
							rows="10"></textarea>
					</div>
				</div>
			</main>
		</section>
	);
}

export default Contact;
