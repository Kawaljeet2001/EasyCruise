<script context="module">
	export const dateMonthComplete = (dateString) => {
		const dateField = new Date(dateString);
		const month = dateField.toLocaleString('default', { month: 'long' });
		return month;
	};

	export const dateMonth = (dateString) => {
		const dateField = new Date(dateString);
		const month = dateField.toLocaleString('default', { month: 'long' });
		return month.substring(0, 3);
	};

	export const dateVal = (dateString) => {
		const dateField = new Date(dateString);
		const date = dateField.getDate();
		return date;
	};

	export const dateDay = (dateString) => {
		const dateField = new Date(dateString);
		const day = dateField.toLocaleString('default', { weekday: 'long' });
		return day.substring(0, 3);
	};

	export const arrivalDateParser = (dateString, returnDay) => {
		const dateField = new Date(dateString);

		if (returnDay == 'next') dateField.setDate(dateField.getDate() + 1);

		const month = dateField.toLocaleString('default', { month: 'long' }).substring(0, 3);
		const day = dateField.toLocaleString('default', { weekday: 'long' }).substring(0, 3);
		const date = dateField.getDate();

		let ans = {
			date: date,
			day: day,
			month: month
		};

		return day + ',' + date +  " " +  month;
	};

	export const journeyDepartureDateString = (flightDetails) => {
		return (
			dateDay(flightDetails.depart_date) +
			',' +
			dateVal(flightDetails.depart_date) + " " + 
			dateMonth(flightDetails.depart_date)
		);
	};

	export const dateInFormat2 = (dateString) => {
		const dateField = new Date(dateString);
		const month = dateField.toLocaleString('default', { month: 'long' }).substring(0, 3);
		const day = dateField.toLocaleString('default', { weekday: 'long' }).substring(0, 3);
		const date = dateField.getDate();
		const year = dateField.getFullYear();
		return day.substring(0,3) + ", " + date + " " + month.substring(0,3) + " " + year
	}
</script>
