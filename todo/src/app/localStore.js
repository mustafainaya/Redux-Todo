export const loadState = () => {
	try {
		const localstate = localStorage.getItem('state');
		if (localstate === null) {
			return undefined;
		}
		return JSON.parse(localstate);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const localstate = JSON.stringify(state);
		localStorage.setItem('state', localstate);
	} catch (err) {
		//syntax
	}
};
