let pencacah = 10
basic.forever(function () {
    if (pencacah >= 1) {
        basic.showNumber(pencacah)
        pencacah += -1
        basic.pause(500)
    } else {
        pencacah = 10
    }
})
