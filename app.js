$(function() {
	function startClock() {
		let today = new Date();
		let h =  '0' + today.getHours();
		let m = '0' + today.getMinutes();
		let s = '0' + today.getSeconds();
		let time = h.substr(-2) + ':' + m.substr(-2) + ':' + s.substr(-2);
		$('#clock').text(time);
	}
	let timer = setInterval(startClock,1000);
	
	// ボタンの動作予約
	$('#btn').on('click', function() {
		clearTimeout(timer);
	});
});
