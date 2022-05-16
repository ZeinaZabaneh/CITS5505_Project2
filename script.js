
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
