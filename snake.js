var max = 15;
var min = 0;
var head = {
    value: '@',
    x: 8,
    y: 8
};
var body = {
    value: '=',
    x: 8,
    y: 8
};
var food = {
    x: Math.floor(Math.random() * (max - min) + min),
    y: Math.floor(Math.random() * (max - min) + min)
};
