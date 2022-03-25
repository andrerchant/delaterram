// const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
// import Snap from 'snapsvg';

export default function dynamicLogo() {
	const rola = {};
	const audios = ["crujidos1", "crujidos2"];
	let clase,
		Tanimacion,
		linea_snap,
		id_nm,
		id_linea,
		tiempo,
		s;

	const vectores = {
		ramas: {
			fijo: {
				rama_1: "M76.282,68.935c0,0,8.796,49.051-20.523,95.107C40.98,187.246,3.573,223.32,15.693,254.746        c12.13,31.417,16.45,28.866,16.45,28.866s-9.084-6.698-9.422-29.722c-0.617-42.699,32.503-64.843,53.388-98.261C96.993,122.224,90.138,75.559,76.282,68.935z",
				rama_2: "M443.62,185.772c-10.102-13.563-20.141-27.265-21.734-44.514c-0.184-2.339-1.006-19.463,5.992-15.694c-3.82-5.443-11.837-5.102-16.761,3.176c-16.836,28.742,17.998,55.467,33.453,75.249c8.454,10.816,9.965,21.538,8.86,32.387c-12.069,19.192-48.547,18.954-46.185,51.624c3.563-29.527,27.464-24.35,44.073-39.381c-1.106,4.926-2.414,9.894-3.537,14.925C467.307,237.13,462.267,210.908,443.62,185.772z",
				rama_3: "M950.438,219.062c-2.464-2.397-4.682-4.06-6.201-5.953c-1.731-18.195-15.31-36.874-26.655-48.697        c-7.329-7.611-34.238-25.772-25.358-38.426c-5.593-3.474-8.719,5.441-8.043,11.157c1.132,9.579,12.475,18.335,19.182,24.166c15.189,13.005,32.53,26.443,36.105,47.316c2.1,11.597,0.769,20.625-3.565,30.826c5.905-6.717,8.384-14.192,8.518-21.863c8.043,9.286,22.629,16.521,14.726,31.397C967.244,238.51,957.825,226.25,950.438,219.062z"
			},
			s2: {
				rama_1: "M76.282,68.935c0,0,8.796,49.051-20.523,95.107c-5.837,8.75-21.509,21.208-31.278,49.146c-5.78,16.529-0.308,22.204-0.308,22.204s3.486-25.99,17.578-41.143c23.25-25,28.216-26.854,34.359-38.62C96.993,122.224,90.138,75.559,76.282,68.935z",
				rama_2: "M443.62,185.772c-10.102-13.563-20.141-27.265-21.734-44.514c-0.184-2.339-1.006-19.463,5.992-15.694c-3.82-5.443-11.837-5.102-16.761,3.176c-16.836,28.742,17.998,55.467,33.453,75.249c8.454,10.816,8.263,18.178,9.585,26.21c1.204,7.312-0.893,17.132-1.542,24.276C457.363,248.492,462.267,210.908,443.62,185.772z",
				rama_3: "M942.123,202.985c-3.787-14.772-13.196-26.75-24.542-38.573c-7.329-7.611-34.238-25.772-25.358-38.426c-5.593-3.474-8.719,5.441-8.043,11.157c1.132,9.579,12.475,18.335,19.182,24.166c15.189,13.005,27.72,26.097,32.892,37.699c2.589,5.808,4.481,7.196,4.292,16.287c1.957-5.113,2.116-5.266,1.761-7.831c2.312,3.07,3.322,1.997,5.848,5.658C946.386,207,943.643,204.879,942.123,202.985z"
			},
			s3: {
				rama_1: "M76.282,68.935c0,0-0.939,44.619-0.777,53.739c0.221,12.389-5.272,20.37-6.858,23.893c-1.991,4.424-8.407,12.831-8.407,12.831s11.946-6.637,15.928-14.158c2.096-3.959,5.036-9.731,8.407-17.919C90.816,112.162,90.138,75.559,76.282,68.935z",
				rama_2: "M425,154.333c-6.232-9.13-4.687-12.95-5.167-21c-0.14-2.342,1.046-11.538,8.044-7.769c-3.82-5.443-10.279-3.948-16.761,3.176c-3.117,3.426-3.451,13.593,2.216,21.093c5.855,7.749,7.676,8.979,12.833,16.5c4,5.833,9.149,10.189,8.5,17.334C439.417,177.684,432.156,164.816,425,154.333z",
				rama_3: "M899.001,149.001c-0.032-0.056-1.052-1.612-1.083-1.667c-1.933-3.412-3.917-8.167-7-14.667c-1.59-3.352,1-3,1.305-6.682c-2.848-3.486-4.973-0.986-7.598,3.139c-3.5,5.5,3.242,12.881,6.375,17.125c8.22,11.136,11.834,11.335,13.334,15.001c-0.583-4.999-1.251-5.446-2.583-7.667C900.501,151.5,900.667,151.918,899.001,149.001z"
			},
			s4: {
				rama_1: "M76.282,68.935c0,0,1.055,14.695,1.218,23.815c0.221,12.389-4.665,22.227-6.25,25.75c-1.991,4.424-2.5,16-2.5,16s2.018,1.021,6-6.5c2.096-3.959,3.379,1.938,6.75-6.25C87.74,106.592,85.25,78,76.282,68.935z",
				rama_2: "M432,138.5c0-4.366-1.44,3.726-0.25-4.25c0.346-2.321,4.179-5.381,10.25-0.25c-2.616-6.114-9.939-12.635-17.75-7c-3.757,2.71,5.5-2,3.75,6.5c-1.958,9.513-3.496-4.923,0,3.5c2.711,6.532,8.608-3.357,6.5,3.5C440.381,135.624,432,142,432,138.5z",
				rama_3: "M896.498,134.189c-0.032-0.056,0.136,4.675,0.104,4.621c-1.933-3.412-0.605,1.303-3.688-5.197c-1.59-3.352,6.535-0.889,6.84-4.57c-2.848-3.486-7.548-4.829-7.982-2.416c-0.945,5.251-1.761,2.799-0.001,7.772c1.466,4.144-0.199-2.294,2.416,4.096c-0.583-4.999,1.69,0.33,0.358-1.891C893.295,134.521,898.164,137.106,896.498,134.189z"
			}
		}
	};


	const initSVG = () => {
		Object.keys(vectores.ramas.fijo).forEach(ramaName =>
			document.querySelector(`#${ramaName}`).setAttribute('d', vectores.ramas.fijo[ramaName])
		)
		audios.forEach((audio, index) => rola[`efecto${index}`] = new Audio(`assets/videos/${audio}.mp3`));
	}

	function SVGTransform(el) {
		this.el = el;
		this.init();
	}

	SVGTransform.prototype.init = function () {
		this.trigger = this.el;
		this.shapeEl = this.el.querySelectorAll("svg");
		this.Paths = this.el.querySelectorAll("svg g#anim path");
		this.initEvents();
		
		clase = this.shapeEl[0].getAttribute("class");
		tiempo = this.shapeEl[0].getAttribute("tiempo");
		Tanimacion = this.shapeEl[0].getAttribute("Tanimacion");
	};

	SVGTransform.prototype.initEvents = function () {
		this.trigger.addEventListener('mousedown', this.over.bind(this));
		this.trigger.addEventListener('touchstart', this.over.bind(this));
		this.trigger.addEventListener('mouseup', this.out.bind(this));
		this.trigger.addEventListener('touchend', this.out.bind(this));

	};

	SVGTransform.prototype.over = function () {
		const paths = this.Paths;
		const shape = this.shapeEl[0];

		id_nm = shape.getAttribute('id');
		s = Snap(shape);

		paths.forEach( path => {
			id_linea = path.getAttribute("id");
			linea_snap = s.select(`#${id_linea}`);

			linea_snap
				.animate({ "path": vectores[id_nm].s2[id_linea] }, 250, mina.linear)
				.animate({ "path": vectores[id_nm].s3[id_linea] }, 500, mina.linear)
				.animate({ "path": vectores[id_nm].s4[id_linea] }, 750, mina.linear);
		});
		rola.efecto0.play();

	};

	SVGTransform.prototype.out = function () {
		const paths = this.Paths;

		paths.forEach( path => {
			id_linea = path.getAttribute("id");
			linea_snap = s.select(`#${id_linea}`);

			linea_snap.animate({ "path": vectores[id_nm].fijo[id_linea] }, 550, mina.elastic);
		});

		rola.efecto1.play();
	};

	window.addEventListener('load', ()=>{
		console.log('this actually happened')
		initSVG();
		new SVGTransform(document.querySelector('.layout'));
	})
}