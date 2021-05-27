let degree = 0
basic.forever(function () {
    degree = input.compassHeading()
    if (degree < 23) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (degree < 68) {
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
    } else if (degree < 113) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (degree < 158) {
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
    } else if (degree < 203) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (degree < 248) {
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
    } else if (degree < 293) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (degree < 338) {
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    } else {
        images.arrowImage(ArrowNames.North).showImage(0)
    }
})
