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


$('.grid-item').click(function(event) {
	
    console.log("clicked")

	var box_id = "#"+$(this).attr('id');
  
	var colours = ["red","blue","green","orange","pink","yellow"];
  
    $(box_id).attr('data-colour_id', ((parseInt($(box_id).attr('data-colour_id'))+1)%5))
  
	$(box_id).css('background-color', colours[parseInt($(box_id).attr('data-colour_id'))]);

});

$(".row1").click(function(event) {
	
	var box_id = "#"+$(this).attr('id');
  
	var colours = ["red","blue","green","orange","pink","yellow"];
  
  $(box_id).attr('data-colour_id', ((parseInt($(box_id).attr('data-colour_id'))+1)%5))
  
	$(box_id).css('background-color', colours[parseInt($(box_id).attr('data-colour_id'))]);

});
