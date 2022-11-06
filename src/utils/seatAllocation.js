//allocation of seats
//input as remaining remaining capacity and totalCapacity and cabinClass and numberOfTravellers

//let total = 100;
//let rem = 67;

//means 33 are filled
//start loop from 4 till number of passengers
export const getAllocatedSeats = (totalCapacity, remCapacity, cabinClass, numberOfTravellers) => {
	let allotedSeats = [];
	var seatPrefix;

	if (cabinClass == 'Economy') seatPrefix = 'E';
	else if (cabinClass == 'Business') seatPrefix = 'B';
	else seatPrefix = 'A';
    let startNum = totalCapacity - remCapacity;
	for (let i = startNum; i < startNum + numberOfTravellers; i++) {
		allotedSeats.push(seatPrefix + toString(i));
	}

	console.log(allotedSeats);

	return allotedSeats;
};
