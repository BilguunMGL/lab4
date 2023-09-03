//DOM - document --> html deerh bvh kod
//console.log(document);
// document.getElementsByTagName() - > tag nereer handah
//var h1 = document.getElementsByTagName('h1')[0];
// console.log(h1);
// .innerText = "solih text bichne"-> tag dotorh h1.innerText="sain bnu"; --> tag-d style uguh
//h1.innerText="style utga" 
// .styleName = "style utga" --> tag-d style uguh
/*h1.style.color="brown";
var h12 = document.getElementsByTagName("h1")[1];
h12.innerText="Hi";
h12.style.color="red"
var p = document.getElementsByTagName("p")[0];
console.log(p);
function click2(){
	p.innerText = "click button daragdlaa";
	p.style.color = "green";
} */
var ageInput = document.getElementsByTagName("input")[0];
var birthYear = document.getElementsByTagName("h4")[0];
var birthYear = 2023;
console.log(ageInput);
console.log(birthYear);

function age(){
	myYear = currentYear - ageInput.value;
	console.log(ageInput.value);
	birthYear.innerText = myYear;
}