let N1 = 0
let OP = 0
let N2 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (N1))
    basic.pause(500)
    if (OP == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (OP == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (OP == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
    basic.pause(500)
    basic.showString("" + (N2))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    if (OP == 1) {
        basic.showString("" + (N1 + N2))
    }
    if (OP == 2) {
        basic.showString("" + (N1 - N2))
    }
    if (OP == 3) {
        basic.showString("" + (N1 * N2))
    }
    if (OP == 4) {
        basic.showString("" + (N1 / N2))
    }
})
input.onButtonPressed(Button.A, function () {
    N1 += 1
    basic.pause(100)
    basic.showString("" + (N1))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    basic.pause(500)
    N1 = 0
    N1 = 0
    OP = 0
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 5) {
        OP = 1
    }
    if (OP == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    if (OP == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    if (OP == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
    if (OP == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    N2 += 1
    basic.pause(100)
    basic.showString("" + (N2))
})
