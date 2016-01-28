//Cercle qui se déplace vers la souris

window.onload = function() {
	window.requestAnimationFrame(draw);
	var can = document.getElementById('can');
	var ctx = can.getContext('2d');
	var circle = {
		x :20,
		y : 20,
	};

	function draw() {
		ctx.save();
		ctx.clearRect(0,0,can.width,can.height);
		ctx.beginPath();
		ctx.arc(circle.x,circle.y,20,0,Math.PI*2);
		ctx.fill();
		ctx.restore();
		window.requestAnimationFrame(draw);
	}

	
	function animate(prop, val, dure) {
		var start = new Date().getTime();
		var end = start + dure;
		var current = circle[prop];
		var distance = val - current;
		var step = function() {
			var timestamp = new Date().getTime();
			var progress = Math.min((dure - (end - timestamp)) / dure, 1);
			circle[prop] = current + (distance * progress);
			if (progress < 1) {
				requestAnimationFrame(step);
			}
		};
		return step();
	}
	can.addEventListener('mousemove', function(e) {
		mX = e.clientX;
		mY = e.clientY;
		animate('x', mX, 1000);
		animate('y', mY, 1000);
	});
};