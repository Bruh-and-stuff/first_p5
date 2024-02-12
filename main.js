function setup(){
    myCanvas = createCanvas(500, 500)

    cam = createCapture(VIDEO)
    cam.hide()
}

function draw(){
    background("lightblue")
    rect(75, 75, 350, 350, 10)
    image(cam, 100, 100, 300, 300)
    circle(75, 75, 100)
    circle(425, 75, 100)
    circle(425, 425, 100)
    circle(75, 425, 100)
}

function takeSnapShot(){
    save("picture.png")
}