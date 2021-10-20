/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let arrC1,arrC2,arrC3,arrC4,arrC5,arrC6,arrC7
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
c1.addEventListener("click",drop=>{addDisk(c1)})
c2.addEventListener("click",drop=>{addDisk(c2)})
c3.addEventListener("click",drop=>{addDisk(c3)})
c4.addEventListener("click",drop=>{addDisk(c4)})
c5.addEventListener("click",drop=>{addDisk(c5)})
c6.addEventListener("click",drop=>{addDisk(c6)})
c7.addEventListener("click",drop=>{addDisk(c7)})

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

  turn = 1
}
function addDisk(c){
  if (c=== c1){
    if(turn === 1){
    arrC1[0].classList.add("red")
    arrC1.shift()
    changeturn()
    } else if (turn === 2){
      arrC1[0].classList.add("yellow")
      arrC1.shift()
      changeturn()
    }
  } else if (c=== c2){
    if(turn === 1){
    arrC2[0].classList.add("red")
    arrC2.shift()
    changeturn()
    } else if (turn === 2){
      arrC2[0].classList.add("yellow")
      arrC2.shift()
      changeturn()
    }
    
  } else if (c=== c3){
    if(turn === 1){
    arrC3[0].classList.add("red")
    arrC3.shift()
    changeturn()
    } else if (turn === 2){
      arrC3[0].classList.add("yellow")
      arrC3.shift()
      changeturn()
    }
  } else if (c=== c4){
    if(turn === 1){
    arrC4[0].classList.add("red")
    arrC4.shift()
    changeturn()
    } else if (turn === 2){
      arrC4[0].classList.add("yellow")
      arrC4.shift()
      changeturn()
    }
  } else if (c=== c5){
    if(turn === 1){
    arrC5[0].classList.add("red")
    arrC5.shift()
    changeturn()
    } else if (turn === 2){
      arrC5[0].classList.add("yellow")
      arrC5.shift()
      changeturn()
    }
  } else if (c=== c6){
    if(turn === 1){
    arrC6[0].classList.add("red")
    arrC6.shift()
    changeturn()
    } else if (turn === 2){
      arrC6[0].classList.add("yellow")
      arrC6.shift()
      changeturn()
    }
  } else if (c=== c7){
    if(turn === 1){
    arrC7[0].classList.add("red")
    arrC7.shift()
    changeturn()
    } else if (turn === 2){
      arrC7[0].classList.add("yellow")
      arrC7.shift()
      changeturn()
    }
  }
}
function changeturn(){
  if (turn === 1){
    turn =2
  } else if (turn === 2){
    turn =1
  }
}
