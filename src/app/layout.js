import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "getLinked",
	description: "getlinked Tech Hackathon 1.0 ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
