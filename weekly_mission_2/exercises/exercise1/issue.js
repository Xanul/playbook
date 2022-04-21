const issue = {
    title: "Personal Issue",
    repositoryNameAssociated: "JavaScript Objects",
    status: true,
    numberOfComments: 4,
    labels: ["Week1", "JavaScript", "LaunchX"],
    author: "Xanul",
    dateCreated: "2022/4/13",
    lastUpdate: new Date (),

    getTitleAndAuthor(){
        return `
        Issue: ${this.title}
        Author: ${this.author}`
    },
    getGeneralInfo(){

        let myDate = (this.lastUpdate.getUTCFullYear()) + "/" + (this.lastUpdate.getMonth() + 1)+ "/" + (this.lastUpdate.getUTCDate());

        return `
        Issue: ${this.title}
        Author: ${this.author}
        Repository Assosiated: ${this.repositoryNameAssociated}
        Status: ${this.status}
        Comments: ${this.numberOfComments}
        Labels: ${this.labels}
        Date Created: ${this.dateCreated}
        Last Update: ${myDate}`
        
    }
}

console.log(issue.getGeneralInfo())