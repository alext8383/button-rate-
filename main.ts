controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
let mySprite = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffaaaaaffffffffff11111111111ffffffffffaaaaafffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111fffffffffffffffffff11111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111fffffffffffffffffff11111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111fffffffffffffffffff11111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111fffffffffffffffffff11111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111fffffffffffffffffff11111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffaaaaaffffffffff44444ffffffffffaaaaaffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffaaaaaffffffffff44444ffffffffffaaaaaffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffaaaaaffffffffff44444ffffffffffaaaaaffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffaaaaaffffffffff44444ffffffffffaaaaaffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffaaaaaffffffffff44444ffffffffffaaaaaffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffaaaaafffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaafffffaaaaaffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffaaaaafffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
mySprite.setPosition(77, 21)
game.splash("Press A(on the arcade just move your cursor there and left-click) or space key(on your keyboard in the middle bottom P.S the key with nothing on it)  for six seconds")
pause(6000)
let minuteScore = (info.score() - 1) * 10
mySprite.say(minuteScore)
