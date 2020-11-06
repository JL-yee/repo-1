input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(randint(0, 9))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
