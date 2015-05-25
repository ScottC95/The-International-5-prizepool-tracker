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
			$total.append(convertUSD(data.total, "$"));
			if (data.next_target == "10000000") {
				$nextTargetMoney.append(convertUSD(data.money_to_next, "$") + " Left to go until the Immortal Treasure III");
			}
			else{
				$nextTargetMoney.append(convertUSD(data.money_to_next, "$") + " Left to go until the " + data.next_goal);
			};
			$nextTarget.append("Next target : " + convertUSD(data.next_target, "$"));
			$nextGoal.append(data.next_goal);
			var div = document.getElementsByClassName('nextGoal');
			if (data.next_target == "9000000") {
				$('#Goal').css("background-image", "url('img/international2015_14.jpg')");
			} 
			else if(data.next_target == "10000000") {
				$('#Goal').css("background-image", "url('img/international2015_15.jpg')");
			}
			else if(data.next_target == "11000000") {
				$('#Goal').css("background-image", "url('img/international2015_16.jpg')");
			}
			else if(data.next_target == "12000000") {
				$('#Goal').css("background-image", "url('img/international2015_17.jpg')");
			}
			else if(data.next_target == "13000000") {
				$('#Goal').css("background-image", "url('img/international2015_18.jpg')");
			}
			else if(data.next_target == "14000000") {
				$('#Goal').css("background-image", "url('img/international2015_19.jpg')");
			}
			else if(data.next_target == "15000000") {
				$('#Goal').css("background-image", "url('img/international2015_20.jpg')");
			}
			else {
				$('#Goal').css("background-image", "url('img/international2015_13.jpg')");
			};
		}
	});
});

function convertUSD(n, currency) {
    return currency + Number(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}