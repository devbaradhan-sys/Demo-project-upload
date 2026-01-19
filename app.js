
const greet = (name) => {
    console.log(`Hello ${name}`)
}

const greetBaradhan = (greetFn) => {
    const name = "Baradhan"
    greetFn(name)
}

greetBaradhan(greet);