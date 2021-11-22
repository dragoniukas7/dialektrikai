////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 2                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// This example shows how to use sliderRange(min, max, step)
// to adjust the range and step size for sliders

var konstanta = 8.85 / 1000000000000;

// seed color and alpha
var bgColor = [220, 220, 220];

// inital number of seeds
var seeds = 0;

// angle (phi)
var atstumas = 10;

// radius of the seed
var plotas = 3;

var medziaga = ['Vakuumas', 'Oras', 'Organinis stiklas', 'Kartonas', 'Sausas medis', 'Stiklas', 'Ebonitas', 'Getinaksas', 'Polichlorvinilas', 'Gintaras', 'Tekstolitas', 'Ftoroplastas'];

var skvarba  = 0;

// the gui object
var gui;

function setup() {

  // all angles in degrees (0 .. 360)
  angleMode(DEGREES);

  // create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  ////////////////////////////////////////////////////////////////////////////////
  // This is where the magic happens ...

  // create the GUI
  gui = createGui('Kondensatorius');

  // set slider range for seeds
  sliderRange(0, 1, 0.001);
  gui.addGlobals('seeds');

  // set slider range for angle
  sliderRange(0, 20, 0.1);
  gui.addGlobals('atstumas');

  // set slider range for radius
  sliderRange(0, 100, 0.1);
  gui.addGlobals('plotas', 'seedColor');
  
  gui.addGlobals('medziaga');

  sliderRange(1, 20, 0.1);
  gui.addGlobals('skvarba');

  ////////////////////////////////////////////////////////////////////////////////

  // only call draw when then gui is changed
  noLoop();

}


function draw() {

  // hello darkness my old friend
  background(bgColor);

  // let the seeds be filleth
  fill(0,0,0);
  //stroke(0, opacity);


  push();

  // go to the center of the sunflower
  translate(width/2, height/2);



  var posx  = -200;
  var posy  = 0;


rect(posx - atstumas, 20 - plotas / 2, 5, 50 + plotas)
rect(posx - 20 - atstumas, 43, 20, 5)

rect( posx +10 + atstumas, 20  - plotas / 2, 5, 50 + plotas)
rect(posx + 15 + atstumas, 43, 20, 5 )




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



  switch(medziaga) {

            case 'Vakuumas':
		    skvarba = 1;
		    break;
		    
		    case 'Oras':
		    skvarba = 1.00058;
		    break;
		    
		    case 'Organinis stiklas':
		    skvarba = 3.25;
		    break;
		    
		    case 'Kartonas':
		    skvarba = 2.5;
		    break;
		    
		    case 'Sausas medis':
		    skvarba = 5;
		    break;
		    
		    case 'Stiklas':
		    skvarba = 9.5;
		    break;
		    
		    case 'Ebonitas':
		    skvarba = 2.75
		    break;
		    
		    case 'Getinaksas':
		    skvarba = 5.5;
		    break;
		    
		    case 'Polichlorvinilas':
		    skvarba = 3.55;
		    break;
		    
		    case 'Gintaras':
		    skvarba = 4.4;
		    break;
		    
		    case 'Tekstolitas':
		    skvarba = 4.25;
		    break;
		    
		    case 'Ftoroplastas':
		    skvarba = 2.6;
		    break;

		  
		}
  
  
  var talpa = (konstanta * skvarba * plotas / atstumas) * Math.pow(10,9) ;
  
  textSize(30);
textAlign(RIGHT);
  text(talpa.toFixed(4) + ' nF',  posx + 300, 80-posy);
  pop();

}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}