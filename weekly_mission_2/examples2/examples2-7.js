// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
  constructor(name, mission) {
    this.name = name;
    this.mission = mission;
    this.students = 0;
    this.lives = 0;
    this._stack = [];
  }
  get getStudents() {
    return this.students;
  }
  get getLives() {
    return this.lives;
  }
  get getStack() {
    return this._stack;
  }
  set setStudents(students) {
    this.students = students;
  }
  set setLives(lives) {
    if (lives > 0 && lives <= 10){
        this.lives = lives;
    }
    else {
        console.log('Error en en numero de vidas')
    }
  }
  set setStack(tech) {
    this._stack.push(tech);
  }
  deleteStack() {
    this._stack.pop();
  }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto");
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS");

// console.log(missionCommanderNode.getStudents); // 0 por default
// console.log(missionCommanderNode.getLives); // 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;

// console.log(missionCommanderNode.getStudents); // 0 por default
// console.log(missionCommanderNode.getLives); // 0 por default

const newInput = new MissionCommander("Rodrigo", "JavaScript")
newInput.setStack = "Java"
newInput.setStack = "PHP"
newInput.setLives =8;

console.log(newInput)

