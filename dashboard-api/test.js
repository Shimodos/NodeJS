//Enam
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
function move(direction) {
    switch (direction) {
        case 'left':
            return -1;
        case 'right':
            return 1;
        case 'up':
            return -1;
        case 'down':
            return 1;
    }
}
function objMod(odj) {
    return (odj.Left = 1);
}
objMod(Direction);
var myDirection = 0 /* Direction2.Left */;
