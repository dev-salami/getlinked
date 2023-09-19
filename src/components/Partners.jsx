import React from "react";
import sponsors from "../../public/assets/sponsors.svg";
import Image from "next/image";

function Partners() {
	return (
		<section className="container mx-auto px-6 my-12">
			<div className="flex flex-col justify-center items-center">
				<div>
					<h2 className="text-xl text-center font-semibold my-4">
						Partners and Sponsors
					</h2>
					<p className="text-center mb-8">
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors
					</p>
				</div>
				<div>
					<Image
						className="  w-fit"
						src={sponsors}
						alt="big-idea"></Image>
				</div>
			</div>
		</section>
	);
}

export default Partners;
