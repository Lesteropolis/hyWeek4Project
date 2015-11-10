//.val()


$(function(){


	//Social Media
	$('.share').click(function() {
		var NWin = window.open($(this).prop('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
		if (window.focus) {
			NWin.focus();
		}
		return false;
    });

	//Cacheing the selectors
	var answerOne;
	var answerTwo;
	var answerThree;
	var answerFour;
	var yogiNameOne;
	var yogiNameTwo;
	var poseImg;
	var poseText;
	var spiritImg;
	var spiritText;

	//The database of pre-determined answers
	var database = {
		magical: "Sunshine",
		Enlightened: "Guru",
		totally: "Ocean",
		hungover: "Sparkles",
		spaced: "Radiant",
		wtf: "Moonbeam",
		ageing: "Mountain",
		acid: "Crescent",
		fruit: "Mantra",
		armHair: "Namaste",
		readMind: "Mystic",
		invisibility: "Tiptoe",
		mountain: {
				img: 'images/poseimg1.jpg',
				text: 'Downward dog'
			},
		anyMovingObject: {
				img: 'images/poseimg2.jpg',
				text: 'Sunbird'
		},
		grocery: {
				img: 'images/poseimg3.jpg',
				text: 'Child'
		},
		lawn: {
				img: 'images/poseimg4.jpg',
				text: 'Table'
		},
		beach: {
				img: 'images/poseimg5.jpg',
				text: 'Cat'
		},
		meditate: {
				img: 'images/poseimg6.jpg',
				text: 'Cow'
		},
		hipster: {
				img: 'images/spirit1.jpg',
				text: 'Unicorn'
		},
		hipHop: {
				img: 'images/spirit2.jpg',
				text: 'Penguin'
		},
		punkOrRock: {
				img: 'images/spirit3.jpg',
				text: 'Elephant'
		},
		deathMetal: {
				img: 'images/spirit4.jpg',
				text: 'Rhino'
		},
		river: {
				img: 'images/spirit5.jpg',
				text: 'Walrus'
		},
		classical: {
				img: 'images/spirit6.jpg',
				text: 'Hyena'
		}
	}

	//Question 1: Assigning the user's choice to a variable
	$('input[name="question1"]').on('change', function(event){
		event.preventDefault();
		$('.aura a').removeClass("selected");
		$(this).parent().addClass("selected");
		answerOne = $(this).val();
		yogiNameOne =  database[answerOne];
		$.smoothScroll({
			scrollTarget: '#yogiPower'
		});

	});

	//Question 2: Assigning the user's choice to a variable
	$('input[name="question2"]').on('change', function(event){
		event.preventDefault();
		$('.yogiPower a').removeClass("selected");
		$(this).parent().addClass("selected");
		answerTwo = $(this).val();
		yogiNameTwo =  database[answerTwo];
		$.smoothScroll({
			scrollTarget: '#favSpot'
		});
	});

	//Question 3: Assigning the user's choice to a variable
	$('input[name="question3"]').on('change', function(event){
		event.preventDefault();
		$('.favSpot a').removeClass("selected");
		$(this).parent().addClass("selected");
		answerThree = $(this).val();
		poseImg =  database[answerThree].img;
		poseText = database[answerThree].text;
		$.smoothScroll({
			scrollTarget: '#music'
		});	
	});

	//Question 4: Assigning the user's choice to a variable
	$('input[name="question4"]').on('change', function(event){
		event.preventDefault();
		$('.music a').removeClass("selected");
		$(this).parent().addClass("selected");
		answerFour = $(this).val();
		spiritImg =  database[answerFour].img;
		spiritText = database[answerFour].text;
		$.smoothScroll({
			scrollTarget: '#submit'
		});
	});

	//Results section: 
	// [1] Generate results
	// [2] Reveal results section
	// [3] Scroll to the results section
	// [4] Tells users to complete the survey if the survey hasn't been completed   
	$("#submitResults").click(function(event) {
		event.preventDefault();
		if (answerOne == undefined || answerTwo == undefined || answerThree == undefined || answerFour == undefined){
			alert("Please complete the survey to see your inner yogi results!");
		}
		else {
			$('#results').removeClass("hidden");
			$(".results h1").html(yogiNameOne + " " + yogiNameTwo);
			$('.yogaPosition img').attr('src', poseImg);
			$(".yogaPosition h2").html(poseText);
			$('.spiritAnimal img').attr('src', spiritImg);
			$(".spiritAnimal h2").html(spiritText);
		}
	    $.smoothScroll({
	    	scrollTarget: '#results'
	    });
	   
	});


	//Click to start again. Resets answers and scrolls to the top of the quiz.
	$(".start").click(function(event) {
		event.preventDefault();
		$('.aura a').removeClass("selected");
		$('.yogiPower a').removeClass("selected");
		$('.favSpot a').removeClass("selected");
		$('.music a').removeClass("selected");
		$('#results').addClass("hidden");
	    $.smoothScroll({
	    	scrollTarget: '#aura'
	    });
	});

	

});

