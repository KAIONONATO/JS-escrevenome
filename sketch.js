
let cor


function setup() {
  createCanvas(500, 500);
  background("rgb(32,93,102)");
  cor=color (100, 50, 200);
  
  
}

function draw() {
  
  circle (250,250,30);
  stroke("rgb(46,25,87)");
  fill("cor");
  
 
  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 15, 15);
   
    
    
  }
  
}

