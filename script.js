// How to play pop-up

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000 
    )
});

document.querySelector("#info").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "block";
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

// Game Functionality

var code_to_guess = [1,2,3,4];

var correct_guess = false;

var active_row = 0;

function row_change() {

	active_row += 1;

	if(active_row>1){

		console.log("guess check started")

		var comparison_guess = code_to_guess.slice();
		var user_guess = [];

		const boxes_in_previous_row = document.getElementsByClassName("row-"+(active_row-1));

		for(let i=0; i<code_to_guess.length; i++) {
			var guess = boxes_in_previous_row[i].getAttribute("data-colour_id");
			user_guess.push(guess);
		}

		console.log("users guess:");
		console.log(user_guess);
		console.log("actual code");
		console.log(comparison_guess);

		var out_of_place_count = 0;
		var correct_place_count = 0;

		for(let i=0; i<comparison_guess.length; i++) {

			var guess = user_guess[i]
			var actual = comparison_guess[i];

			if(parseInt(guess)==actual){
				console.log("guess matched");
				correct_place_count += 1;
				user_guess.splice(i, 1);
				comparison_guess.splice(i, 1);
				i -= 1;
			}
		}

		for(let i=0; i<user_guess.length; i++) {

			var guess = user_guess[i]

			for(let j=0; j<comparison_guess.length; j++) {

				var possible_match = comparison_guess[j];

				if(parseInt(guess)==possible_match){
					console.log("guess matched wrong pos.");
					out_of_place_count += 1;
					user_guess.splice(i, 1);
					comparison_guess.splice(j, 1);
					i -= 1;
					break;
				}
		}

	}

		$('#correct_place_row_'+(active_row-1)).text(correct_place_count);
		$('#correct_place_row_'+(active_row-1)).css("background-color", "YellowGreen");

		$('#out_of_place_row_'+(active_row-1)).text(out_of_place_count);
		$('#out_of_place_row_'+(active_row-1)).css("background-color", "orange");
	}


	$('.row-'+(active_row-1)).css('pointer-events', 'none');

	$('#enter_button').css('pointer-events', 'none');
	$('#enter_button').css('opacity', '40%');
	$('#enter_button').css('animation', 'none');
	$('#enter_button').text('Enter Guess');

	$('.row-'+active_row).click(function(event) {

		var box_id = "#"+$(this).attr('id');
	  
		var colours = ["red","blue","green","orange","pink","yellow"];

		animateCSS(document.getElementById($(this).attr('id')), 'bounceIn');
	  
		$(box_id).attr('data-colour_id', ((parseInt($(box_id).attr('data-colour_id'))+1)%5))
	  
		$(box_id).css('background-color', colours[parseInt($(box_id).attr('data-colour_id'))]);

		// animateCSS(document.getElementById($(this).attr('id')), 'flipInX');

		// console.log($(box_id).attr('data-colour_id'));

		//var box_element = document.getElementById($(this).attr('id'));

		//console.log(box_element.getAttribute("data-colour_id"));
		
		//box_element.setAttribute('data-colour_id', $(box_id).attr('data-colour_id'));

		//console.log(box_element.getAttribute("data-colour_id"));

		const boxes_in_active_row = document.getElementsByClassName("row-"+active_row);

		var valid_row_input = true;

		for(let box of boxes_in_active_row){

			var check = box.getAttribute("data-colour_id");
			if(check=='19'){
				valid_row_input = false;
			}

		}

		if(valid_row_input){
			$('#enter_button').css('pointer-events', 'auto');
			$('#enter_button').css('opacity', '100%');
			$('#enter_button').text('Check!');
		}
	
	
	});


}

const animateCSS = (element, animation, prefix = 'animate__') =>

  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element
	node.style.setProperty("pointer-events", "none");
    node.style.setProperty('--animate-duration', '0.4s');
    
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
	  node.style.setProperty("pointer-events", "auto");
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});
