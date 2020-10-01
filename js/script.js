// Array.from(document.querySelectorAll(".btn").forEach(item, i, source) => source[i].addEventListener("click", function(){
//     console.log(this);
// });

// document.querySelector(".btn").addEventListener("click", function(){
//     console.log(this);
// });

//одно и то же, что и верхнее только в jquery
// $(".btn").on("click", function(){
//     console.log(this);
// });

//одно и то же, что и верхнее
// $(".btn").on("click", () => {
//     console.log(this);
// });

// $(".btn").on("click", function(event){
//     event.stopPropagation(); // останавливает всплытие
//     event.preventDefault(); // отменяет поведение по умолчанию
//     console.log(this);

//     // alert(")");
//     // location.href = this.getAttribute("href") // переход по ссылке/восстановление поведения ссылки по умолчанию
//     // console.log(event);
// });

// $(".btn").on("click", (event) => {
//     console.log(this);
//     console.log(event);
// });

//одно и то же, что и верхнее
// $(".panel").on("click", function(){
//     console.log(this);
//     $(".btn").hide();
// });

// $("body").on("click", function(){
//     console.log(this);
// });

// $("img").on("mousedown", event => {
//     console.log(event.type);
// })

// $("img").on("mouseup", event => {
//     console.log(event.type);
// })

//bubling 3 параметр по умолчанию false
// document.querySelector('.btn').addEventListener('click', function () {
// 	console.log(this);
// });

// document.querySelector('.panel').addEventListener('click', function () {
// 	console.log(this);
// });

// document.querySelector('body').addEventListener('click', function () {
// 	console.log(this);
// });


//capturing
// document.querySelector('.btn').addEventListener('click', function () {
// 	console.log(this);
// }, true);

// document.querySelector('.panel').addEventListener('click', function () {
// 	console.log(this);
// }, true);

// document.querySelector('body').addEventListener('click', function () {
// 	console.log(this);
// }, true);


//canvas
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// console.log('ctx', ctx);

// let isEditMode = false;
// const coords = {
// 	x1: null,
// 	y1: null,
// 	x2: null,
// 	y2: null,
// };

// canvas.addEventListener('mousedown', event => {
// 	isEditMode = true;

// 	coords.x1 = event.offsetX;
// 	coords.y1 = event.offsetY;

// 	ctx.lineWidth = document.querySelector('[name="lineWidth"]').value;
// 	ctx.strokeStyle = document.querySelector('[name="strokeStyle"]').value;
// });

// canvas.addEventListener('mouseup', () => {
// 	isEditMode = false;
// });

// canvas.addEventListener('mousemove', event => {
// 	if (!isEditMode) return;

// 	coords.x2 = event.offsetX;
// 	coords.y2 = event.offsetY;

// 	ctx.beginPath();
// 	ctx.moveTo(coords.x1, coords.y1);
// 	ctx.lineTo(coords.x2, coords.y2);
// 	ctx.stroke();

// 	coords.x1 = coords.x2;
// 	coords.y1 = coords.y2;
// });

let arrayValue = [];

const tbl = document.querySelector(".tbl");

function drawTable(rows, columns, place = ".tbl"){
	for(let i = 0, id = 0; i < rows; i++){
		const tr = document.createElement("tr");
		place.appendChild(tr);
		for(let j = 0; j < columns; j++){
			const td = document.createElement("td");
			tr.appendChild(td);
			td.id = id;
			id++;
		}
	}
}

drawTable(10, 10, tbl);

for(let i = 0; i < 100; i++) arrayValue.push(0);

// tbl.querySelectorAll("td").forEach(item, i, source) => source[i].addEventListener("click", function(){
// 	console.log(source[i]);
// });

tbl.querySelectorAll("td").forEach(item => item.addEventListener("click", function(){
	console.log(this.id);
	if (this.style.background === "black"){
		this.style.background = "none";
		arrayValue[this.id] = 0;
	}else{
		this.style.background = "black";
		arrayValue[this.id] = 1;
	}
}));

// document.querySelector('.clean').addEventListener('click', function () {
// 	tbl.querySelectorAll("td").forEach(item => {
// 		item.style.background = "none";
// 	})
// });

//тоже самое, что и верхнее только clean это id, а не класс
clean.onclick = function(){
	tbl.querySelectorAll("td").forEach(item => {
		item.style.background = "none";
	})
};


document.querySelector('.restore').addEventListener('click', function () {
	tbl.querySelectorAll("td").forEach(item => {
		if(arrayValue[item.id] === 1) item.style.background = "black";
	})
});