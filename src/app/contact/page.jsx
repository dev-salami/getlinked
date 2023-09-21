"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import x from "../../../public/assets/x.svg";
import ig from "../../../public/assets/ig.svg";
import facebook from "../../../public/assets/facebook.svg";
import linkedin from "../../../public/assets/linkedin.svg";
import Image from "next/image";
import axios from "axios";
import hasEmptyOrZeroValues, { isValidEmail } from "@/helper/utils";

function Contact() {
	const baseUrl = "https://backend.getlinked.ai";
	const url = `${baseUrl}/hackathon/contact-form`;
	const [name, setName] = useState("");
	const [email, setemail] = useState("");
	const [phone, setphone] = useState("");
	const [error, seterror] = useState("");
	const [success, setsuccess] = useState("");

	const [message, setmessage] = useState("");

	const data = {
		email: email,
		phone_number: phone,
		first_name: name,
		message: message,
	};

	const submitMessage = () => {
		const formIsEmpty = hasEmptyOrZeroValues(data);
		const emailIsValid = isValidEmail(data.email);
		if (!formIsEmpty && emailIsValid) {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			axios
				.post(url, data, config)
				.then((response) => {
					setsuccess("Your form has successfully been submitted");
					console.log(response.data);
				})
				.catch((error) => {
					console.log(error);
					seterror("An Error Occured");
				});

			// console.log(data);
		}
	};
	return (
		<section>
			<Navbar />
			<main className="grid grid-cols-1 md:grid-cols-2 container mb-6 mx-auto   gap-6  px-6">
				<div className="flex flex-col w-2/3 mx-auto gap-5 md:mt-20">
					<h2 className="text-[#D434FE] font-semibold text-lg">Get In touch</h2>
					<p>Contact information</p>
					<p>
						27, Alara Street <br />
						Yaba 100012 <br />
						Lagos State
					</p>
					<p>Call Us : 07067981819</p>
					<p>
						We are open from Monday- Friday <br /> 08:00am - 05:00pm
					</p>
					<div>
						<span className="text-[#D434FE] font-semibold">Share on</span>{" "}
						<br />
						<div className="flex gap-6 items-center mt-2">
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
				<div className="bg-white/10  rounded-xl p-5 lg:py-10 lg:px-16">
					<p className="my-4 text-[#D434FE] font-semibold">
						Question or need assistance ? <br />
						Let us know about it
					</p>
					<div className="flex flex-col gap-4">
						<input
							onChange={(e) => setName(e.target.value)}
							className="bg-transparent  focus:border-[#D434FE] border-2 rounded-md p-1 h-fit focus:outline-none "
							value={name}
							name="name"
							autoComplete="off"
							type="text"
							placeholder="First Name"
						/>
						<input
							onChange={(e) => setemail(e.target.value)}
							className={`${
								!isValidEmail(data.email) && email && "focus:border-red-600"
							} bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none`}
							value={email}
							autoComplete="off"
							name="email"
							type="text"
							placeholder="Email Address"
						/>
						<input
							onChange={(e) => setphone(e.target.value)}
							className="bg-transparent  focus:border-[#D434FE] border-2 rounded-md p-1 h-fit focus:outline-none "
							value={phone}
							autoComplete="off"
							name="phone-number"
							type="number"
							placeholder="Phone Number"
						/>

						<textarea
							onChange={(e) => setmessage(e.target.value)}
							className="bg-transparent  focus:border-[#D434FE] border-2 rounded-md p-1 h-fit focus:outline-none "
							value={message}
							autoComplete="off"
							placeholder="Message"
							name="message"
							id=""
							cols="30"
							rows="10"></textarea>
					</div>
					<div className="flex justify-center mt-6">
						<button
							onClick={submitMessage}
							className=" px-4 py-[6px] bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm w-fit">
							Submit
						</button>
					</div>
					{error && (
						<p className="my-4 text-red-500 text-center font-semibold">
							{error}
						</p>
					)}
					{success && (
						<p className="my-4 text-green-500 text-center font-semibold">
							{success}
						</p>
					)}
				</div>
			</main>
		</section>
	);
}

export default Contact;
