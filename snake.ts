interface Matrix {
    matrix: string[][];
    min: number;
    max: number
}

interface Environment {
    value: EnvironmentField[]
}

interface EnvironmentField {
    value: '#';
    coordinates: Point
}

interface Point {
    x: number;
    y: number
}
