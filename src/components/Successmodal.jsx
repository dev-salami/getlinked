import Image from "next/image";
import React from "react";
import congratulation from "../../public/assets/congratulation.png";
import Link from "next/link";

function Successmodal() {
	return (
		<section className="fixed inset-0 bg-[#150e28]/90 p-4  backdrop-blur-sm">
			<div className="h-full flex justify-center items-center">
				<div className="max-w-md border  border-[#D434FE]   rounded-md mx-auto flex flex-col  items-center">
					<div>
						<Image
							className="  w-fit"
							src={congratulation}
							alt="big-idea"></Image>
					</div>
					<div className="text-center flex flex-col gap-4">
						<p>
							Congratulations <br />
							You have successfully Registered
						</p>
						<p>
							Yes, it was easy and you did it! check your mail box for next step
						</p>
						<Link
							href="/"
							className=" px-4 py-[6px] bg-gradient-to-r from-[#fe34b9] to-[#903aff] rounded-sm w-full">
							Back
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Successmodal;
