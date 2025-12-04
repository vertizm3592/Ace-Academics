
window.authenticate = function(email, password){
	return new Promise((resolve) => {
		setTimeout(() => {
			const demoEmail = 'user@example.com';
			const demoPassword = 'password';
			if(email === demoEmail && password === demoPassword){
				resolve({ ok: true, user: { email: demoEmail } });
			} else {
				resolve({ ok: false, message: 'Invalid email or password.' });
			}
		}, 250);
	});
};

