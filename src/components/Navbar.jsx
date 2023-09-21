"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import bars from "../../public/assets/bar.svg";
import Image from "next/image";

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<section className="container mx-auto p-3 md:p-8">
			{/* Laptop screen */}
			<div className="flex justify-between">
				<Link
					href="/"
					className="text-xl font-bold">
					<span className="text-white">get</span>
					<span className="text-[#D434FE]">Linked</span>
				</Link>
				<div className="sm:flex gap-3 text-xs items-center hidden">
					<Link href="/#overview">Overview</Link>
					<Link href="/#faq">FAQs</Link>
					<Link href="/#timeline">Timeline</Link>
					<Link
						className="bg-clip-text text-transparent bg-gradient-to-r from-[#fe34b9] to-[#903aff]"
						href="/contact">
						Contact
					</Link>
					<Link
						href="/register"
						className="ml-4 px-4 py-[6px] bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm">
						Register
					</Link>
				</div>
				<button
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

					{/* <FaBars size={30} /> */}
					<Image
						className={`${
							open ? "opacity-0 h-0  w-0" : "opacity-100 h-5  w-fit"
						}  duration-200 ease-out`}
						src={bars}
						alt="chain-icon"></Image>

					{/* {open ? (
						<div className=" bg-gradient-to-r to-[#fe34b9] from-[#903aff]   h-7 w-7 rounded-full  flex items-center justify-center">
							
							<FaTimes
								className="text-white bg-[#150e28] rounded-full p-[6px] font-bold "
								size={25}
							/>
						</div>
					) : (
						// <FaBars size={30} />
						<Image
							className="h-5  w-fit"
							src={bars}
							alt="chain-icon"></Image>
					)} */}
				</button>
			</div>
		</section>
	);
}

export default Navbar;
