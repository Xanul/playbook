// Twitter User Object
const user = {
    name: "Rodrigo Rivas",
    age: 33,
    birthdate: "1989/04/05",
    username: "@Xanul",
    password: "miPass123",
    email: "xanul@gmail.com",
    profilePic: "Picture Url",
    dateCreated: "2008/04/12",
    lastLogin: new Date(),
    followers: 18,
    following: 88,
    tweets: 9,
    address: {
        country: "Mexico",
        state: "Yucatan",
        city: "Merida",
        zipCode: 97135,
        sector: "Jardines de Merida"
    },
    acceptTerms: true,

    getBasicInfo() {
        let myDate = (this.lastLogin.getUTCFullYear()) + "/" + (this.lastLogin.getMonth() + 1)+ "/" + (this.lastLogin.getUTCDate());
        return `
        Name: ${this.name}
        Username: ${this.username}
        Birthdate: ${this.birthdate}
        Member Since: ${this.dateCreated}
        Last Login: ${myDate}
        Following: ${this.following}
        Followers: ${this.followers}
        Tweets: ${this.tweets}
        `
    }
}

console.log('1. User Information:')
console.log(user.getBasicInfo())

// Twitter Trending Topic Object
const trendingTopic = {
    topic: "ElonMusk",
    twitts: 23900,
    mostPopularIn: "Mexico",
    ranking: 7,
    mostActiveUser: "Xanul",
    firstTimeTrend: false,
    dateCreated: "2022/04/14",
    trendingTime: "1d 3h 22m",
    lastTweet: {
        username: "@Xanul",
        date: new Date(),
        tweeet: "I like ElonMusk",
    },

    getTendingInfo() {
        return `
        Topic: ${this.topic}
        Twitts: ${this.twitts}
        Initial Date: ${this.dateCreated}
        Trending Time: ${this.trendingTime}
        Last Tweet:
            Username: ${this.lastTweet.username}
            Date: ${this.lastTweet.date}
            Tweet: ${this.lastTweet.tweeet}
            `
    }
}

console.log('2. Trend Information:')
console.log(trendingTopic.getTendingInfo())

// Twitter Hashtag Object
const hashTag = {
    hashTag: "#Selfie",
    twitts: 4540,
    dateCreated: "15/04/2022",
    trendingTime: "4h 32m",
    relatedTopics: ["Photography", "People", "Selfies"],
    relatedUser: "@Xanul",
    lastTweet: {
        username: "@Xanul",
        date: new Date(),
        tweeet: "#Selfie (Selfie Pic)",
    },

    getHashInfo() {
        return `
        HashTag: ${this.hashTag}
        Twitts: ${this.twitts}
        Related Topics: ${this.relatedTopics}
        Initial Date: ${this.dateCreated}
        Trending Time: ${this.trendingTime}
        Last Tweet:
            Username: ${this.lastTweet.username}
            Date: ${this.lastTweet.date}
            Tweet: ${this.lastTweet.tweeet}
            `
    }
}

console.log('3. Hashtag information:')
console.log(hashTag.getHashInfo())