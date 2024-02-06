let img;
let filtro;
let a = [], b = [], g = [], c = [], d = [], e = [], f = [];


function preload() {
  
  filtro = loadImage("img/filtro.png");
  img = loadImage("img/fondo.png");

  for (let i = 0; i < 3; i++) {
    let ind = i + 1;
    a[i] = loadImage(`img/a${ind}.png`);
    b[i] = loadImage(`img/b${ind}.png`);
    c[i] = loadImage(`img/c${ind}.png`);
    d[i] = loadImage(`img/d${ind}.png`);
    e[i] = loadImage(`img/e${ind}.png`);
    f[i] = loadImage(`img/f${ind}.png`);
    g[i] = loadImage(`img/g${ind}.png`);
  }
}

function setup() {
  createCanvas(3000, 3000);
  //createCanvas(1706 * 2, 764 * 2);
  //createCanvas(1080, 1080);
  noiseSeed(random(1000));
  generate();
  
}

function draw() {
  }

function generate() {
  background(img);
  
  generarDibujoImagen1();
  generarDibujoImagen2();
  image(filtro, 1500, 1500, width, height);
  noFill();
  stroke(255, 255, 255);
  strokeWeight(100);
  //rect(0, 0, 1080, 1080);
  
  
  
 }

function generarDibujoImagen1() {
  
  imageMode(CENTER);
  let det = random(0.01);
  let des = random(10);
  let op = random(3);
  let fon = random(500);

  for (let i = 0; i < random(600, 2000); i++) {
    let x = random(width);
    let y = random(height);
    let n = noise(x * det / des, y * det * op, fon);
    let rnd = floor(random(op));
    let sca = random(2.95, 4.85) * random(0.15);
    let ang = random(TWO_PI);
    let swd = random(1);
    let img = 0;

    if (n > 0.35 && n < 0.4) img = 1;
    if (n > 0.4 && n < 0.45) img = 2;
    if (n > 0.45 && n < 0.5) img = 3;
    if (n > 0.5 && n < 0.55) img = 4;
    if (n > 0.55 && n < 0.6) img = 5;
    if (n >= 0.6) img = 6;

    let imagen2 = getImagenByIndex(img, rnd);

    push();
    translate(x, y);
    rotate(ang);
    image(imagen2, 0, 0, imagen2.width * sca, imagen2.height * sca);
    pop();
  }
}

function generarDibujoImagen2() {
  imageMode(CENTER);
  let fit = random(0.01);
  let sed = random(10);
  let po = random(3);
  let nof = random(500);

  for (let i = 0; i < random(18, 50); i++) {
    let x = random(width);
    let y = random(height);
    let n = noise(x * fit / sed, y * fit * po, nof);
    let rnd = floor(random(po));
    let sca = random(3.3, 1.8) * random(0.45);
    let ang = random(-QUARTER_PI + 0.5, QUARTER_PI - 0.5);
    let swd = random(1);
    let img = 0;

    if (n > 0.35 && n < 0.4) img = 5;
    if (n > 0.4 && n < 0.45) img = 3;
    if (n > 0.45 && n < 0.5) img = 6;
    if (n > 0.5 && n < 0.55) img = 2;
    if (n > 0.55 && n < 0.6) img = 1;
    if (n >= 0.6) img = 4;

    let imagen2 = getImagenByIndex(img, rnd);

    push();
    translate(x, y);
    rotate(ang);
    image(imagen2, 0, 0, imagen2.width * sca, imagen2.height * sca);
    pop();
  }
}


function getImagenByIndex(imgIndex, rndIndex) {
  let imagen;
  switch (imgIndex) {
    case 1:
      imagen = a[rndIndex];
      break;
    case 2:
      imagen = b[rndIndex];
      break;
    case 3:
      imagen = c[rndIndex];
      break;
    case 4:
      imagen = f[rndIndex];
      break;
    case 5:
      imagen = g[rndIndex];
      break;
    case 6:
      imagen = d[rndIndex];
      break;
    default:
      imagen = e[rndIndex];
      break;
  }
  return imagen;
  
}