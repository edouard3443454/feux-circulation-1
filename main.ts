input.onButtonPressed(Button.A, function () {
    a = 1
})
let a = 0
a = 0
basic.forever(function () {
    if (a == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(2000)
        a = 0
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
