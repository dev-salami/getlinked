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
export default function hasEmptyOrZeroValues(obj) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];

			// Check if the value is empty or 0
			if (value === "" || value === 0) {
				return true; // Found an empty or zero value
			}

			// If the value is an object or array, recursively check its properties or elements
			if (typeof value === "object" && !Array.isArray(value)) {
				if (hasEmptyOrZeroValues(value)) {
					return true; // Found an empty or zero value within nested object
				}
			} else if (Array.isArray(value)) {
				for (const item of value) {
					if (typeof item === "object") {
						if (hasEmptyOrZeroValues(item)) {
							return true; // Found an empty or zero value within nested array
						}
					} else if (item === "" || item === 0) {
						return true; // Found an empty or zero value within the array
					}
				}
			}
		}
	}

	return false; // No empty or zero values found
}

export function isValidEmail(email) {
	// Regular expression for a basic email validation
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	return emailRegex.test(email);
}

// Example usage:
//   const email = "test@example.com";
//   const isValid = isValidEmail(email);

//   if (isValid) {
//     retu
//   } else {
//     console.log(`${email} is not a valid email address.`);
//   }
