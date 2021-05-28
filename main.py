def on_forever():
    for index in range(4):
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.show_icon(IconNames.NO)
        basic.show_icon(IconNames.TSHIRT)
    basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)
