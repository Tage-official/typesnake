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
    x: number;
    y: number
}

interface Point {
    x: number;
    y: number
}
