interface Matrix {
    matrix: string[][];
    min: number;
    max: number
}

interface Environment {
    value: EnvironmentField[]
}

interface EnvironmentField {
    value: string;
    coordinate: Point
}

interface Point {
    x: number;
    y: number
}

const field: EnvironmentField = {
    value: '#',
    coordinate: {x:0, 
                 y:15
    }
}

let ground: Matrix = {
    matrix: [[]],
    min: 0,
    max: 15
}

    function displayMatrix(){
        for (var i = 0; i < ground.max; i++){
            for (var j = 0; j < ground.max; j++ ){
              if (i == field.coordinate.x || j == field.coordinate.x || i == field.coordinate.y || j == field.coordinate.y){
                ground.matrix[i][j] = field.value
              }
              else{
                ground.matrix[i][j] = ' ' 
              }
            }
        }
    }
    console.log(ground.matrix)
    displayMatrix()