/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let arrC1,arrC2,arrC3,arrC4,arrC5,arrC6,arrC7,columns,arrR1 ,arrR2,arrR3,arrR4,arrR5,arrR6, rows , columnsToAdd ,columnsTocount
let turn = 0

/*------------------------ Cached Element References ------------------------*/
// cashed all the columns
let c1 = document.querySelector("c1")
let c2 = document.querySelector("c2")
let c3 = document.querySelector("c3")
let c4 = document.querySelector("c4")
let c5 = document.querySelector("c5")
let c6 = document.querySelector("c6")
let c7 = document.querySelector("c7")

let c1r1 = document.querySelector("c1r1")
let c1r2 = document.querySelector("c1r2")
let c1r3 = document.querySelector("c1r3")
let c1r4 = document.querySelector("c1r4")
let c1r5 = document.querySelector("c1r5")
let c1r6 = document.querySelector("c1r6")


let c2r1 = document.querySelector("c2r1")
let c2r2 = document.querySelector("c2r2")
let c2r3 = document.querySelector("c2r3")
let c2r4 = document.querySelector("c2r4")
let c2r5 = document.querySelector("c2r5")
let c2r6 = document.querySelector("c2r6")


let c3r1 = document.querySelector("c3r1")
let c3r2 = document.querySelector("c3r2")
let c3r3 = document.querySelector("c3r3")
let c3r4 = document.querySelector("c3r4")
let c3r5 = document.querySelector("c3r5")
let c3r6 = document.querySelector("c3r6")


let c4r1 = document.querySelector("c4r1")
let c4r2 = document.querySelector("c4r2")
let c4r3 = document.querySelector("c4r3")
let c4r4 = document.querySelector("c4r4")
let c4r5 = document.querySelector("c4r5")
let c4r6 = document.querySelector("c4r6")


let c5r1 = document.querySelector("c5r1")
let c5r2 = document.querySelector("c5r2")
let c5r3 = document.querySelector("c5r3")
let c5r4 = document.querySelector("c5r4")
let c5r5 = document.querySelector("c5r5")
let c5r6 = document.querySelector("c5r6")


let c6r1 = document.querySelector("c6r1")
let c6r2 = document.querySelector("c6r2")
let c6r3 = document.querySelector("c6r3")
let c6r4 = document.querySelector("c6r4")
let c6r5 = document.querySelector("c6r5")
let c6r6 = document.querySelector("c6r6")


let c7r1 = document.querySelector("c7r1")
let c7r2 = document.querySelector("c7r2")
let c7r3 = document.querySelector("c7r3")
let c7r4 = document.querySelector("c7r4")
let c7r5 = document.querySelector("c7r5")
let c7r6 = document.querySelector("c7r6")



/*----------------------------- Event Listeners -----------------------------*/
c1.addEventListener("click",drop=>{addDisk(0)})
c2.addEventListener("click",drop=>{addDisk(1)})
c3.addEventListener("click",drop=>{addDisk(2)})
c4.addEventListener("click",drop=>{addDisk(3)})
c5.addEventListener("click",drop=>{addDisk(4)})
c6.addEventListener("click",drop=>{addDisk(5)})
c7.addEventListener("click",drop=>{addDisk(6)})

/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  arrC1 = [c1r1, c1r2, c1r3, c1r4, c1r5, c1r6]
  arrC2 = [c2r1, c2r2, c2r3, c2r4, c2r5, c2r6]
  arrC3 = [c3r1, c3r2, c3r3, c3r4, c3r5, c3r6]
  arrC4 = [c4r1, c4r2, c4r3, c4r4, c4r5, c4r6]
  arrC5 = [c5r1, c5r2, c5r3, c5r4, c5r5, c5r6]
  arrC6 = [c6r1, c6r2, c6r3, c6r4, c6r5, c6r6]
  arrC7 = [c7r1, c7r2, c7r3, c7r4, c7r5, c7r6]


 columnsToAdd = [arrC1,arrC2,arrC3,arrC4,arrC5,arrC6,arrC7]
 columnsToAdd.forEach(c=>{
   c.forEach(col=>{
     col.style.backgroundColor = 'white'
   })
 })
  turn = 1
}
function addDisk(i){
  let c = columnsToAdd[i]
if(turn === 1){
  c[0].style.backgroundColor = 'red'
  c.shift()
  changeturn()
} else if (turn === 2){
  c[0].style.backgroundColor = 'yellow'
  c.shift()
  //columnsTocount[i].push(2)
  changeturn()
}

}
function changeturn(){
  if (turn === 1){
    turn =2
   isWinner()
  } else if (turn === 2){
    turn =1
   isWinner()
  }
}
function isWinner(){
  let cc1= [c1r1, c1r2, c1r3, c1r4, c1r5, c1r6]
  let cc2= [c2r1, c2r2, c2r3, c2r4, c2r5, c2r6] 
  let cc3= [c3r1, c3r2, c3r3, c3r4, c3r5, c3r6]
  let cc4= [c4r1, c4r2, c4r3, c4r4, c4r5, c4r6]
  let cc5= [c5r1, c5r2, c5r3, c5r4, c5r5, c5r6]
  let cc6= [c6r1, c6r2, c6r3, c6r4, c6r5, c6r6]
  let cc7= [c7r1, c7r2, c7r3, c7r4, c7r5, c7r6]
  columns = [cc1,cc2,cc3,cc4,cc5,cc6,cc7]
  let rr1 =[c1r1,c2r1,c3r1,c4r1,c5r1,c6r1,c7r1]
  let rr2 =[c1r2,c2r2,c3r2,c4r2,c5r2,c6r2,c7r2]
  let rr3 =[c1r3,c2r3,c3r3,c4r3,c5r3,c6r3,c7r3]
  let rr4 =[c1r4,c2r4,c3r4,c4r4,c5r4,c6r4,c7r4]
  let rr5 =[c1r5,c2r5,c3r5,c4r5,c5r5,c6r5,c7r5]
  let rr6 =[c1r6,c2r6,c3r6,c4r6,c5r6,c6r6,c7r6]
  rows = [rr1,rr2,rr3,rr4,rr5,rr6]
rows.forEach(eachRow =>{
 for(let row=0; row<eachRow.length; row ++){
  for(i=0; i<4 ; i++){
    let one = eachRow[row].style.backgroundColor
    let two = eachRow[row+1].style.backgroundColor
    let three = eachRow[row+2].style.backgroundColor
    let four = eachRow[row+3].style.backgroundColor
   
    if(colorCheck(one,two,three,four)=== true){
    console.log('1')
    }
  }
 }
})
}
function colorCheck(one,two,three,four){
  if (one === two && one === three && one === four && one !== 'white'){
    return true
  }else {return false}

}