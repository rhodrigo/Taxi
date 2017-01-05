
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
	], {color: '#570000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 3
	var polygon = L.polygon([
		[-22.925, -43.255],
		[-22.915, -43.255],
		[-22.915, -43.245],
		[-22.925, -43.245]
	], {color: '#770000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 4
	var polygon = L.polygon([
		[-22.925, -43.245],
		[-22.915, -43.245],
		[-22.915, -43.235],
		[-22.925, -43.235]
	], {color: '#830000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 5
	var polygon = L.polygon([
		[-22.925, -43.235],
		[-22.915, -43.235],
		[-22.915, -43.225],
		[-22.925, -43.225]
	], {color: '#530000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 8
	var polygon = L.polygon([
		[-22.915, -43.255],
		[-22.905, -43.255],
		[-22.905, -43.245],
		[-22.915, -43.245]
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 9
	var polygon = L.polygon([
		[-22.915, -43.245],
		[-22.905, -43.245],
		[-22.905, -43.235],
		[-22.915, -43.235]
	], {color: '#570000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 10
	var polygon = L.polygon([
		[-22.915, -43.235],
		[-22.905, -43.235],
		[-22.905, -43.225],
		[-22.915, -43.225]
	], {color: '#4f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 11
	var polygon = L.polygon([
		[-22.905, -43.275],
		[-22.895, -43.275],
		[-22.895, -43.265],
		[-22.905, -43.265]
	], {color: '#4b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 12
	var polygon = L.polygon([
		[-22.905, -43.265],
		[-22.895, -43.265],
		[-22.895, -43.255],
		[-22.905, -43.255]
	], {color: '#4b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 13
	var polygon = L.polygon([
		[-22.905, -43.255],
		[-22.895, -43.255],
		[-22.895, -43.245],
		[-22.905, -43.245]
	], {color: '#430000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 14
	var polygon = L.polygon([
		[-22.905, -43.245],
		[-22.895, -43.245],
		[-22.895, -43.235],
		[-22.905, -43.235]
	], {color: '#430000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 15
	var polygon = L.polygon([
		[-22.905, -43.235],
		[-22.895, -43.235],
		[-22.895, -43.225],
		[-22.905, -43.225]
	], {color: '#3f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 16
	var polygon = L.polygon([
		[-22.895, -43.275],
		[-22.885, -43.275],
		[-22.885, -43.265],
		[-22.895, -43.265]
	], {color: '#430000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 17
	var polygon = L.polygon([
		[-22.895, -43.265],
		[-22.885, -43.265],
		[-22.885, -43.255],
		[-22.895, -43.255]
	], {color: '#430000'});
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
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 20
	var polygon = L.polygon([
		[-22.895, -43.235],
		[-22.885, -43.235],
		[-22.885, -43.225],
		[-22.895, -43.225]
	], {color: '#3f0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
	// Celula 21
	var polygon = L.polygon([
		[-22.885, -43.275],
		[-22.875, -43.275],
		[-22.875, -43.265],
		[-22.885, -43.265]
	], {color: '#3f0000'});
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
	// Celula 24
	var polygon = L.polygon([
		[-22.885, -43.245],
		[-22.875, -43.245],
		[-22.875, -43.235],
		[-22.885, -43.235]
	], {color: '#3b0000'});
	polygon.addTo(map);
	square.matriz.push(polygon);
	square.group.addLayer(polygon);
}

function loadTaxi() {
	var taxi = L.marker([-22.92432841, -43.24283165]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92432841, -43.24283165]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91067617, -43.24202317]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92333556, -43.23016541]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89280208, -43.27382353]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89205728, -43.24040620]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90074641, -43.25468941]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87865009, -43.24633508]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90248417, -43.25846234]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90248417, -43.25819284]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88138129, -43.26034880]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88013984, -43.25954032]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92408020, -43.23959772]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92408020, -43.23959772]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90248417, -43.25630638]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92035699, -43.23851974]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91837124, -43.24983851]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91737835, -43.24417913]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92060521, -43.24498761]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91638546, -43.22747046]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92060521, -43.24498761]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90124292, -43.23124339]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92159807, -43.24660458]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92159807, -43.24606559]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91415142, -43.23366884]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91713013, -43.25603689]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91315850, -43.24202317]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91688190, -43.25522840]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90496665, -43.24417913]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92358378, -43.25738436]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92134986, -43.25765385]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91092441, -43.23825024]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92159807, -43.24552660]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92259093, -43.25495891]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90943499, -43.23825024]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87716032, -43.26519970]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87716032, -43.26519970]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91986055, -43.24417913]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92259093, -43.23016541]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87815350, -43.24121468]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89255381, -43.23016541]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90273242, -43.26762515]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90049816, -43.26573869]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91092441, -43.23851974]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91588901, -43.25037750]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91092441, -43.23798075]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91961234, -43.23878923]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92209450, -43.24768255]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92358378, -43.24067570]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92358378, -43.24067570]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89404341, -43.26358274]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89404341, -43.26358274]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90397366, -43.26142678]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92333556, -43.25980981]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.87641543, -43.25765385]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91042794, -43.22962642]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91688190, -43.25468941]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91191734, -43.24525710]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89404341, -43.25765385]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89255381, -43.23043490]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89801560, -43.23151288]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91787480, -43.23986721]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91092441, -43.22531450]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90869028, -43.23825024]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91886768, -43.24121468]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88932629, -43.26600819]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91886768, -43.24121468]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92010877, -43.25064700]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89950514, -43.27355404]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91266204, -43.22612299]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90347717, -43.25657588]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88684353, -43.24741306]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92010877, -43.25064700]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89503647, -43.24929952]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92482483, -43.23043490]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91613723, -43.25091649]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92159807, -43.23016541]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91961234, -43.24283165]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92234271, -43.25468941]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92283914, -43.24929952]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92259093, -43.25954032]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91216557, -43.22639248]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92010877, -43.23959772]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91986055, -43.24283165]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90049816, -43.26519970]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90099467, -43.25226396]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88510556, -43.26519970]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90397366, -43.26735566]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91365496, -43.22747046]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.88063642, -43.24606559]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92482483, -43.22612299]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.89826386, -43.23878923]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.90397366, -43.24364014]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92110164, -43.23609429]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92085342, -43.26115728]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91613723, -43.24768255]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92110164, -43.24579609]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91663368, -43.26223526]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91365496, -43.24498761]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.92010877, -43.25037750]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
	var taxi = L.marker([-22.91663368, -43.23016541]);
	taxi.addTo(map);
	dstTaxi.matriz.push(taxi);
	dstTaxi.group.addLayer(taxi);
}

function loadArrow() {
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
		[-22.91950000, -43.24850000],
		[-22.92050000, -43.24850000],
		[-22.92050000, -43.24750000],
		[-22.92100000, -43.24750000],
		[-22.92000000, -43.24650000],
		[-22.91900000, -43.24750000],
		[-22.91950000, -43.24750000],
		[-22.91950000, -43.24850000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.92050000, -43.23150000],
		[-22.91950000, -43.23150000],
		[-22.91950000, -43.23250000],
		[-22.91900000, -43.23250000],
		[-22.92000000, -43.23350000],
		[-22.92100000, -43.23250000],
		[-22.92050000, -43.23250000],
		[-22.92050000, -43.23150000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.91070711, -43.24858579],
		[-22.91141421, -43.24929289],
		[-22.91212132, -43.24858579],
		[-22.91247487, -43.24893934],
		[-22.91247487, -43.24752513],
		[-22.91106066, -43.24752513],
		[-22.91141421, -43.24787868],
		[-22.91070711, -43.24858579],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.91150000, -43.23950000],
		[-22.91150000, -43.24050000],
		[-22.91250000, -43.24050000],
		[-22.91250000, -43.24100000],
		[-22.91350000, -43.24000000],
		[-22.91250000, -43.23900000],
		[-22.91250000, -43.23950000],
		[-22.91150000, -43.23950000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.91141421, -43.23070711],
		[-22.91070711, -43.23141421],
		[-22.91141421, -43.23212132],
		[-22.91106066, -43.23247487],
		[-22.91247487, -43.23247487],
		[-22.91247487, -43.23106066],
		[-22.91212132, -43.23141421],
		[-22.91141421, -43.23070711],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.90050000, -43.26150000],
		[-22.89950000, -43.26150000],
		[-22.89950000, -43.26250000],
		[-22.89900000, -43.26250000],
		[-22.90000000, -43.26350000],
		[-22.90100000, -43.26250000],
		[-22.90050000, -43.26250000],
		[-22.90050000, -43.26150000],
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
		[-22.89141421, -43.26070711],
		[-22.89070711, -43.26141421],
		[-22.89141421, -43.26212132],
		[-22.89106066, -43.26247487],
		[-22.89247487, -43.26247487],
		[-22.89247487, -43.26106066],
		[-22.89212132, -43.26141421],
		[-22.89141421, -43.26070711],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.89141421, -43.25070711],
		[-22.89070711, -43.25141421],
		[-22.89141421, -43.25212132],
		[-22.89106066, -43.25247487],
		[-22.89247487, -43.25247487],
		[-22.89247487, -43.25106066],
		[-22.89212132, -43.25141421],
		[-22.89141421, -43.25070711],
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
		[-22.89141421, -43.23070711],
		[-22.89070711, -43.23141421],
		[-22.89141421, -43.23212132],
		[-22.89106066, -43.23247487],
		[-22.89247487, -43.23247487],
		[-22.89247487, -43.23106066],
		[-22.89212132, -43.23141421],
		[-22.89141421, -43.23070711],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.88150000, -43.26950000],
		[-22.88150000, -43.27050000],
		[-22.88250000, -43.27050000],
		[-22.88250000, -43.27100000],
		[-22.88350000, -43.27000000],
		[-22.88250000, -43.26900000],
		[-22.88250000, -43.26950000],
		[-22.88150000, -43.26950000],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.88141421, -43.26070711],
		[-22.88070711, -43.26141421],
		[-22.88141421, -43.26212132],
		[-22.88106066, -43.26247487],
		[-22.88247487, -43.26247487],
		[-22.88247487, -43.26106066],
		[-22.88212132, -43.26141421],
		[-22.88141421, -43.26070711],
	], {color: 'green'});
	polygon.addTo(map);
	arrow.matriz.push(polygon);
	arrow.group.addLayer(polygon);
	var polygon = L.polygon([
		[-22.88141421, -43.25070711],
		[-22.88070711, -43.25141421],
		[-22.88141421, -43.25212132],
		[-22.88106066, -43.25247487],
		[-22.88247487, -43.25247487],
		[-22.88247487, -43.25106066],
		[-22.88212132, -43.25141421],
		[-22.88141421, -43.25070711],
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
	var circle = L.circle([-22.920, -43.250], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('UMax: 1.2022')
		.openPopup();
	circleUMax.matriz.push(circle);
	circleUMax.group.addLayer(circle);
	var circle = L.circle([-22.880, -43.250], {
		color: 'blue',
		fillColor: 'blue',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('UMin: -1.0099')
		.openPopup();
	circleUMin.matriz.push(circle);
	circleUMin.group.addLayer(circle);
	var circle = L.circle([-22.890, -43.230], {
		color: 'orange',
		fillColor: 'orange',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('SMax: 0.93504')
		.openPopup();
	circleSMax.matriz.push(circle);
	circleSMax.group.addLayer(circle);
	var circle = L.circle([-22.910, -43.260], {
		color: 'yellow',
		fillColor: 'yellow',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map)
		.bindPopup('SMin: -1.2046')
		.openPopup();
	circleSMin.matriz.push(circle);
	circleSMin.group.addLayer(circle);
}

