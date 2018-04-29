
let store = {drivers: [], passengers: [], trips: []}
// example: 
// store = {
// 	drivers: [{name: "myname", id: 1}, {name: "myname2", id: 2}], 
// 	passengers: [{name: "mynamep", id: 1}, {name: "mynamep2", id: 2}], 
// 	trips: [{id: 1, driverId: 1, passengerId: 1}, {id: 2, driverId: 1, passengerId: 2}]
// }



let driverId = 0

class Driver {

	
	constructor(name){
		this.name = name
		this.id = ++driverId
		store.drivers.push(this)
	}


	trips(){
		return store.trips.filter(trip => { return trip.driverId === this.id})
	}

// in store.trips, find trip where trips.driverId === this.id
// 	then in store.passengers, find passenger where trip.passengerId === passenger.id

	passengers(){
		const tripsOfDriver = this.trips()
		// example tripsOfDriver = [{id: 1, driverId: 1, passengerId: 1}, {id: 2, driverId: 1, passengerId: 2}]
		const passengerOfDriver = tripsOfDriver.map(trip => {return trip.passenger()}) 
		return passengerOfDriver

		
	}


}










let passengerId = 0
class Passenger {
	constructor(name){
		this.id = ++passengerId
		this.name = name
		store.passengers.push(this)
}

trips(){
		return store.trips.filter(trip => { return trip.passengerId === this.id})
	}

drivers(){
	const tripsOfPassenger = this.trips()
	const driversOfPassenger = tripsOfPassenger.map(trip => {return trip.driver()}) 
		return driversOfPassenger
}



}


let tripId = 0

class Trip {

	constructor(driver, passenger){
		this.id = ++tripId
		if(driver){this.driverId = driver.id}
		if(passenger){this.passengerId = passenger.id}
		store.trips.push(this)
	}

driver(){
	return store.drivers.find(driver => {
		return driver.id === this.driverId
	})
}

passenger(){
	return store.passengers.find(passenger => {
		return passenger.id === this.passengerId
	})

}
}

