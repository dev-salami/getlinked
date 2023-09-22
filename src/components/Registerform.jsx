"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import register from "../../public/assets/register.png";
import Image from "next/image";
import hasEmptyOrZeroValues, { isValidEmail } from "@/helper/utils";
import Successmodal from "@/components/Successmodal";

function Registerform() {
	const baseUrl = "https://backend.getlinked.ai";
	const categoryUrl = `${baseUrl}/hackathon/categories-list`;
	const regUrl = `${baseUrl}/hackathon/registration`;

	const [teamName, setteamName] = useState("");
	const [phone, setphone] = useState("");
	const [email, setemail] = useState("");
	const [projectTopic, setprojectTopic] = useState("");
	const [category, setcategory] = useState("");
	const [teamSize, setteamSize] = useState("");
	const [agree, setagree] = useState(false);
	const [categoryTypes, setcategoryTypes] = useState([]);
	const [error, seterror] = useState("");
	const [success, setsuccess] = useState("");
	const [SuccessModal, setSuccessModal] = useState(false);

	const getCategoryList = () => {
		axios
			.get(categoryUrl)
			.then((response) => {
				setcategoryTypes(response.data);
				// return response.data;
			})
			.catch((error) => {});
	};

	useEffect(
		() => {
			getCategoryList();
		},
		//eslint-disable-next-line
		[]
	);

	const Data = {
		email: email,
		phone_number: phone,
		team_name: teamName,
		group_size: +teamSize,
		project_topic: projectTopic,
		category: category,
		privacy_poclicy_accepted: agree,
	};

	const submitApplicationForm = () => {
		const formIsEmpty = hasEmptyOrZeroValues(Data);
		const emailIsValid = isValidEmail(Data.email);
		if (!formIsEmpty && emailIsValid) {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			axios
				.post(regUrl, Data, config)
				.then((response) => {
					setsuccess("Your have success has successfully been submitted");
					setSuccessModal(true);
					setTimeout(() => setsuccess(""), 4000);
				})
				.catch((error) => {
					seterror("An Error Occured");
					setTimeout(() => seterror(""), 4000);
				});
		}
	};

	return (
		<main className="container mx-auto p-2 lg:p-8 flex flex-col  items-center lg:flex-row gap-6">
			{SuccessModal && <Successmodal />}

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
							autoComplete="off"
							onChange={(e) => setteamName(e.target.value)}
							value={teamName}
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
							autoComplete="off"
							onChange={(e) => setphone(e.target.value)}
							id="phone"
							type="number"
							value={phone}
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
							autoComplete="off"
							onChange={(e) => setemail(e.target.value)}
							id="email"
							type="email"
							value={email}
							className={`${
								!isValidEmail(Data.email) && email && "focus:border-red-600"
							} bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none`}
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
							autoComplete="off"
							onChange={(e) => setprojectTopic(e.target.value)}
							id="projectTopic"
							value={projectTopic}
							type="text"
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							placeholder="What is your group project topic"
						/>
					</div>
					<div>
						<label
							className="text-sm p-2"
							htmlFor="category">
							Category
						</label>
						<select
							onChange={(e) => setcategory(e.target.value)}
							value={category}
							className=" bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							name="category"
							id="category">
							<option
								className="bg-[#150e28]"
								value="">
								Select your category
							</option>
							{categoryTypes.map((category) => (
								<option
									key={category.id}
									className="bg-[#150e28]"
									value={category.id}>
									{category.name}
								</option>
							))}
						</select>
					</div>
					<div>
						<label
							className="text-sm p-2"
							htmlFor="size">
							Group Size
						</label>
						<select
							onChange={(e) => setteamSize(e.target.value)}
							value={teamSize}
							className="bg-transparent placeholder:text-sm w-full  focus:border-[#D434FE] border rounded-md py-1 px-3 h-fit focus:outline-none "
							name="size"
							id="size">
							<option
								className="bg-[#150e28]"
								value="">
								Select Group Size
							</option>

							<option
								className="bg-[#150e28]"
								value="1">
								1
							</option>
							<option
								className="bg-[#150e28]"
								value="2">
								2
							</option>
							<option
								className="bg-[#150e28]"
								value="3">
								3
							</option>
							<option
								className="bg-[#150e28]"
								value="4">
								4
							</option>
						</select>
					</div>
				</form>
				<div className="text-sm">
					<p className="text-[#D434FE] mb-3 mt-8">
						Please review your registration details before submitting
					</p>
					<div>
						<input
							id="group-size"
							autoComplete="off"
							onChange={(e) => setagree(e.target.checked)}
							value={agree}
							type="checkbox"
						/>
						<span className="ml-2">
							I agree with the event terms and conditions and privacy policy
						</span>
					</div>
					<div className="flex justify-center md:justify-start">
						<button
							disabled={!agree}
							onClick={submitApplicationForm}
							className="px-10 lg:px-4 py-2 mt-4 disabled:opacity-70  h-fit bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm">
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
			</div>
		</main>
	);
}

export default Registerform;
