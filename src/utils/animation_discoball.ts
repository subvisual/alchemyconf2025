export function AnimationDiscoBall() {
  var t = 1;
  var radius = 50;
  var squareSize = 7.5;
  var prec = 19.55;
  var fuzzy = 0.001;
  var inc = (Math.PI - fuzzy) / prec;
  var discoBall = document.getElementById("discoBall");

  if (discoBall) {
    for (var t = fuzzy; t < Math.PI; t += inc) {
      var z = radius * Math.cos(t);
      var currentRadius =
        Math.abs(
          radius * Math.cos(0) * Math.sin(t) -
            radius * Math.cos(Math.PI) * Math.sin(t),
        ) / 2.5;
      var circumference = Math.abs(2 * Math.PI * currentRadius);
      var squaresThatFit = Math.floor(circumference / squareSize);
      var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
      for (var i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
        var square = document.createElement("div");
        var squareTile = document.createElement("div");
        squareTile.style.width = squareSize + "px";
        squareTile.style.height = squareSize + "px";
        squareTile.style.transformOrigin = "0 0 0";
        squareTile.style.transform =
          "rotate(" + i + "rad) rotateY(" + t + "rad)";
        squareTile.style.backgroundColor = randomColor();
        square.appendChild(squareTile);
        square.className = "square";
        squareTile.style.animation = "reflect 2s linear infinite";
        squareTile.style.animationDelay =
          String(randomNumber(0, 20) / 10) + "s";
        squareTile.style.backfaceVisibility = "hidden";
        var x = radius * Math.cos(i) * Math.sin(t);
        var y = radius * Math.sin(i) * Math.sin(t);
        square.style.transform =
          "translateX(" +
          Math.ceil(x) +
          "px) translateY(" +
          y +
          "px) translateZ(" +
          z +
          "px)";
        discoBall.appendChild(square);
      }
    }
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomColor() {
    const colors = [
      "rgba(186,110,189,255)",
      "rgba(225,184,206,255)",
      "rgba(199,198,209,255)",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
