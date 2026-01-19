
const greet = (name) => {
    console.log(`Hello ${name}`)
}

const greetBaradhan = (greetFn) => {
    const name = "vishva"
    greetFn(name)
}

greetBaradhan(greet);