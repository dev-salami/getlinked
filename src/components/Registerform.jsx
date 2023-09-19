"use client";
import React, { useState } from "react";
import register from "../../public/assets/register.png";
import Image from "next/image";
import Link from "next/link";

function Registerform() {
	const [teamName, setteamName] = useState("");
	const [phone, setphone] = useState("");
	const [email, setemail] = useState("");
	const [projectTopic, setprojectTopic] = useState("");
	const [category, setcategory] = useState("");
	const [teamSize, setteamSize] = useState("");

	return (
		<main className="container mx-auto p-2 lg:p-8 flex flex-col  items-center lg:flex-row gap-6">
			<div className="lg:w-1/2">
				<Image
					className="  w-fit"
					src={register}
					alt="big-idea"></Image>
			</div>
			<div className="lg:w-1/2  w-full mb-6 lg:mb-0 sm:bg-white/5 p-6 rounded-xl">
				<h1 className="font-bold text-2xl text-[#D434FE] my-6">Register</h1>
				<p>Be part of the movememt ......</p>
				<p className="uppercase  font-semibold mb-4 my-2">
					Create your account
				</p>
				<form className="grid grid-cols-1 gap-x-4 gap-y-6 w-full md:grid-cols-2">
					<div>
						<label
							className="text-sm p-2"
							htmlFor="team-name">{`Team's Name`}</label>
						<input
							id="team-name"
							type="text"
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							placeholder="Enter the name of your group"
						/>
					</div>
					<div>
						<label
							className="text-sm p-2"
							htmlFor="phone">
							Phone
						</label>
						<input
							id="phone"
							type="number"
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							placeholder="Enter your phone number"
						/>
					</div>
					<div>
						<label
							className="text-sm p-2"
							htmlFor="email">
							Email
						</label>
						<input
							id="email"
							type="email"
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							placeholder="Enter your email"
						/>
					</div>
					<div>
						<label
							className="text-sm p-2"
							htmlFor="projectTopic">
							project Topic
						</label>
						<input
							id="projectTopic"
							type="text"
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							placeholder="What is your group project topic"
						/>
					</div>
					<div>
						<label
							className="text-sm p-2"
							htmlFor="category">
							Category{" "}
						</label>
						<select
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							name="category"
							id="category">
							<option value="">Select your category</option>

							<option value="value1">value1</option>
							<option value="value2">value2</option>
							<option value="value3">value3</option>
							<option value="value4">value4</option>
						</select>
					</div>
					<div>
						<label
							className="text-sm p-2"
							htmlFor="size">
							Group Size
						</label>
						<select
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							name="size"
							id="size">
							<option value="">Group Size</option>

							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
				</form>
				<div className="text-sm">
					<p className="text-[#D434FE] mb-3 mt-8">
						Please review your registration details before submitting
					</p>
					<div>
						<input type="checkbox" />
						<span className="ml-2">
							I agree with the event terms and conditions and privacy policy
						</span>
					</div>
					<div className="flex justify-center md:justify-start">
						<button
							href="/register"
							className="px-10 lg:px-4 py-2 mt-4  h-fit bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm">
							Submit
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Registerform;
