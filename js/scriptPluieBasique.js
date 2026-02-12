document.addEventListener("DOMContentLoaded", () => {

	// Pour l'animation :

	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d", { alpha: true });

	// Permet de réajuster la taille du canva lorsque l'utilisateur change sa taille.

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	window.addEventListener("resize", resizeCanvas);
	resizeCanvas();


	ctx.fillStyle = "red"; // STUB

	ctx.fillRect(500, 500, 150, 100);

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	
	class Leaf {
		constructor() {
			this.reset();
		}

		reset() {
			this.x = Math.random() * canvas.width;
			this.y = -500 * Math.random();
			this.size = 20 + Math.random() * 20;
			this.speedY = 1 + Math.random() * 2;
			this.angle = Math.random() * Math.PI * 2;
			this.rotationSpeed = (Math.random() - 0.5) * 0.05;
			this.swing = Math.random() * 2 + 1;
			this.swingSpeed = Math.random() * 0.02 + 0.01;
		}

		update() {
			this.y += this.speedY;
			this.angle += this.rotationSpeed;
			this.x += Math.sin(this.y * this.swingSpeed) * this.swing;

			// if (this.y > canvas.height + 50) {
			// 	this.reset();
			// }
		}

		draw() {
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle);

			ctx.fillStyle = "#e980a1";
			ctx.beginPath();
			ctx.ellipse(0, 0, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
			ctx.fill();

			ctx.restore();
		}
	}

	document.addEventListener("click", (e) => {
		const rect = canvas.getBoundingClientRect();
		const scaleX = canvas.width / rect.width;
		const scaleY = canvas.height / rect.height;

		const x = (e.clientX - rect.left) * scaleX;
		const y = (e.clientY - rect.top) * scaleY;

		leaves.push(new Leaf());
  	});

	const leaves = [];
	for (let i = 0; i < 15; i++) {
		leaves.push(new Leaf());
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		leaves.forEach(leaf => {
			leaf.update();
			leaf.draw();
		});

		requestAnimationFrame(animate);
	}

	animate();


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

