export const getUserEmail = async () => {
	try {
		
		const resp = await fetch(`https://reqres.in/api/users/2`);
		const { data: { email } } = await resp.json();
    return email;
	} catch (error) {
		// manejo del error
		console.error(error);
	}
};

// getUser();
