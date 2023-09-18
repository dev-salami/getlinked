import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<section className="container mx-auto p-8">
			{/* Laptop screen */}
			<div className="flex justify-between">
				<Link
					href="/"
					className="text-xl font-bold">
					<span className="text-white">get</span>
					<span className="text-[#D434FE]">Linked</span>
				</Link>
				<div className="sm:flex gap-3 text-xs items-center hidden">
					<Link href="/#timeline">Timeline</Link>
					<Link href="/#overview">Overview</Link>
					<Link href="/#faq">FAQs</Link>
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
				<button className="sm:hidden block">&&&</button>
			</div>
		</section>
	);
}

export default Navbar;
