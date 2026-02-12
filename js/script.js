document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  document.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;


	function longueur(v) {
		return Math.hypot(v.x, v.y);
	}

	function angle(v) {
		return Math.atan2(v.y, v.x);
	}

	const axe = { x: 100, y: 30 };


	ctx.fillStyle = "#e980a1";

	ctx.beginPath();
	ctx.ellipse(
	200,
	150,
	longueur(axe),
	40,                  // autre rayon
	angle(axe),          // orientation issue du vecteur
	0,
	2 * Math.PI
	);
	ctx.stroke();
  });

	// Pour dessein libre
	// function draw() {
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// 	ctx.beginPath();
	// 	ctx.arc(x, 100, 30, 0, Math.PI * 2);
	// 	ctx.fillStyle = "red";
	// 	ctx.fill();

	// 	x += 2;
	// 	requestAnimationFrame(draw);
	// }

	// let x = 0;
	// draw();

	// let drawing = false;

	// canvas.addEventListener("mousedown", () => drawing = true);
	// canvas.addEventListener("mouseup", () => drawing = false);
	// canvas.addEventListener("mousemove", (e) => {
	// 	if (!drawing) return;

	// 	ctx.lineWidth = 5;
	// 	ctx.lineCap = "round";
	// 	ctx.strokeStyle = "black";

	// 	ctx.lineTo(e.clientX, e.clientY);
	// 	ctx.stroke();
	// 	ctx.beginPath();
	// 	ctx.moveTo(e.clientX, e.clientY);
	// });
});
