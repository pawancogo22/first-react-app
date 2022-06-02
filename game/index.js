let ball_x, ball_y, ball_dx, ball_dy, paddle_dx;
let row, col;
let ok = false;
let lives;
let score;
let allRanges = [];
let notBeBrick = [];
let preBrick = []
function FindPoint(x1, y1, x2, y2, x, y) {
    if (x > x1 && x < x2 && y > y1 && y < y2)
        return true;
    return false;
}
function checkForNot(x, y) {
  let len = notBeBrick.length;
  for (let i = 0; i  < len; i++) {
    if (x == notBeBrick[i].x && y == notBeBrick[i].y) {
      return true;
    } return false;
  }
}
function setup() {
  createCanvas(400, 400);
  background("black")
  fill("white");
  ball_radius = 30;
  ball_x = width / 2 - ball_radius / 2 + 35 / 2;
  ball_y = height - ball_radius / 2 - 20;
  paddle_width = width / 2 - 35;
  paddle_height = height - 20;
  ball_dx = 1;
  ball_dy = -1;
  paddle_dx = 1;
  paddle_x = paddle_width;
  paddle_y = paddle_height;
  row = 4;
  col = 3;
  score = 0;
  lives = 3;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      obj  = {
          x : i * 80 + 50,
          y : j * 50 + 70,
          width: 50,
          height:30,
          hit : true,
        }
      preBrick.push(obj);
    }
  }
  console.log(preBrick)
}
function refereshAll() {
  ball_x = width / 2 - ball_radius / 2 + 35 / 2;
  ball_y = height - ball_radius / 2 - 20;
  paddle_width = width / 2 - 35;
  paddle_height = height - 20;
  ball_dx = 1;
  ball_dy = -1;
  paddle_dx = 1;
  paddle_x = paddle_width;
  paddle_y = paddle_height;
  
}
function findScore() {
  let x = 0;
  let len = preBrick.length;
  console.log("okkk", len)
  for (let i = 0; i < len; i++) {
    console.log(preBrick[i].width, preBrick[i].height);
    if (preBrick[i].width == 0 && preBrick[i].height == 0) {
      x++;
    }
  }
  score = x;
  console.log(x);
}
function draw() {
  background("black")
  circle(ball_x, ball_y, ball_radius);
  rect(paddle_x, paddle_y, 70, 20);
  text("Score", 40, 40);
  text(score, 90, 40);
  text("Lives", 290, 40);
  text(lives, 340, 40);
  let check = false;
  let k = 0;
  for (let i = 0; i < row; i++) {
    check = false;
    for (let j = 0; j < col; j++) {
      let drawBrick = FindPoint(i * 80 + 50, j * 50 + 70,i * 80 + 50 + 50, j * 50 + 70 + 30, ball_x, ball_y)
      if (!drawBrick)
          rect(preBrick[k].x, preBrick[k].y, preBrick[k].width, preBrick[k].height)
      else {
        preBrick[k].height = 0;
        preBrick[k].width = 0;
        if (preBrick[i].hit) {
          ball_dy = -ball_dy;
          ball_dx = -ball_dx;
          preBrick[i].hit = false;
        }
        
        findScore();
      }
      k++;
    }
  }
  
  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
  if (ball_x + ball_radius / 2 >= width) {
    ball_dx = -ball_dx;
  }
  if (ball_y - ball_radius / 2 <= 0) {
    ball_dy = -ball_dy;
  }
  if (ball_x - ball_radius / 2 <= 0) {
    ball_dx = -ball_dx;
  }
  if (ball_y + ball_radius / 2 >= height - 20) {
    ball_dy = -ball_dy;
  }
  if (keyIsDown(LEFT_ARROW) && paddle_x >= 0)  {
    paddle_x = paddle_x - 2;
  }
  if (keyIsDown(RIGHT_ARROW) && paddle_x <= width - 72)  {
    paddle_x = paddle_x + 2;
  }
  if (ball_y + ball_radius / 2 == height - 20) {
    if (ball_x >= paddle_x - 35 && ball_x <= paddle_x + 70) {
      console.log("Again Bonce");
      // score = score + 1;
      // console.log(ball_x, paddle_x);
    } else {
      console.log("You Loose");
      lives = lives - 1;
      refereshAll();
      // console.log(ball_x, paddle_x);
    }
  }
  if ((lives == 0 || score == 12) && !ok) {
    ball_dx = 0;
    ball_dy = 0;
    alert("Game is over");
    ok = true;
  }
}