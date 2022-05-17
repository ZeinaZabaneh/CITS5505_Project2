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
	
	active_row += 1;

	$('.row-'+active_row).click(function(event) {

		var box_id = "#"+$(this).attr('id');
	  
		var colours = ["red","blue","green","orange","pink","yellow"];
	  
		$(box_id).attr('data-colour_id', ((parseInt($(box_id).attr('data-colour_id'))+1)%5))
	  
		$(box_id).css('background-color', colours[parseInt($(box_id).attr('data-colour_id'))]);
	
	});

	if(active_row>1){

		const boxes_in_active_row = document.getElementsByClassName("row-"+active_row);

		for(let box of boxes_in_active_row){

			var check = box.getAttribute("data-colour_id");
			console.log(check);

		}

	}

}

