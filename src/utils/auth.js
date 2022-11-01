import { user } from '../stores/store.js';
import axios from 'axios';
import { goto } from '$app/navigation';

const privateRoutes = ['itinerary', 'payments', 'confirmation', 'profile'];
const prohibitedWhenLoggedIn = ['signin'];

const isPrivateRoute = (pathname , privateRoutes) => {
	for (const item of privateRoutes) {
		if (pathname.includes(item)) return true;
	}
	return false;
};
export const validateUser = async () => {
	//first checking if isLoggedIn localStorage is set or not
	if (localStorage.getItem('isLoggedIn')) {

		if(isPrivateRoute(window.location.pathname , prohibitedWhenLoggedIn)){
			await goto('/');
		}

		let userDetails = JSON.parse(localStorage.getItem("isLoggedIn"));
		user.set(userDetails);
		return true;
	} else {
		user.set(null);
		let currentLocation = window.location.pathname;
		if (isPrivateRoute(currentLocation , privateRoutes)) {
			await goto('/signin?error=protected-content');
			return false;
		}
	}
};
