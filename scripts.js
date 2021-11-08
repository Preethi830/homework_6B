// 1. Store the properties of the pastry both quantity and glaze 
// 2. Increment the the number in the shopping cart every time items are added for feedback



// 1. Get the Product


product_ids = ["Blackberry", "Caramel", "Pumpkin", "Original", "OriginalGF", "Walnut"];
products = ["Blackberry", "Caramel", "Pumpkin", "Original", "OriginalGF", "Walnut"]
currentProduct = "";

function getProduct() {
    for (let i = 0; i < product_ids.length; i++) {
        if (product_ids[i] == document.title) {
            currentProduct = products[i];
        }
    }
    return currentProduct;
}



var i = localStorage.getItem('inc') || 0;
var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
function buttonClick() {
 
    if(existingEntries == null) existingEntries = [];


	var eID = document.getElementById("quan");
	var Quantity = parseInt(eID.options[eID.selectedIndex].text);

	var gID = document.getElementById("glaze");
	var Glaze = gID.options[gID.selectedIndex].text;

	
	document.getElementById('demo').innerHTML = Glaze;
	document.getElementById('demo2').innerHTML = Quantity;
 
currentProduct = getProduct();
    let currentOrder = {
        finalProduct: currentProduct,
        finalGlaze: Glaze,
        finalQuantity: Quantity,
    }
    localStorage.setItem("currentOrder", JSON.stringify(currentOrder));

if (JSON.stringify(existingEntries).includes(JSON.stringify(currentOrder))){
    alert("This order already in cart. Navigate to Cart to view or delete!")}
else{
    i = parseInt(i) + Quantity;

	localStorage.setItem('inc', i);
	document.getElementById('inc').value = i;
        existingEntries.push(currentOrder);}

 localStorage.setItem("allEntries", JSON.stringify(existingEntries));

}

window.onload = function() {

	document.getElementById('inc').value = i;

let productContainer =document.querySelector('.products');

	if (document.title=='Shopping Cart'){
productContainer.innerHTML= '';
var total= 0;

		for (j of existingEntries){
			productContainer.innerHTML += `
<div class='.Cart-Items'>
<div class=image-box>
 	<img src=${j.finalProduct}.png>
 	</div>
 
	<div class=about>

 	<h6 class=title>${j.finalProduct}</h6><br><br><br>

 	<h6 class=subtitle>${j.finalGlaze}</h6>

 	</div>
 
	<div class=counter> 
	
	 <div class=count>${j.finalQuantity}</div>
	</div>
 	<div class=prices>
	<div class=amount>${j.finalQuantity*4.99}</div>
<input type="button" class="remove-item" value="X" data-name="${j.finalProduct} ${j.finalGlaze} ${j.finalQuantity}" onclick=remove(this)>

	</div>

</div><br><br>

`
total= i*4.99;
document.getElementById('infoSpan').innerHTML = total;

			}


}






};

function remove(name){

  var name = (name.getAttribute("data-name"));
  var name1=name.split(" ")[0]
  var glaze = name.split(" ")[1]
  var quantity = name.split(" ")[2]

for (let k = 0; k < existingEntries.length; k++) {
 if (existingEntries[k].finalProduct==name1 && existingEntries[k].finalGlaze==glaze && existingEntries[k].finalQuantity==quantity){
 i = i- existingEntries[k].finalQuantity;
existingEntries.splice(k, 1);
localStorage.setItem("allEntries", JSON.stringify(existingEntries));
location.reload();
localStorage.setItem('inc', i);
	document.getElementById('inc').value = i;


	
}}




};



// 3. Show feedback when items are added as to glaze and quantity

function toggleText() {
	var text = document.getElementById("demo3");
	if (text.style.display === "none") {
		text.style.display = "block";
	} 
}

function toggleText2() {
	var text = document.getElementById("demo4");
	if (text.style.display === "none") {
		text.style.display = "block";
	} 
}
var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var myTimer;

showSlides();

function showSlides() {    
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    dots[slideIndex-1].className += " active";
    slides[slideIndex-1].style.display = "block";
    myTimer = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(no) {
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex = no;
    slides[no-1].style.display = "block";
    dots[no-1].className += " active";
    clearTimeout(myTimer);
    myTimer = setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  var newslideIndex = slideIndex + n;
  if(newslideIndex < 4 && newslideIndex > 0){
     currentSlide(newslideIndex);
  }
}