export function AnimationDiscoBall(size: number) {
  const radius = size / 2;
  const squareSize = size / 18;
  const prec = 19.55;
  const fuzzy = 0.001;
  const inc = (Math.PI - fuzzy) / prec;

  const discoBall = document.getElementById("discoBall");

  if (discoBall) {
    discoBall.innerHTML = "";

    for (let t = fuzzy; t < Math.PI; t += inc) {
      const z = radius * Math.cos(t);

      const currentRadius =
        Math.abs(
          radius * Math.cos(0) * Math.sin(t) -
            radius * Math.cos(Math.PI) * Math.sin(t),
        ) / 2.5;

      const circumference = Math.abs(2 * Math.PI * currentRadius);

      const squaresThatFit = Math.floor(circumference / squareSize);

      const angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;

      for (let i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
        const square = document.createElement("div");
        const squareTile = document.createElement("div");

        squareTile.style.width = squareSize + "px";
        squareTile.style.height = squareSize + "px";
        squareTile.style.transformOrigin = "center center";
        squareTile.style.backgroundColor = randomColor();
        squareTile.style.animation = "reflect 2s linear infinite";
        squareTile.style.animationDelay =
          String(randomNumber(0, 20) / 10) + "s";
        squareTile.style.backfaceVisibility = "hidden";

        const x = radius * Math.cos(i) * Math.sin(t);
        const y = radius * Math.sin(i) * Math.sin(t);

        square.style.position = "absolute";
        square.style.left = "50%";
        square.style.top = "50%";
        square.style.transform =
          "translate(-50%, -50%) translateX(" +
          x +
          "px) translateY(" +
          y +
          "px) translateZ(" +
          z +
          "px)";
        square.style.transformOrigin = "center center";

        squareTile.style.transform =
          "rotate(" + i + "rad) rotateY(" + t + "rad)";

        square.appendChild(squareTile);
        square.className = "square";

        discoBall.appendChild(square);
      }
    }
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomColor() {
    const colors = [
      "rgba(127,141,182,255)",
      "rgba(175,205,241,255)",
      "rgb(255,232,254)", // pink
      "rgba(127,141,182,255)",
      "rgba(175,205,241,255)",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
