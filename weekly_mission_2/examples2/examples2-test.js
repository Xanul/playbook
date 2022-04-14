class Usuario {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    saludo(){
        console.log(`Hola soy ${this.nombre}`)
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            return true
        }
        else {
            return false
        }
    }
}

class Alumno extends Usuario {
    constructor(nombre, email, password){
        super(nombre, email, password)

        this.active = false;
        this.cursos = [];
    }

    activar(){
        this.activo = true;
    }

    agregarCurso(curso) {
        this.cursos.push(curso)
    }

    login(email, password){
        if (!this.activo) return false
        return super.login(email, password)
    }
}
 
// const pablo = new Usuario('Pablo', 'pablo@email.com', 'pablo123');
const jose = new Alumno('Jose', 'jose@email.com', 'joselito');

// console.log(pablo)
console.log(jose)

pablo.saludo()
