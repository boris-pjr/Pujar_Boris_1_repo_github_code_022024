// Ajout chemin pour les slides
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/////////////////////////// Étape 2 : Ajout des Event Listeners aux flèches ///////////////////////////
// Récupération des flèches gauche et droite
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
// Ajout d'un eventlistener sur la flèche gauche
leftArrow.addEventListener('click', () => {
	console.log('un clic sur la flèche gauche est effectué')
	clicSlide('clicGauche'); // Ajout de l'étape 4 : Appel de la fonction pour cibler la slide précédente
})
//// Ajout d'un eventlistener sur la flèche droite
rightArrow.addEventListener('click', () => {
	console.log('un clic sur la flèche droite est effectué')
	clicSlide('clicDroit'); // Ajout de l'étape 4 : Appel de la fonction pour cibler la slide suivante
})



/////////////////////////// Étape 3 : Ajout des bullet points au slider ///////////////////////////
const bulletPoints = document.querySelector('.dots'); // Récupération des bullet points sur la partie basse du slider
const allSlides = slides.length; // Récupération du nombre total de slide

for (let i = 0; i < allSlides; i++) { // boucle for qui permet de créer un point par image contenue dans le slider
	const spot = document.createElement('div') // Ajout de la div pour un point
	spot.classList.add('dot') // Ajout de la classe 'dot' pour la div et y applique le style

	if (i === 0) spot.classList.add('dot_selected') // Ajout de la class dot_selected signale que la slide en cours de visionnage est bien la première
	bulletPoints.appendChild(spot) // Ajoute du point à la slide qui lui correspond
}



/////////////////////////// Étape 4 et 5: Modification du slide au clic sur une flèche et défilement infini sur le carrousel  ///////////////////////////
let currentSlide = 0; // index - conservation de l'affichage de la première slide

// Fonction pour changer de diapositive, mettre à jour le texte, l'image et le bullet point actif
function clicSlide(target) {
    document.querySelectorAll('.dot')[currentSlide].classList.remove('dot_selected'); // Désactive le bullet point actif
	
	if (target === 'clicDroit') { // Vérifie si l'action demandée est un clique droit
        currentSlide += 1; // Augmente l'index de 1 pour avancer dans le slider
        if (currentSlide >= allSlides) {
            currentSlide = 0; // Si on est à la dernière image et que l’on clique à droite on affiche la première image
        }
    } else 
		if (target === 'clicGauche') { //Vérifie si l'action demandée est un clique gauche
			currentSlide -= 1; // Diminue l'index de 1 pour avancer dans le slider
			if (currentSlide < 0) {
				currentSlide = allSlides - 1; //  Si on est à la première image et que l’on clique à gauche on affiche la dernière image  / boucle quand inférieur à 0 avec "allSlides -1"   
			}
		}

    document.querySelectorAll('.dot')[currentSlide].classList.add('dot_selected'); // Rend actif un nouveau bullet point
    
    // Récupération des images et texte du slider
	const image = document.querySelector('.banner-img');
	const texte = document.querySelector('#banner p');
	const newSlide = slides[currentSlide]; // Récupération des informations de la nouvelle slide
	image.src = newSlide.image; // Intégration de l'image de la slide
	texte.innerHTML = newSlide.tagLine; // Intégration du texte de la slide
}

  