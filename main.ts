namespace SpriteKind {
    export const kdis = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    phsr = sprites.create(assets.image`phaser`, SpriteKind.Projectile)
    phsr.setPosition(ncc1701d.x, ncc1701d.y - 15)
    phsr.setVelocity(0, -90)
    phsr.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kdis, function (sprite, otherSprite) {
    sprite.setImage(assets.image`EnterpriseShield`)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    otherSprite.setImage(assets.image`KlingonBoom`)
    pause(100)
    otherSprite.setImage(assets.image`KlingonBoom0`)
    pause(100)
    otherSprite.setImage(assets.image`KlingonBoom1`)
    pause(100)
    sprite.setImage(assets.image`Enterprise`)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.setImage(assets.image`KlingonBoom`)
    pause(100)
    otherSprite.setImage(assets.image`KlingonBoom0`)
    pause(100)
    otherSprite.setImage(assets.image`KlingonBoom1`)
    pause(100)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setImage(assets.image`EnterpriseShield`)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    info.changeScoreBy(5)
    pause(300)
    sprite.setImage(assets.image`Enterprise`)
    otherSprite.destroy()
})
let disr: Sprite = null
let Klin: Sprite = null
let phsr: Sprite = null
let ncc1701d: Sprite = null
game.splash("The Enterprise is on Patrol!", "Defend against the Klingon marauders!!")
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
ncc1701d = sprites.create(assets.image`Enterprise`, SpriteKind.Player)
controller.moveSprite(ncc1701d)
ncc1701d.setStayInScreen(true)
info.setLife(10)
game.onUpdateInterval(750, function () {
    if (8 < randint(0, 10)) {
        Klin = sprites.create(assets.image`Klingon`, SpriteKind.Enemy)
        Klin.setPosition(randint(10, 110), 0)
        Klin.setVelocity(0, randint(50, 90))
        Klin.setFlag(SpriteFlag.AutoDestroy, true)
        pause(100 * randint(1, 4))
        disr = sprites.create(assets.image`disruptor`, SpriteKind.kdis)
        disr.setPosition(Klin.x, Klin.y)
        disr.setVelocity(0, 200)
        disr.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
