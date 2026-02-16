document.addEventListener("DOMContentLoaded", () => {
	const bouton = document.getElementById("btnEnvoyer"); // Récupère le bouton

	function isEmailValide(monEmail) {			// Test validité mail 
	// La 1ère étape consiste à définir l'expression régulière d'une adresse email
	var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

	return regEmail.test(monEmail);	// REnvoit true ou false en fonction si l'adresse email est OK
}
	function isNumeroValide(numero) {			// Test validité numero
	// La 1ère étape consiste à définir l'expression régulière d'un numero de tel
	var regNumero = new RegExp('^[0-9]','i');

	return regNumero.test(numero);	// Renvoit true ou false en fonction si le numero est OK
}


	var divEntreprise = document.getElementById("idEntreprise");
	var inputEntreprise = document.getElementById("inputEntreprise");
		
	function entrepriseCheck() { // fonction qui permet le changement de couleur de la bordure
		var b;
		divEntreprise.classList.remove("texteRouge", "texteNoir");
		b=(inputEntreprise.value.trim() !== "");
		if (b) {
			divEntreprise.classList.add("texteNoir");
		} else {
			divEntreprise.classList.add("texteRouge");
		}
		return b;
	}

	inputEntreprise.addEventListener("input", () => {
		entrepriseCheck();
	});


	var divNom = document.getElementById("idNom");
	var inputNom = document.getElementById("inputNom");
		
	function nomCheck() { // fonction qui permet le changement de couleur de la bordure
		var b;
		divNom.classList.remove("texteRouge", "texteNoir");
		b=(inputNom.value.trim() !== "");
		if (b) {
			divNom.classList.add("texteNoir");
		} else {
			divNom.classList.add("texteRouge");
		}
		return b;
	}


	inputNom.addEventListener("input", () => {
		nomCheck();
	});

	var divPrenom = document.getElementById("idPrenom");
	var inputPrenom = document.getElementById("inputPrenom");
		
	function prenomCheck() { // fonction qui permet le changement de couleur de la bordure
		var b;
		divPrenom.classList.remove("texteRouge", "texteNoir");
		b=(inputPrenom.value.trim() !== "");
		if (b) {
			divPrenom.classList.add("texteNoir");
		} else {
			divPrenom.classList.add("texteRouge");
		}
		return b;
	}

	inputPrenom.addEventListener("input", () => {
		prenomCheck();
	});


	var divEmail = document.getElementById("idEmail");
	var inputEmail = document.getElementById("inputEmail");
		
	function emailCheck() { // fonction qui permet le changement de couleur de la bordure
		var b;
		divEmail.classList.remove("texteRouge", "texteNoir");
		b=(isEmailValide(inputEmail.value));
		if (b) {
			divEmail.classList.add("texteNoir");
		} else {
			divEmail.classList.add("texteRouge");
		}
		return b;
	}

	inputEmail.addEventListener("input", () => {
		emailCheck();
	});


	var divNumero = document.getElementById("idNumero");
	var inputNumero = document.getElementById("inputNumero");
		
	function numeroCheck() { // fonction qui permet le changement de couleur de la bordure
		var b;
		divNumero.classList.remove("texteRouge", "texteNoir");
		b=(isNumeroValide(inputNumero.value));
		if (b) {
			divNumero.classList.add("texteNoir");
		} else {
			divNumero.classList.add("texteRouge");
		}
		return b;
	}

	inputNumero.addEventListener("input", () => {
		numeroCheck();
	});

	var consigneCB = document.getElementById("consigneCB");
	var CBsamedi = document.getElementById("CBsamedi");
	var CBdimanche = document.getElementById("CBdimanche");
		
	function CBCheck() { // fonction qui permet le changement de couleur de la bordure
		var b;
		consigneCB.classList.remove("texteRouge", "texteNoir");
		b=(CBsamedi.checked || CBdimanche.checked);
		if (b) {
			consigneCB.classList.add("texteNoir");
		} else {
			consigneCB.classList.add("texteRouge");
		}
		return b;
	}

	CBsamedi.addEventListener("change", () => {
		CBCheck();
	});
	CBdimanche.addEventListener("change", () => {
		CBCheck();
	});


	var form = bouton.closest("form");
	bouton.addEventListener("click", (event) => {
		event.preventDefault(); // Empeche l'envoie des réponse et de recharger la page.

        /* Appel des fonction pour mettre en rouge les consignes non respectée. */
        entrepriseCheck();
        nomCheck();
        prenomCheck();
        emailCheck();
        numeroCheck();
		CBCheck();

		var toutOk = entrepriseCheck() && nomCheck() && prenomCheck()
		           && emailCheck() && numeroCheck(); // Var de verification de toutes les reponces

		//Coloration verte des réponce valide : Cybersécuritée
		console.log(toutOk);
		if (toutOk) {
			form.submit();
			//window.location.assign("file:///C:\Users\jeuxl\Desktop\SAErb\formulaire\choixformulaire.html");
			// Redirection non fonctionnelle
		} else {
			alert("Vous avez mal remplis les questions écrites en rouge");
		}
		

	});

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


