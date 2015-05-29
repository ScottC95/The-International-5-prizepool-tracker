setInterval(function () {
	var day = new Date();
	var min = day.getMinutes();
	if (min == 30 || min == 0) {
		
	}
	new Notification('Title' , {
		icon: 'icon.png',
		body: 'message',
	})
}, 60 * 1000);