var link ="http://pradneshpatil.com/dota2.php"
$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: link,
		crossDomain: true,
		contentType: "application/json; charset=utf-8",
		data: { show: "total,money_to_next,next_target,next_goal"},
		dataType: "json",
		success: function (data) {
			$total = $('.total');
			$nextTargetMoney = $('.nextTargetMoney');
			$nextTarget = $('.nextTarget');
			$nextGoal = $('.nextGoal');
			$total.empty();
			$nextTargetMoney.empty();
			$nextTarget.empty();
			$nextGoal.empty();
			$total.append(format2(data.total, "$"));
			$nextTargetMoney.append(format2(data.money_to_next, "$"));
			$nextTarget.append(format2(data.next_target, "$"));
			$nextGoal.append(data.next_goal);
		}
	});
});
function format2(n, currency) {
    return currency + Number(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}