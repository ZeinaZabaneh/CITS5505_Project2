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

		var comparison_guess = code_to_guess;
		var user_guess = [];

		const boxes_in_previous_row = document.getElementsByClassName("row-"+(active_row-1));

		for(let i=0; i<code_to_guess.length; i++) {
			var guess = boxes_in_previous_row[i].getAttribute("data-colour_id");
			user_guess.push(guess);
		}

		//var out_of_place_count = 0;
		var correct_place_count = 0;

		for(let i=0; i<code_to_guess.length; i++) {

			var guess = user_guess[i]
			var actual = code_to_guess[i];

			if(guess==actual){
				correct_place_count += 1;
				user_guess.splice(i, 1);
				comparison_guess.splice(i, 1);
				i -= 1;
			}
		}

		$('.correct_place_row_'+(active_row-1)).text(correct_place_count);
	}


	$('.row-'+(active_row-1)).css('pointer-events', 'none');

	$('#enter_button').css('pointer-events', 'none');
	$('#enter_button').css('opacity', '40%');
	$('#enter_button').css('animation', 'none');
	$('#enter_button').text('Enter Guess');

	$('.row-'+active_row).click(function(event) {

		var box_id = "#"+$(this).attr('id');
	  
		var colours = ["red","blue","green","orange","pink","yellow"];
	  
		$(box_id).attr('data-colour_id', ((parseInt($(box_id).attr('data-colour_id'))+1)%5))
	  
		$(box_id).css('background-color', colours[parseInt($(box_id).attr('data-colour_id'))]);

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

