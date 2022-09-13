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

let ground: Matrix = {
  matrix: [[]],
  min: 0,
  max: 16,
};
const env: Environment = {
  value: [
    {
      value: "#",
      coordinate: {
        x: 0,
        y: 0,
      },
    },
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
    {
      value: "#",
      coordinate: {
        x: 1,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 2,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 3,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 4,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 5,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 6,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 7,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 8,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 9,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 10,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 11,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 12,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 13,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 14,
        y: 15,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 15,
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
        x: 15,
        y: 1,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 2,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 3,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 4,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 5,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 6,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 7,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 8,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 9,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 10,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 11,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 12,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 13,
      },
    },
    {
      value: "#",
      coordinate: {
        x: 15,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 14,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 13,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 12,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 11,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 10,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 9,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 8,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 7,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 6,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 5,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 4,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 3,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 2,
        y: 14,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 1,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 2,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 3,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 4,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 5,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 6,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 7,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 8,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 9,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 10,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 11,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 12,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 13,
      },
    },
    {
      value: " ",
      coordinate: {
        x: 1,
        y: 14,
      },
    },
  ],
};

function addEnvironmentFieldToMatrix() {
  for (let i = 0; i < env.value.length; i += 1) {
    ground.matrix[env.value[i].coordinate.x][env.value[i].coordinate.y] =
      env.value[i].value;
  }
  ground.matrix.forEach((item) => {
    let groundstr = item.toString().split(",").join(" ");
    console.log(groundstr);
  });
}

function createMatrix() {
  let x = Array(ground.max);
  for (let i = 0; i < x.length; i += 1) {
    x[i] = Array(ground.max);
  }
  ground.matrix = x;
}

createMatrix();
addEnvironmentFieldToMatrix();
