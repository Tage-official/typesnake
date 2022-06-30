interface Matrix {
  matrix: string[][];
  min: number;
  max: number;
}

interface Environment {
  value: EnvironmentField[];
}

interface EnvironmentField {
  value: string;
  coordinate: Point;
}

interface Point {
  x: number;
  y: number;
}

interface Snake {
  head: SnakeBody;
  body: SnakeBody[];
}

interface SnakeBody {
  value: string;
  coordinate: Point;
}

let snake: Snake = {
  head: {
    value: "@",
    coordinate: {
      x: 8,
      y: 8,
    },
  },
  body: [
    {
      value: "@",
      coordinate: {
        x: 9,
        y: 8,
      },
    },
    {
      value: "@",
      coordinate: {
        x: 10,
        y: 8,
      },
    },
  ],
};

let ground: Matrix = {
  matrix: [[]],
  min: 0,
  max: 16,
};
const lvl1: Environment = {
  value: [
    {
      value: "#",
      coordinate: {
        x: 1,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 2,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 3,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 4,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 5,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 6,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 7,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 8,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 9,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 10,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 11,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 12,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 13,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 14,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 0,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 1,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 2,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 3,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 4,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 5,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 6,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 7,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 8,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 9,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 10,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 11,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 12,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 13,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 14,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 15,
      },
    },
  ],
};

function displayMatrix() {
  let x = Array(ground.max);
  for (let i = 0; i < x.length; i += 1) {
    x[i] = Array(ground.max);
  }
  ground.matrix = x;
}

function addEnvironmentToMatrix() {}

displayMatrix();
console.log(ground.matrix);
