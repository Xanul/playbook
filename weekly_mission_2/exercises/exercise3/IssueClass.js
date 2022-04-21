class Issue {
  constructor(
    title,
    repoNameAssosiated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdate
  ) {
    this.title = title;
    this.repoNameAssosiated = repoNameAssosiated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdate = lastUpdate;
  }

  get getTitle() {
    return this.title;
  }

  get getRepoNameAssociated() {
    return this.repoNameAssosiated;
  }

  get getStatus() {
    return this.status;
  }

  get getNumberOfComments() {
    return this.numberOfComments;
  }

  get getLabels() {
    return this.labels;
  }

  get getAuthor() {
    return this.author;
  }

  get getDateCreated() {
    return this.dateCreated;
  }

  get getLastUpdate() {
    return this.lastUpdate;
  }

  getTitleAndAuthor() {
    return `
    Issue Title: ${this.getTitle}
    Issue Author: ${this.getAuthor}`;
  }

  getGeneralInfo() {
    return `
    Title: ${this.getTitle}
    Repo Assosiated: ${this.getRepoNameAssociated}
    Status: ${this.getStatus}
    Comments: ${this.getNumberOfComments}
    Labels: ${this.getLabels}
    Author: ${this.getAuthor}
    Date Created: ${this.getDateCreated}
    Last Update: ${this.getLastUpdate}`;
  }
}
const date = new Date()

const testIssue = new Issue("JavaScript Session 1", "JavaScript Project", true, 18, ["JavaScript", "NodeJS", "Week 1", "Objects"], "Xanul", date, date)

console.log(testIssue.getTitleAndAuthor())
console.log(testIssue.getGeneralInfo())
