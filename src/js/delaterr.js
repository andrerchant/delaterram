export default class delaterrApp {

	constructor(){
		this.loadDelaTerram();
	}

	homeImages = [
		'mermelada2.jpg',
		'mermelada4.jpg',
		'mermelada6.jpg',
		'mermelada3.jpg',
		'mermelada7.jpg',
		'mermelada8.jpg'
	];

	ready(fn) {
		if (document.readyState !== 'loading') fn();
		else document.addEventListener('DOMContentLoaded', fn)
	}

	/**
	 * @description - app init
	 */
	loadDelaTerram() {
		const clicked = false;
		const ramasContainerEl = document.querySelector('#ramas_container');
		const vTerramEl = document.querySelector('#v_terram');

		this.ready(() => {
			const figs = document.querySelectorAll('.fig')
			const slider = document.querySelector('.bxslider');
			if (slider) slider.bxSlider();

			Object.values(figs).forEach(fig => {
				const figImg = fig.getAttribute('img');
				fig.style.backgroundImage = `url(assets/images/photos/${figImg})`;
			})
		});


		ramasContainerEl.addEventListener("touchstart", evt => evt.preventDefault());

		const manageLogoSound = () => {
			if (!!clicked) vTerramEl.pause();
			else vTerramEl.play();
		}

		vTerramEl.addEventListener('click', manageLogoSound)
		this.picsVisor();
	}

	/**
	 * @description - Controles visualizador de imágenes
	 */
	picsVisor() {

		const figs = document.querySelectorAll('.fig');
		const btns = ['.ant','.sig','.cerrar','.fxd_fondo','.fxd_imagen'];
		const [ant_btn,sig_btn,close_btn,fxd_fondoEl,fxd_imagenEl] = btns.map( btn => document.querySelector(btn) );

		let isOpen = false;
		let currentImage;

		const showControls = ([evt, fig]) => {
			currentImage = fig.attributes.img.value;
			const num = this.homeImages.findIndex(img => img === currentImage)
			fxd_fondoEl.classList.remove("hide");
			fxd_imagenEl.style.backgroundImage = `url(assets/images/photos/${fig.attributes.img.value}`;
			fxd_imagenEl.setAttribute("pos", num);
			isOpen = true;
		}

		const manageImages = direction => {
			let currentIndex = this.homeImages.findIndex(img => currentImage === img);
			let nextNumber = direction.forward ? currentIndex + 1 : currentIndex - 1;
			if (nextNumber >= this.homeImages.length) nextNumber = 0;
			else if (nextNumber <= 0) nextNumber = this.homeImages.length - 1;
			currentImage = this.homeImages[nextNumber];
			fxd_imagenEl.style.backgroundImage = `url(assets/images/photos/${currentImage}`;
		}

		const closeImages = () => {
			[ant_btn, sig_btn].forEach(ctrl => ctrl.removeEventListener('click', manageImages));
			fxd_fondoEl.classList.add("hide");
			isOpen = false;
			close_btn.removeEventListener('click', closeImages)
		}

		if (ant_btn && sig_btn && close_btn) {
			ant_btn.addEventListener('click', () => manageImages({ forward: false }));
			sig_btn.addEventListener('click', () => manageImages({ forward: true }));
			close_btn.addEventListener("click", () => closeImages());
		}


		figs.forEach(fig => {
			fig.addEventListener('click', event => {
				showControls([event, fig])
			})
		})

		document.addEventListener('keydown', e => {
			e.preventDefault();
			switch (e.key) {
				case 'ArrowRight':
					manageImages({ forward: true })
					break;
				case 'ArrowLeft':
					manageImages({ forward: false })
					break;
				case 'Escape':
					closeImages();
					break;
				default: return;
			}
		});
	}
}