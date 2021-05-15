let degree = 0
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 45) {
        basic.showString("N")
    } else if (degree < 135) {
        basic.showString("E")
    } else if (degree < 255) {
        basic.showString("S")
    } else if (degree < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
