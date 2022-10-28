import { user } from '../stores/store.js';
import axios from 'axios';
import { goto } from '$app/navigation';

const privateRoutes = ['itinerary', 'payments'];

const isPrivateRoute = (pathname) => {
	for (const item of privateRoutes) {
		if (pathname.includes(item)) return true;
	}
	return false;
};
export const validateUser = async () => {
	try {
		const res = await axios.post('http://localhost:5000/api/checkuserlogin');
		if (res.data) {
			user.set("hurray the user is there");
		} else {
			user.set(null);
			//redirecting to login route
			let currentLocation = window.location.pathname;

			if (isPrivateRoute(currentLocation)) {
				await goto('/signin?error=expired-token');
				return false;
			}
		}
	} catch (err) {
		console.log(err);
	}
};
