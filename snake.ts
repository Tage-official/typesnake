import { ReadLine } from 'readline';
const Readline: any = import('readline-sync')

interface Matrix {
    matrix: [[]];
    min: number;
    max: number
}

interface Environment {
    value: {}

}

interface EnvironmentField {
    value: '#';
    x: number;
    y: number
}
