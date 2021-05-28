let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 3)
})
basic.forever(function () {
    if (numero == 1) {
        basic.showIcon(IconNames.Square)
    } else if (numero == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
