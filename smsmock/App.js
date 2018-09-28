var validOptions = { username: 'pratianindia@gmail.com', password: 'dertt' };
var tl = require('textlocal')(validOptions);

 tl.sendSMS('09161310568', 'this is a test message', 'Sender', 
	function (err, data) {
		console.log(err);
		console.log(data);
	});
