var rumiru, rumiru_animation;
var path, pathImg;

function perload() {
  rumiru_animation = loadImage("th.jpg");
  pathImg = loadImage("th (1).jpg");
}

function setup() {
  createCanvas(800, 400);

  rumiru = createSprite(50, 30, 150, 200);
  rumiru.addImage(rumiru_animation)
  // rumiru.scale = 0.08;

  // path = createSprite(200, 195, 600, 10);
  // path.addImage("ground", pathImg);
  // path.scale = 1.2;
  // path.velocityY = 5;

  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  drawSprites();

  rumiru.x = World.mouseX;

  edges = createEdgeSprites();
  rumiru.collide(edges[3]);
  rumiru.collide(leftBoundary);
  rumiru.collide(rightBoundary);
}
