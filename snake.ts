type matrix = [[]]

const max:number = 15
const min:number = 0

interface Point{

}

interface Matrix{
    ground:matrix;
}

interface Environment{

}

interface EnvironmentField{

}

interface Snake{
    value:string;
    x:number;
    y:number;
}

let head: Snake = {
    value: '@',
    x: 8,
    y: 8
}

interface SnakeBody{
    value: string;
    x: number;
    y: number;
}

let body: SnakeBody = {
    value: '=',
    x: 8,
    y: 8
}

interface Food{
    x: number;
    y: number;
}

let food: Food = {
    x: Math.floor(Math.random() * (max - min) + min),
    y: Math.floor(Math.random() * (max - min) + min)
}

interface GameController{

}

interface SnakeController{

}

interface KeyboardController{
    w:string;
    a:string;
    s:string;
    d:string;
}