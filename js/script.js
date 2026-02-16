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

	
	class Leaf {
		constructor() {
			this.reset();
		}

		reset() {
			this.x = Math.random() * canvas.width;
			this.Vx = 0;
			this.y = -500 * Math.random();
			this.Vy = 0;
			this.size = 10 + Math.random() * 10;
			this.angle = Math.random() * Math.PI * 2;
			this.t = Math.random();
			this.vDescente = 0.05 + Math.random() * 0.1;
			this.largeur = 10.0 * Math.random() + 3;
			this.depHorizontal = 0.0;
			this.alpha = -1.0;
		}

		update() {
			this.Vy = this.vDescente * this.t + this.alpha * Math.cos(2 * this.t);
			this.Vx = 0.5 * this.largeur * Math.sin(this.t) + this.depHorizontal * 1 * this.t;
			this.y += this.Vy;
			this.x += this.Vx;
			this.xPrime = (this.depHorizontal + this.largeur * Math.cos(this.t))
			this.angle = 0.9 * this.angle + 0.1 * ((this.vDescente - 2 * this.alpha * Math.sin(2 * this.t)) / this.xPrime );
			// this.angle = (this.vDescente - 2 * this.alpha * Math.sin(2 * this.t)) / this.xPrime;
			// this.angle = (Math.PI * Math.cos(this.x / Math.sqrt(this.x * this.x + this.y * this.y))) / 180;
			// if (this.Vx < -0.025 &&  0.025 < this.Vx) {
			// 	this.angle = Math.tan(this.Vy/this.Vx);
			// }
			this.t += 0.04;
		}

		draw() {
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle + Math.PI / 2);

			ctx.fillStyle = "#e980a1";
			ctx.beginPath();
			ctx.ellipse(0, 0, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
			console.log(this.xPrime);
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
	for (let i = 0; i < 30; i++) {
		leaves.push(new Leaf());
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		leaves.forEach(leaf => {
			leaf.update();
			leaf.draw();
		});


		requestAnimationFrame(animate); // performance.now
	}

	animate();


});

