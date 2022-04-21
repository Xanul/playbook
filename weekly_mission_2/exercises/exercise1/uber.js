// Uber Profile Object
const uberProfile = {
    name: 'Rodrigo Rivas', 
    birthdate: "1989/04/05",
    homeAddress: {
        country: "Mexico",
        state: "Yucatan",
        city: "Merida",
        zipCode: 97135,
        sector: "Jardines de Merida"
    },
    email: 'rivas@gmail.com',
    password: 'abc123',
    phoneNumber: 9992324455,
    profilePic: "Pic Url",
    memberSince: '2008/05/66',
    numberOfTrips: 204,
    rating: 4.98,
    payInfo:{
        creditCard: 'Visa',
        cardNumber: 4444222299991111,
        expDate: '23/24',
        code: 222
    },
    getProfileInfo(){
        return `
        Name: ${this.name}
        Email: ${this.email}
        Address: ${JSON.stringify(this.homeAddress, null, 0)}
        Phone Number: ${this.phoneNumber}
        Member Since: ${this.memberSince}
        Number of Trips: ${this.numberOfTrips}
        Rating: ${this.rating}
        `
    }
}

console.log('\n 1. Uber Profile Info')
console.log(uberProfile.getProfileInfo())

//Uber Travel Info
const uberTravel = {
    uberUser: uberProfile,
    uberDriver: 'uberDriverProfile',
    originAddress: {
        street: 22,
        locationNumber: 504,
        sector: 'Jardines de Merida',
        city: 'Merida',
        state: 'Yucatan',
    },
    destinationAddress: {
        stree: 11,
        locationNumber: 102,
        sector: 'Centro',
        city: 'Merida',
        state: 'Yucatan'
    },
    date: new Date (), 
    tripEstimatedPrice: 120.40,
    tripEstimatedTime: "22m",
    payment: 'Credit Card',
    dynamicRate: 1.0,

    getTripInfo(){
        return `
        User: ${uberProfile.getProfileInfo()}
        Driver: ${this.uberDriver}
        Date: ${this.date}
        Origin ${this.originAddress.sector}
        Destination: ${this.destinationAddress.sector}
        Trip Time: ${this.tripEstimatedTime}
        Dynamic Rate: ${this.dynamicRate}
        Price: ${this.tripEstimatedPrice}
        Payment Method: ${this.payment}`
    }
}

console.log('\n 2. Uber Trip Info')
console.log(uberTravel.getTripInfo())