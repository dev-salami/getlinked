"use client";
import { useEffect, useState } from "react";
function CountdownTimer({ m, year, day }) {
	const [expiryTime, setExpiryTime] = useState(`${day} ${m} ${year} 15:30:25`);
	const [countdownTime, setCountdownTime] = useState({
		countdownDays: "",
		countdownHours: "",
		countdownlMinutes: "",
		countdownSeconds: "",
	});
	const countdownTimer = () => {
		const timeInterval = setInterval(() => {
			const countdownDateTime = new Date(expiryTime).getTime();
			const currentTime = new Date().getTime();
			const remainingDayTime = countdownDateTime - currentTime;
			const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
			const totalHours = Math.floor(
				(remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const totalMinutes = Math.floor(
				(remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

			const runningCountdownTime = {
				countdownDays: totalDays,
				countdownHours: totalHours,
				countdownMinutes: totalMinutes,
				countdownSeconds: totalSeconds,
			};

			setCountdownTime(runningCountdownTime);

			if (remainingDayTime < 0) {
				clearInterval(timeInterval);
				setExpiryTime(false);
			}
		}, 1000);
	};

	useEffect(() => {
		countdownTimer();
	});

	return (
		<div className="">
			<div className="text-xs font-semibold">
				<div className="flex sm:justify-center lg:justify-start ">
					{expiryTime !== false ? (
						<div className="flex gap-5 mt-8">
							<div className=" text-3xl font-semibold ">
								<span>{countdownTime.countdownDays}</span>
								<span className="text-sm ml-1">D</span>
							</div>
							<div className=" text-3xl font-semibold ">
								<span>{countdownTime.countdownHours}</span>
								<span className="text-sm ml-1">H</span>
							</div>
							<div className=" text-3xl font-semibold ">
								<span>{countdownTime.countdownMinutes}</span>
								<span className="text-sm ml-1">M</span>
							</div>
							<div className=" text-3xl font-semibold ">
								<span>{countdownTime.countdownSeconds}</span>
								<span className="text-sm ml-1">S</span>
							</div>
						</div>
					) : (
						<p>Deal has been Expired</p>
					)}
				</div>
			</div>
		</div>
	);
}
export default CountdownTimer;
