import React from "react";
import cup from "../../public/assets/cup.png";
import reward from "../../public/assets/rewards.png";
import Image from "next/image";

function Prizes() {
	return (
		<section className="container mx-auto px-4 pt-6">
			<div className="grid grid-cols-1 md:grid-cols-2 ">
				<div></div>
				<div>
					<p className="text-xl font-semibold items-center lg:items-start flex flex-col mb-6">
						<span>Prizes and</span>
						<span className="text-[#D434FE]">Rewards</span>
					</p>
					<p className="text-center md:text-left mb-6">
						Highlight of the prizes or rewards for winners and participants
					</p>
				</div>
			</div>
			<div className=" flex  gap-10 mx-6 md:flex-row flex-col ">
				<div>
					<Image
						className="  w-fit"
						src={cup}
						alt="big-idea"></Image>
				</div>
				<div>
					<Image
						className="  w-fit"
						src={reward}
						alt="big-idea"></Image>
				</div>
			</div>
		</section>
	);
}

export default Prizes;
