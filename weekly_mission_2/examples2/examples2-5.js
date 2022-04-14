// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed) {
    this.repo = repo;
    this.title = title;
    this.lines_changed = lines_changed;
    this.status = "OPEN";
    this.dateCreated = new Date(); // esto guardará la fecha actual en que se instancia el objeto
  }

  getInfo() {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`;
  }
  getInfo2(){
      return `
      Repo: ${this.repo}
      Title: ${this.title}
      Lines Changed: ${this.lines_changed}
      Status: ${this.status}
      Date: ${this.date}`
  }
}

console.log("Ejemplo 5: Atributos con valores por default");
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100);
// console.log(myPR1.getInfo());

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99);
// console.log(myPR2.getInfo());

const myPR3 = new PullRequest("myRepo", "FirstRepo", 2);
console.log(myPR3.getInfo2());