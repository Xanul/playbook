class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issuesOpen, issuesClose) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issuesOpen = issuesOpen
        this.issuesClose = issuesClose
    }

    get getName() {
        return this.name
    }

    get getAuthor() {
        return this.author
    }

    get getIssuesOpen() {
        return this.issuesOpen
    }
    
    get getIssuesClosed(){
        return this.issuesClose
    }
    
    getTotalIssues() {
        return `The total number of issues is: ${this.getIssuesOpen + this.getIssuesClosed}`
    }

    getGeneralInfo() {
        return `The repository ${this.getName} was created by ${this.getAuthor}`
    }
}

const myRepo = new Repo('myRepo', 'Rodrigo', 'JavaScript', 22, 2, 1, 4, 2 )

console.log(myRepo.getTotalIssues())
console.log(myRepo.getGeneralInfo())