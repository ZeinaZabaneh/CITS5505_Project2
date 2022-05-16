console.log("here");

$('.griditem').click(function(event) {
	
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