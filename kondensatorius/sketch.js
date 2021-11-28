////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 2                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// This example shows how to use sliderRange(min, max, step)
// to adjust the range and step size for sliders



var konstanta = 8.85 * Math.pow(10, -12);


var bgColor = [220, 220, 220];


// angle (phi)
var atstumas = 10;

var dielektrikoStoris = 1;

// radius of the seed
var plotas = 3;

var medziaga = ['Pasirinktinis', 'Oras', 'Organinis stiklas', 'Kartonas', 'Sausas medis', 'Stiklas', 'Ebonitas', 'Getinaksas', 'Polichlorvinilas', 'Gintaras', 'Tekstolitas', 'Ftoroplastas'];

var skvarba  = 0;
var pasirinktinėSkvarba  = 1;
var dydis = 1;

// the gui object
var gui;

let myFont;
function preload() {
  myFont = loadFont('https://fonts.cdnfonts.com/s/14478/BasisGrotesquePro-Regular.woff');
  		  img = loadImage('./wood.jpg');
  		  imgGlass = loadImage('./glass.jpg');
  		  imgCardboard = loadImage('./cardboard.jpg');
  		  imgEbonite = loadImage('./ebonite.jpg');
  		  imgGetinax = loadImage('./getinax.jpg');
  		  imgPvc = loadImage('./pvc.jpg');
  		  imgAmber = loadImage('./amber.jpg');
  		  imgTextolite = loadImage('./textolite.jpg');
  		  imgPtfe = loadImage('./ptfe.jpg');


}

function setup() {


  // all angles in degrees (0 .. 360)
  angleMode(DEGREES);

  // create a canvas that fills the window
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  textFont(myFont);

  ////////////////////////////////////////////////////////////////////////////////
  // This is where the magic happens ...

  // create the GUI
  gui = createGui('Kondensatorius');

  // set slider range for angle
  sliderRange(4, 30, 0.1);
  gui.addGlobals('atstumas');

  // set slider range for radius
  sliderRange(1, 100, 0.1);
  gui.addGlobals('plotas');
  
    sliderRange(0.1, 4, 0.1);
  gui.addGlobals('dielektrikoStoris');
  
  gui.addGlobals('medziaga');

  sliderRange(1, 20, 0.1);
  gui.addGlobals('pasirinktinėSkvarba');
  
    sliderRange(0.1, 3, 0.1);
  gui.addGlobals('dydis');

  ////////////////////////////////////////////////////////////////////////////////

  // only call draw when then gui is changed
  noLoop();

}


function draw() {


  // hello darkness my old friend
  background(bgColor);

  // let the seeds be filleth
  fill(0,0,0);
scale(dydis);








  push();

  //translate(width/2, height/2);
  



  var posx  = -200;
  var posy  = 0;


rect(posx - atstumas, 20 - plotas / 2, 5, 50 + plotas)
rect(posx - 20 - atstumas, 43, 20, 6)

rect( posx +10 + atstumas, 20  - plotas / 2, 5, 50 + plotas)
rect(posx + 15 + atstumas, 43, 20, 6 )




  c = color(125, 125, 125);
  fill(c);
  
  posx  = 200;
  posy  = 250;
  
  rect(posx + 30, 20 - posy, 300, 500, 20);
  
  c = color(255, 255, 255);
  fill(c);
  rect( posx +50, 40 - posy, 260, 60, 5);
  
  c = color(255, 0, 0);
  fill(c);
  circle( posx +300, 480 - posy, 30);
  
  c = color(0, 0, 0);
  fill(c);
  circle( posx +300, 440 - posy, 30);
  
  c = color(155);
  fill(c);
  circle( posx +180, 275 - posy, 260);

  line(posx +100, 375 - posy, posx +245, 165 - posy);
  line(posx +125, 390 - posy, posx +270, 180 - posy);

  triangle(posx +250, 184- posy, posx +230, 230 - posy, posx +215, 217 - posy);
  c = color(0);
  fill(c);
  textSize(20);
  textAlign(RIGHT);
  text( 'nF',  posx + 290, 160-posy);
  
  
  //raudonas laidas
  strokeWeight(6);
  stroke(255, 0, 0);

  line(posx +300, 480 - posy, posx +350, 480 - posy);
  line(posx +350, 480 - posy, posx +350, 530 - posy);
  line(posx +350, 530 - posy, posx -200, 530 - posy);
  line(posx -200, 530 - posy, posx -200, 296 - posy);
  line(posx -200, 296 - posy, posx -365 + atstumas, 296 - posy);
  
  //juodas laidas
  strokeWeight(6);
  stroke(0, 0, 0);

  line(posx +300, 440 - posy, posx +370, 440 - posy);
  line(posx +370, 440 - posy, posx +370, 550 - posy);
  line(posx +370, 550 - posy, posx -550, 550 - posy);
  line(posx -550, 550 - posy, posx -550, 296 - posy);
  line(posx -550, 296 - posy, posx -420 - atstumas, 296 - posy);


  switch(medziaga) {

            case 'Pasirinktinis':
		    skvarba = pasirinktinėSkvarba;
		    break;
		    
		    case 'Oras':
		    skvarba = 1.00058;
		    c = color(190, 240, 255);
            fill(c);
		    break;
		    
		    case 'Organinis stiklas':
		    skvarba = 3.25;
		    texture(imgGlass);

		    break;
		    
		    case 'Kartonas':
		    skvarba = 2.5;
		    texture(imgCardboard);
		    break;
		    
		    case 'Sausas medis':
		    skvarba = 5;
		    texture(img);
		    break;
		    
		    case 'Stiklas':
		    skvarba = 9.5;
		    texture(imgGlass);
		    break;
		    
		    case 'Ebonitas':
		    skvarba = 2.75
		    texture(imgEbonite);
		    break;
		    
		    case 'Getinaksas':
		    skvarba = 5.5;
		    texture(imgGetinax);
		    break;
		    
		    case 'Polichlorvinilas':
		    skvarba = 3.55;
		    texture(imgPvc);
		    break;
		    
		    case 'Gintaras':
		    skvarba = 4.4;
		    texture(imgAmber);
		    break;
		    
		    case 'Tekstolitas':
		    skvarba = 4.25;
		    texture(imgTextolite);
		    break;
		    
		    case 'Ftoroplastas':
		    skvarba = 2.6;
		    texture(imgPtfe);
		    break;

		  
		}
		

    
    noStroke();

	rect( -197 - dielektrikoStoris/4 ,-30, 9 + dielektrikoStoris/2, 150 );

  
  c = color(0, 0, 0);
    fill(c);
    
    
    //formule
  var c1 = ((konstanta * 1.00058 * plotas) / ( atstumas - dielektrikoStoris)) ;
  var c2 = ((konstanta * skvarba * plotas) / ( dielektrikoStoris)) ;
  
  var talpa = ((c1*c2)/(c1+c2))   * Math.pow(10, 9);

  
  textSize(30);
textAlign(RIGHT);
stroke(250, 250, 250);
  text(talpa.toFixed(4) + ' nF',  posx + 300, 80-posy);
  pop();
  
  
    //parametru atvaizdavimas
  textSize(24);
  textAlign(RIGHT);
  //stroke(250, 250, 250);
  text('Atstumas: ' + atstumas + ' mm',  -250, -300);
  text('Plotas: ' + plotas + ' mm²',  -250, -270);
  text('Dielektrinė skvarba: ' + skvarba,  -250, -240);
  text('Dielektriko storis: ' + dielektrikoStoris + " mm",  -250, -210);



}



// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}