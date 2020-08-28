let modal = document.getElementById("mymodal");
let btn = document.getElementById("btnModalWindow");
let close = document.getElementsByClassName("closeModal")[0];
btn.onclick = function (){
	modal.style.display = "block";
}
close.onclick = function (){
	modal.style.display = "none";
}
window.onclick = function (event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}
