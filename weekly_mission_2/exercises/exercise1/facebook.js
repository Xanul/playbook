// Facebook User Object
const user = {
    name: "Rodrigo Rivas",
    age: 33,
    birthdate: "1989/04/05",
    address: {
        country: "Mexico",
        state: "Yucatan",
        city: "Merida",
        zipCode: 97135,
        sector: "Jardines de Merida"
    },
    email: "xanul@gmail.com",
    password: "miPass123",
    phoneNumber: 9992584878,
    profilePic: "Picture Url",
    dateCreated: "2014/11/04",
    lastLogin: new Date(),
    friends: 374,
    posts: 9,
    photos: 44,
    relationship: true,
    acceptTerms: true,

    getUserInfo(){

        let myDate = (this.lastLogin.getUTCFullYear()) + "/" + (this.lastLogin.getMonth() + 1)+ "/" + (this.lastLogin.getUTCDate());
        let relationshipStatus = () => {
            if (this.relationship) return "Yes"
            return "No"
        }

        return `
        Name: ${this.name}
        Age: ${this.age}
        Birthdate: ${this.birthdate}
        Email: ${this.email}
        Phone: ${this.phoneNumber}
        Last Login: ${myDate}
        Friends: ${this.friends}
        Posts: ${this.posts}
        Photos: ${this.photos}
        In Relationship: ${relationshipStatus()}`
    },

    


}
console.log('\n 1. User Profile Informaton: ')
console.log(user.getUserInfo())

// Facebook Post Object
const post = {
    assosiatedUser: user,
    typeOfPost: 'Photo',
    description: 'This is a photo of my last trip to Cancun',
    postDate: new Date(),
    comments: 6,
    likes: 22,
    seenBy: 43,
    peopleTagged: ['Rodrigo Rivas', 'Jorge Ramirez', 'Jessica Hernandez'],
    lasCommentBy: ['Rodrigo Rivas'],

    getPostInfo() {

        return `
        Type of Post: ${this.typeOfPost}
        Description: ${this.description}
        Post Date: ${this.postDate}
        Comments: ${this.comments}
        Likes: ${this.likes}
        People Tagged: ${this.peopleTagged}
        `
    }
}
console.log('\n 2. Post Information')
console.log(post.getPostInfo())