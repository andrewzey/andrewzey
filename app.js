$(document).ready(function() {

	var infoTimer; //declare variable for Information FadeIn Timer
	var $infoHTML = $("#info").html();

	//on social link mouseenter
	$("#social").on("mouseenter", "a", function(event) {
		clearTimeout(infoTimer); //resets infoTimer

		var $site = $(this).attr("id"); //gets value of link's ID attribute

		//fade out existing information & fade in new information
		$("#info").fadeOut("fast", function() {
			$("#info").html($site).fadeIn("fast"); 
		});

	});

	//on social link mouseleave
	$("#social").on("mouseleave", "a", function(event) {

		infoTimer = setTimeout(function() {
			$("#info").fadeOut("fast", function() {
				$("#info").html($infoHTML).fadeIn("fast");
			});
		}, 1500);

	});
});
