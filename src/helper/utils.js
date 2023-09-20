import axios from "axios";
export const getCategoryList = () => {
	const data = "";
	const baseUrl = "https://backend.getlinked.ai/";

	const config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${baseUrl}/hackathon/categories-list`,
		headers: {
			"Content-Type": "application/json",
		},
		data: data,
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};
