input.onButtonPressed(Button.A, function () {
    a = 1
})
let a = 0
a = 0
basic.forever(function () {
    if (a == 1) {
        a = 0
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
