const pullRequest = {
    title: "Fix Typo",
    branchName: "Main",
    dateCreated: "2022/4/11",
    status: false,
    repositoryNameAssosiated: "JavaScript Classes",

    getStatus() {
        if (this.status) return `Pull Request Status: Open`
        return `Pull Request Status: Closed`
    }
}

console.log(pullRequest)
console.log(pullRequest.getStatus())