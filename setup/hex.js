const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.body.querySelector("#btn")
let main = document.body.querySelector('.background-change');
let colorSpan = document.body.querySelector('.color')


button.addEventListener("click",function(){
  let backArray=[]
  for(i=0;i<6;i++){
    var random =Math.floor(Math.random()*16)
    backArray.push(hex[random])
  }
  var hexString = backArray.join('')

  main.style.backgroundColor= `#${hexString}`
  colorSpan.innerText = `#${hexString}`
})





