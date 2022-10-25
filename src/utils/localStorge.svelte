<script context="module">
	export const setFlightDetailsToLocalStorage = (params) => {
		let flightDetails = {};
		flightDetails['from'] = params.get('from');
		flightDetails['to'] = params.get('to');
		flightDetails['depart_date'] = params.get('depart_date');
		flightDetails['class'] = params.get('class');

		localStorage.setItem('flightDetails', JSON.stringify(flightDetails));
	};

	export const setFlightId = (id) => {
		let flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
		flightDetails['flightId'] = id;
		localStorage.setItem('flightDetails', JSON.stringify(flightDetails));
	};

    export const addFlightDetailsToLocalStorage = (details)=> {
        let flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
        flightDetails["details"] = details;
		localStorage.setItem('flightDetails', JSON.stringify(flightDetails));
    }
</script>
