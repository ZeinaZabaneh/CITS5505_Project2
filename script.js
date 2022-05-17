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

var active_row = 0;

function row_change() {

	$('.row-'+active_row).css('pointer-events', 'none');

	$('#enter_button').css('pointer-events', 'none');
	$('#enter_button').css('opacity', '40%');
	$('#enter_button').css('animation', 'none');
	$('#enter_button').text('Enter Guess');
	
	active_row += 1;

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

