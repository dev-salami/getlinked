"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import bars from "../../public/assets/bar.svg";
import Image from "next/image";

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<section className="container  mx-auto p-3 md:p-8">
			<aside>
				{/* <button
					onClick={() => setOpen((prev) => !prev)}
					className="sm:hidden block  ">
					<div
						className={`${
							open ? "opacity-100 h-7 w-7" : "opacity-0 h-0 w-0"
						} bg-gradient-to-r to-[#fe34b9] from-[#903aff]   duration-200   rounded-full  flex items-center justify-center ease-out`}>
						<FaTimes
							className="text-white bg-[#150e28] rounded-full p-[6px] font-bold "
							size={25}
						/>
					</div>
				</button> */}
				<div className="sm:hidden ">
					<div
						className={`z-[1000] duration-1000 p-10 bg-[#150e28]    fixed top-0 left-0 right-0 bottom-0 ${
							open ? " " : "  -translate-x-full "
						}`}>
						<div className="relative flex flex-col justify-evenly h-full items-center text-lg gap-6 text-white font-semibold leading-tight ">
							{open && (
								<button
									onClick={() => setOpen((prev) => !prev)}
									className="sm:hidden block absolute -top-8 xs:-top-4 -right-4 xs:right-4">
									<div
										className={`${
											open ? "opacity-100 h-7 w-7" : "opacity-0 h-0 w-0"
										} bg-gradient-to-r to-[#fe34b9] from-[#903aff]   duration-200   rounded-full  flex items-center justify-center ease-out`}>
										<FaTimes
											className="text-white bg-[#150e28] rounded-full p-[6px] font-bold "
											size={25}
										/>
									</div>
								</button>
							)}
							<a href="/#">Overview</a>
							<a
								onClick={() => setOpen(false)}
								href="/#faq">
								FAQs
							</a>
							<a
								onClick={() => setOpen(false)}
								href="/#timeline">
								Timeline
							</a>
							<Link
								className="bg-clip-text text-transparent bg-gradient-to-r from-[#fe34b9] to-[#903aff]"
								onClick={() => setOpen(false)}
								href="contact">
								Contact
							</Link>
							<Link
								onClick={() => setOpen(false)}
								href="register"
								className="ml-4 px-4 py-[6px] bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm">
								Register
							</Link>
						</div>
					</div>
				</div>
			</aside>

			{/* Laptop screen */}
			<div className="flex justify-between">
				<a
					href="/"
					className="text-xl font-bold">
					<span className="text-white">get</span>
					<span className="text-[#D434FE]">Linked</span>
				</a>
				<div className="sm:flex gap-3 text-xs items-center hidden">
					<a href="/#">Overview</a>
					<a href="/#faq">FAQs</a>
					<a href="/#timeline">Timeline</a>
					<Link
						className="bg-clip-text text-transparent bg-gradient-to-r from-[#fe34b9] to-[#903aff]"
						href="contact">
						Contact
					</Link>
					<Link
						href="register"
						className="ml-4 px-4 py-[6px] bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm">
						Register
					</Link>
				</div>
				{!open && (
					<button
						onClick={() => setOpen((prev) => !prev)}
						className="sm:hidden block  ">
						{/* <div
						className={`${
							open ? "opacity-100 h-7 w-7" : "opacity-0 h-0 w-0"
						} bg-gradient-to-r to-[#fe34b9] from-[#903aff]   duration-200   rounded-full  flex items-center justify-center ease-out`}>
						<FaTimes
							className="text-white bg-[#150e28] rounded-full p-[6px] font-bold "
							size={25}
						/>
					</div> */}

						<Image
							className={`${
								open ? "opacity-0 h-0  w-0" : "opacity-100 h-5  w-fit"
							}  duration-200 ease-out`}
							src={bars}
							alt="chain-icon"></Image>
					</button>
				)}
			</div>
		</section>
	);
}

export default Navbar;
