let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffe5d9'); // 設定背景顏色

  // 產生 40 個圓的初始資料
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(30, 100), // 隨機大小
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background('#ffe5d9'); // 每次重繪背景

  // 計算滑鼠影響的大小變化
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset); // 圓的大小隨滑鼠移動變化
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
