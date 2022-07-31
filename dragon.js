class Dragon{
    constructor(){
        background(bgImg)
        spaceShip.remove()

        spaceShip2 = createSprite(250, 70, 50, 50)
        spaceShip2.addImage(spaceShipImg)
        spaceShip2.scale = 0.3

        eject = createImg("./assets/Eject.png")
        eject.position(10, 200, 100, 100)
        eject.size(140,90)
        eject.mousePressed(this.ejectFunc)
    }   

    ejectFunc(){
        
    }
}