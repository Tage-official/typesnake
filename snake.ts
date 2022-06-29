const readline:any = require('readline-sync')
const max:number = readline.question('Enter field size: ') 
const min:number = 0

interface Matrix {
    ground:[[]];
}

interface Environment {
    value: ' '
}

interface EnvironmentField {
    value:'#'
}