
function loadMap() {
	map = L.map('map').setView([-22.90, -43.25], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);
}

function loadSquare() {
	// Celula 2
	var polygon = L.polygon([
		[-22.925, -43.265],
		[-22.915, -43.265],
		[-22.915, -43.255],
		[-22.925, -43.255]
	], {color: '#4f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 3
	var polygon = L.polygon([
		[-22.925, -43.255],
		[-22.915, -43.255],
		[-22.915, -43.245],
		[-22.925, -43.245]
	], {color: '#6b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 4
	var polygon = L.polygon([
		[-22.925, -43.245],
		[-22.915, -43.245],
		[-22.915, -43.235],
		[-22.925, -43.235]
	], {color: '#4f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 5
	var polygon = L.polygon([
		[-22.925, -43.235],
		[-22.915, -43.235],
		[-22.915, -43.225],
		[-22.925, -43.225]
	], {color: '#730000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 6
	var polygon = L.polygon([
		[-22.915, -43.275],
		[-22.905, -43.275],
		[-22.905, -43.265],
		[-22.915, -43.265]
	], {color: '#3f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 7
	var polygon = L.polygon([
		[-22.915, -43.265],
		[-22.905, -43.265],
		[-22.905, -43.255],
		[-22.915, -43.255]
	], {color: '#3f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 8
	var polygon = L.polygon([
		[-22.915, -43.255],
		[-22.905, -43.255],
		[-22.905, -43.245],
		[-22.915, -43.245]
	], {color: '#470000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 9
	var polygon = L.polygon([
		[-22.915, -43.245],
		[-22.905, -43.245],
		[-22.905, -43.235],
		[-22.915, -43.235]
	], {color: '#630000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 10
	var polygon = L.polygon([
		[-22.915, -43.235],
		[-22.905, -43.235],
		[-22.905, -43.225],
		[-22.915, -43.225]
	], {color: '#570000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 11
	var polygon = L.polygon([
		[-22.905, -43.275],
		[-22.895, -43.275],
		[-22.895, -43.265],
		[-22.905, -43.265]
	], {color: '#470000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 12
	var polygon = L.polygon([
		[-22.905, -43.265],
		[-22.895, -43.265],
		[-22.895, -43.255],
		[-22.905, -43.255]
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 13
	var polygon = L.polygon([
		[-22.905, -43.255],
		[-22.895, -43.255],
		[-22.895, -43.245],
		[-22.905, -43.245]
	], {color: '#4b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 14
	var polygon = L.polygon([
		[-22.905, -43.245],
		[-22.895, -43.245],
		[-22.895, -43.235],
		[-22.905, -43.235]
	], {color: '#470000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 15
	var polygon = L.polygon([
		[-22.905, -43.235],
		[-22.895, -43.235],
		[-22.895, -43.225],
		[-22.905, -43.225]
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 16
	var polygon = L.polygon([
		[-22.895, -43.275],
		[-22.885, -43.275],
		[-22.885, -43.265],
		[-22.895, -43.265]
	], {color: '#3f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 17
	var polygon = L.polygon([
		[-22.895, -43.265],
		[-22.885, -43.265],
		[-22.885, -43.255],
		[-22.895, -43.255]
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 18
	var polygon = L.polygon([
		[-22.895, -43.255],
		[-22.885, -43.255],
		[-22.885, -43.245],
		[-22.895, -43.245]
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 19
	var polygon = L.polygon([
		[-22.895, -43.245],
		[-22.885, -43.245],
		[-22.885, -43.235],
		[-22.895, -43.235]
	], {color: '#430000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 20
	var polygon = L.polygon([
		[-22.895, -43.235],
		[-22.885, -43.235],
		[-22.885, -43.225],
		[-22.895, -43.225]
	], {color: '#4b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 21
	var polygon = L.polygon([
		[-22.885, -43.275],
		[-22.875, -43.275],
		[-22.875, -43.265],
		[-22.885, -43.265]
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 22
	var polygon = L.polygon([
		[-22.885, -43.265],
		[-22.875, -43.265],
		[-22.875, -43.255],
		[-22.885, -43.255]
	], {color: '#430000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 23
	var polygon = L.polygon([
		[-22.885, -43.255],
		[-22.875, -43.255],
		[-22.875, -43.245],
		[-22.885, -43.245]
	], {color: '#3f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 25
	var polygon = L.polygon([
		[-22.885, -43.235],
		[-22.875, -43.235],
		[-22.875, -43.225],
		[-22.885, -43.225]
	], {color: '#3f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
}

function loadTaxi() {
	var taxi = L.marker([-22.89578126, -43.25253346], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91762657, -43.25415042], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92234271, -43.25172497], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92234271, -43.25172497], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91787480, -43.26573869], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91936412, -43.26223526], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89503647, -43.24013671], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90298067, -43.24741306], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92457662, -43.23366884], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90074641, -43.25468941], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91142088, -43.22531450], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87889838, -43.24067570], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92408020, -43.23259086], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90298067, -43.25037750], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90024991, -43.24417913], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88138129, -43.23878923], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90074641, -43.23124339], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90322892, -43.26951162], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92209450, -43.23286035], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91886768, -43.25145548], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92482483, -43.23339934], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92432841, -43.23366884], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90198767, -43.24471811], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88907801, -43.27139808], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88808491, -43.23312985], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89180901, -43.26762515], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92110164, -43.23501631], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92308735, -43.23663328], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89429168, -43.24202317], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92085342, -43.22639248], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90794556, -43.27220656], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92358378, -43.23501631], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91067617, -43.22935692], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88907801, -43.26654718], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90645611, -43.27085909], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89007111, -43.24364014], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89255381, -43.23070440], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91961234, -43.23447732], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91017970, -43.23286035], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92159807, -43.22666198], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89131247, -43.23259086], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91042794, -43.22962642], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91762657, -43.25118598], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88858146, -43.27490151], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90074641, -43.24687407], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91166911, -43.27409302], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89280208, -43.26924212], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88585041, -43.27166757], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90322892, -43.25280295], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92457662, -43.24040620], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90471840, -43.26519970], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92358378, -43.25873183], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90422191, -43.26385223], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88609869, -43.26924212], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88609869, -43.26924212], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91638546, -43.26223526], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91241381, -43.22666198], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88088471, -43.25010801], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92035699, -43.23825024], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92060521, -43.23555530], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92383199, -43.23474681], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91861946, -43.25064700], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89205728, -43.26573869], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89280208, -43.22773996], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91911590, -43.25334194], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91787480, -43.25280295], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92383199, -43.23474681], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92184629, -43.25037750], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89329861, -43.23932822], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89801560, -43.26816414], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91713013, -43.26196577], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89528473, -43.26735566], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88907801, -43.27436252], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91762657, -43.24579609], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89255381, -43.26816414], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89205728, -43.26843364], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91688190, -43.25441992], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89404341, -43.26789465], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92333556, -43.23501631], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91688190, -43.23717227], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90720084, -43.27166757], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91315850, -43.26573869], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92110164, -43.23178237], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92010877, -43.23932822], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92010877, -43.23932822], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92408020, -43.24202317], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88311930, -43.26493021], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91986055, -43.23393833], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91340673, -43.26951162], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91042794, -43.22962642], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89131247, -43.26196577], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91861946, -43.24067570], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91315850, -43.22720097], {icon: srcIcon});
	taxi.addTo(map);
	srcTaxi.matriz.push(taxi);
	srcTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90397366, -43.24067570]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91117264, -43.24256216]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91092441, -43.23851974]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91266204, -43.24121468]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92060521, -43.25091649]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91713013, -43.26304375]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90074641, -43.25468941]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90024991, -43.24444862]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92333556, -43.23043490]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92457662, -43.23636378]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87865009, -43.26115728]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88585041, -43.23501631]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91117264, -43.22504501]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89528473, -43.24067570]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90869028, -43.23825024]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88138129, -43.23070440]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90322892, -43.25334194]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91638546, -43.22989591]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91638546, -43.22989591]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87964326, -43.27166757]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91117264, -43.24256216]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88734008, -43.26924212]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88907801, -43.23393833]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90645611, -43.24013671]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91365496, -43.26439122]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88138129, -43.26034880]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88758836, -43.24660458]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92358378, -43.24687407]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91017970, -43.23312985]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92482483, -43.22504501]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89255381, -43.23043490]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90322892, -43.25361144]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89379515, -43.23986721]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91613723, -43.23043490]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90074641, -43.23124339]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92482483, -43.23070440]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91464787, -43.23986721]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89429168, -43.26169627]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92259093, -43.24849104]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92408020, -43.25091649]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88510556, -43.22773996]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90223592, -43.27463201]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91291027, -43.24903003]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91315850, -43.24552660]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91638546, -43.24956902]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91092441, -43.22585349]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91762657, -43.25118598]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91911590, -43.23986721]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92184629, -43.22666198]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88957456, -43.22531450]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91042794, -43.23825024]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91936412, -43.24202317]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90571138, -43.24364014]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88311930, -43.22935692]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89627778, -43.24067570]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90273242, -43.26708617]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90322892, -43.26843364]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91663368, -43.24094519]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92482483, -43.22666198]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90496665, -43.26708617]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90298067, -43.25172497]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90322892, -43.24714357]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92358378, -43.23609429]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91117264, -43.27112858]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92432841, -43.22773996]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92010877, -43.22612299]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87865009, -43.25064700]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91564078, -43.23555530]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88907801, -43.23205187]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91340673, -43.27274555]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91564078, -43.24552660]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91986055, -43.25738436]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91713013, -43.26223526]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91266204, -43.23339934]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92134986, -43.22585349]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92110164, -43.22989591]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92134986, -43.25037750]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89180901, -43.23986721]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88858146, -43.27490151]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92259093, -43.23312985]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91390319, -43.23393833]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91613723, -43.25118598]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91812302, -43.24768255]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91489610, -43.25118598]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91489610, -43.25118598]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91663368, -43.26223526]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88237444, -43.25495891]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91663368, -43.26223526]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90794556, -43.23878923]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91067617, -43.22773996]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91564078, -43.26277425]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91489610, -43.26331324]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87815350, -43.25549790]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91042794, -43.23070440]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91588901, -43.23124339]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91539256, -43.23178237]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91439965, -43.23851974]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91613723, -43.24741306]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89776734, -43.26088779]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92184629, -43.24525710]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91191734, -43.23393833]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91762657, -43.25118598]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
}

function loadArrow() {
	var polygon = L.polygon([
		[-22.91950000, -43.26850000],
		[-22.92050000, -43.26850000],
		[-22.92050000, -43.26750000],
		[-22.92100000, -43.26750000],
		[-22.92000000, -43.26650000],
		[-22.91900000, -43.26750000],
		[-22.91950000, -43.26750000],
		[-22.91950000, -43.26850000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.91950000, -43.25850000],
		[-22.92050000, -43.25850000],
		[-22.92050000, -43.25750000],
		[-22.92100000, -43.25750000],
		[-22.92000000, -43.25650000],
		[-22.91900000, -43.25750000],
		[-22.91950000, -43.25750000],
		[-22.91950000, -43.25850000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.91950000, -43.23850000],
		[-22.92050000, -43.23850000],
		[-22.92050000, -43.23750000],
		[-22.92100000, -43.23750000],
		[-22.92000000, -43.23650000],
		[-22.91900000, -43.23750000],
		[-22.91950000, -43.23750000],
		[-22.91950000, -43.23850000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.91070711, -43.26858579],
		[-22.91141421, -43.26929289],
		[-22.91212132, -43.26858579],
		[-22.91247487, -43.26893934],
		[-22.91247487, -43.26752513],
		[-22.91106066, -43.26752513],
		[-22.91141421, -43.26787868],
		[-22.91070711, -43.26858579],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.91150000, -43.22950000],
		[-22.91150000, -43.23050000],
		[-22.91250000, -43.23050000],
		[-22.91250000, -43.23100000],
		[-22.91350000, -43.23000000],
		[-22.91250000, -43.22900000],
		[-22.91250000, -43.22950000],
		[-22.91150000, -43.22950000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.89950000, -43.25850000],
		[-22.90050000, -43.25850000],
		[-22.90050000, -43.25750000],
		[-22.90100000, -43.25750000],
		[-22.90000000, -43.25650000],
		[-22.89900000, -43.25750000],
		[-22.89950000, -43.25750000],
		[-22.89950000, -43.25850000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.90070711, -43.24858579],
		[-22.90141421, -43.24929289],
		[-22.90212132, -43.24858579],
		[-22.90247487, -43.24893934],
		[-22.90247487, -43.24752513],
		[-22.90106066, -43.24752513],
		[-22.90141421, -43.24787868],
		[-22.90070711, -43.24858579],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.90150000, -43.23950000],
		[-22.90150000, -43.24050000],
		[-22.90250000, -43.24050000],
		[-22.90250000, -43.24100000],
		[-22.90350000, -43.24000000],
		[-22.90250000, -43.23900000],
		[-22.90250000, -43.23950000],
		[-22.90150000, -43.23950000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.90141421, -43.23070711],
		[-22.90070711, -43.23141421],
		[-22.90141421, -43.23212132],
		[-22.90106066, -43.23247487],
		[-22.90247487, -43.23247487],
		[-22.90247487, -43.23106066],
		[-22.90212132, -43.23141421],
		[-22.90141421, -43.23070711],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.89150000, -43.26950000],
		[-22.89150000, -43.27050000],
		[-22.89250000, -43.27050000],
		[-22.89250000, -43.27100000],
		[-22.89350000, -43.27000000],
		[-22.89250000, -43.26900000],
		[-22.89250000, -43.26950000],
		[-22.89150000, -43.26950000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.89070711, -43.25858579],
		[-22.89141421, -43.25929289],
		[-22.89212132, -43.25858579],
		[-22.89247487, -43.25893934],
		[-22.89247487, -43.25752513],
		[-22.89106066, -43.25752513],
		[-22.89141421, -43.25787868],
		[-22.89070711, -43.25858579],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.89141421, -43.24070711],
		[-22.89070711, -43.24141421],
		[-22.89141421, -43.24212132],
		[-22.89106066, -43.24247487],
		[-22.89247487, -43.24247487],
		[-22.89247487, -43.24106066],
		[-22.89212132, -43.24141421],
		[-22.89141421, -43.24070711],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.88070711, -43.24858579],
		[-22.88141421, -43.24929289],
		[-22.88212132, -43.24858579],
		[-22.88247487, -43.24893934],
		[-22.88247487, -43.24752513],
		[-22.88106066, -43.24752513],
		[-22.88141421, -43.24787868],
		[-22.88070711, -43.24858579],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.88070711, -43.23858579],
		[-22.88141421, -43.23929289],
		[-22.88212132, -43.23858579],
		[-22.88247487, -43.23893934],
		[-22.88247487, -43.23752513],
		[-22.88106066, -43.23752513],
		[-22.88141421, -43.23787868],
		[-22.88070711, -43.23858579],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
}

function loadCircle() {
	var circle = L.circle([-22.920, -43.240], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('UMax: 0.9783')
		.openPopup();
	circleUMax.matriz.push(circle);
	circleUMax.group.addLayer(circle);
	var circle = L.circle([-22.890, -43.270], {
		color: 'blue',
		fillColor: 'blue',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('UMin: -0.47209')
		.openPopup();
	circleUMin.matriz.push(circle);
	circleUMin.group.addLayer(circle);
	var circle = L.circle([-22.890, -43.240], {
		color: 'orange',
		fillColor: 'orange',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('SMax: 0.90341')
		.openPopup();
	circleSMax.matriz.push(circle);
	circleSMax.group.addLayer(circle);
	var circle = L.circle([-22.900, -43.260], {
		color: 'yellow',
		fillColor: 'yellow',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('SMin: -0.60315')
		.openPopup();
	circleSMin.matriz.push(circle);
	circleSMin.group.addLayer(circle);
}

