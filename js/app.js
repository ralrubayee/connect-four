/*-------------------------------- Constants --------------------------------*/
const click = new Audio('./audio/click.wav');
const btn = new Audio('./audio/btn.wav');
const cheer = new Audio('./audio/cheer.wav');
/*---------------------------- Variables (state) ----------------------------*/
let arrC1,arrC2,arrC3,arrC4,arrC5,arrC6,arrC7,columns,arrR1 ,arrR2,arrR3,arrR4,arrR5,arrR6, rows , columnsToAdd ,columnsTocount
let turn = 0

/*------------------------ Cached Element References ------------------------*/
let a =document.querySelector("#a")
const popUp = document.querySelector("#pop-up")
const board = document.querySelector("board")
const next = document.querySelector(".next")
const firstPlayer = document.querySelector("#red-player")
const secondPlayer = document.querySelector("#yellow-player")
const reset = document.querySelector("#reset")
const backToMain = document.querySelector("#back-to-main")
const lightmood = document.querySelector("#light-moood")
const body = document.querySelector("body")
const popUp2 = document.querySelector("#pop-up2")


// cashed all the columns
let stat =document.querySelector("status")
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
next.addEventListener("click",init)
reset.addEventListener("click",init)
backToMain.addEventListener("click",back)
lightmood.addEventListener("click", lightMood)

c1.addEventListener("click",drop=>{addDisk(0)})
c2.addEventListener("click",drop=>{addDisk(1)})
c3.addEventListener("click",drop=>{addDisk(2)})
c4.addEventListener("click",drop=>{addDisk(3)})
c5.addEventListener("click",drop=>{addDisk(4)})
c6.addEventListener("click",drop=>{addDisk(5)})
c7.addEventListener("click",drop=>{addDisk(6)})

/*-------------------------------- Functions --------------------------------*/

function init(){

btn.play()
  popUp.style.display = 'none'

  arrC1 = [c1r1, c1r2, c1r3, c1r4, c1r5, c1r6]
  arrC2 = [c2r1, c2r2, c2r3, c2r4, c2r5, c2r6]
  arrC3 = [c3r1, c3r2, c3r3, c3r4, c3r5, c3r6]
  arrC4 = [c4r1, c4r2, c4r3, c4r4, c4r5, c4r6]
  arrC5 = [c5r1, c5r2, c5r3, c5r4, c5r5, c5r6]
  arrC6 = [c6r1, c6r2, c6r3, c6r4, c6r5, c6r6]
  arrC7 = [c7r1, c7r2, c7r3, c7r4, c7r5, c7r6]

console.log(firstPlayer.value)

stat.innerHTML=`${firstPlayer.value} Starts the Game`

 columnsToAdd = [arrC1,arrC2,arrC3,arrC4,arrC5,arrC6,arrC7]
 columnsToAdd.forEach(c=>{
   c.forEach(col=>{
     col.style.backgroundColor = 'white'
   })
 })
  turn = 1

}
function lightMood(){
  btn.play()
    body.className = body.className === "light" ? "" : "light" 
}

function back(){
  btn.play()
  popUp.style.display = ''
}
function addDisk(i){
  let c = columnsToAdd[i]
if(turn === 1){
  drop(c,'red')
  setTimeout(function(){
   
    c[0].style.backgroundColor = 'red'
    c.shift()
    click.play()
    changeturn()},500
    );

} else if (turn === 2){
  drop(c,'yellow')
  setTimeout(function(){
    c[0].style.backgroundColor = 'yellow'
    c.shift()
    click.play()
    changeturn()},500
    );
}
}
function drop(c,str){
  let a = c.length -1
  for(i = a; i > 0 ;i--){
    let cc = c[i]
    if (i>4){
    setTimeout(function(){
    cc.style.backgroundColor = str},100
    );
    setTimeout(function(){
      cc.style.backgroundColor = 'white'},200
    );
    } else if ( i>3){
      setTimeout(function(){
        cc.style.backgroundColor = str},200
        );
        setTimeout(function(){
          cc.style.backgroundColor = 'white'},300
        );
    } else if (i>2){
      setTimeout(function(){
        cc.style.backgroundColor = str},300
        );
        setTimeout(function(){
          cc.style.backgroundColor = 'white'},400
        );
    }else if (i>1){
      setTimeout(function(){
        cc.style.backgroundColor = str},400
        );
        setTimeout(function(){
          cc.style.backgroundColor = 'white'},500
        );
    }
  }
  }


function changeturn(){
  if (turn === 1){
    stat.innerHTML = `${secondPlayer.value}'s Turn`
    board.classList.remove("red-shadow")
    board.classList.add("yellow-shadow")
    turn =2
    isWinner()
  } else if (turn === 2){
    board.classList.remove("yellow-shadow")
    board.classList.add("red-shadow")
    stat.innerHTML = `${firstPlayer.value}'s Turn`
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

    let diagonal1 = [c4r1,c5r2,c6r3,c7r4]
    let diagonal2 = [c1r3,c2r4,c3r5,c4r6]
    let diagonal7 = [c1r4,c2r3,c3r2,c4r1]
    let diagonal8 = [c4r6,c5r5,c6r4,c7r3]
    let diagonalA1=[diagonal1,diagonal2, diagonal7,diagonal8 ]

    let diagonal3 = [c3r1,c4r2,c5r3,c6r4,c7r5]
    let diagonal4 = [c1r2,c2r3,c3r4,c4r5,c5r6]
    let diagonal9 = [c1r5,c2r4,c3r3,c4r2,c5r1]
    let diagonal10 = [c3r6,c4r5,c5r4,c6r3,c7r2]
    let diagonalA2=[diagonal3,diagonal4, diagonal9,diagonal10 ]

    let diagonal5 = [c2r1,c3r2,c4r3,c5r4,c6r5,c7r6]
    let diagonal6 = [c1r1,c2r2,c3r3,c4r4,c5r5,c6r6]
    let diagonal11 =[c1r6,c2r5,c3r4,c4r3,c5r2,c6r1]
    let diagonal12 = [c2r6,c3r5,c4r4,c5r3,c6r2,c7r1]
    let diagonalA3=[diagonal5,diagonal6, diagonal11,diagonal12 ]

  columns.forEach(column=>{
    for(i=0; i<3 ; i++){
      let one = column[i].style.backgroundColor
      let two = column[i+1].style.backgroundColor
      let three = column[i+2].style.backgroundColor
      let four = column[i+3].style.backgroundColor
     
      if(colorCheck(one,two,three,four)=== true){
       celebration()
      }
    }
  })
 
  //********* */
  rows.forEach(eachRow =>{
     for(i=0; i<4 ; i++){
       let one = eachRow[i].style.backgroundColor
       let two = eachRow[i+1].style.backgroundColor
       let three = eachRow[i+2].style.backgroundColor
       let four = eachRow[i+3].style.backgroundColor
      
       if(colorCheck(one,two,three,four)=== true){
         celebration()
       }
     }
    })

    //********** */
    diagonalA1.forEach(d=>{
      let one = d[0].style.backgroundColor
       let two = d[1].style.backgroundColor
       let three = d[2].style.backgroundColor
       let four = d[3].style.backgroundColor
       if(colorCheck(one,two,three,four)=== true){
        celebration()
      }
    })

    diagonalA2.forEach(d=>{
      for(i=0; i<2 ;i++){
        let one = d[i].style.backgroundColor
        let two = d[i+1].style.backgroundColor
        let three = d[i+2].style.backgroundColor
        let four = d[i+3].style.backgroundColor
        if(colorCheck(one,two,three,four)=== true){
         celebration()
       }
      }
    })

    diagonalA3.forEach(d=>{
      for(i=0; i<3 ;i++){
        let one = d[i].style.backgroundColor
        let two = d[i+1].style.backgroundColor
        let three = d[i+2].style.backgroundColor
        let four = d[i+3].style.backgroundColor
        if(colorCheck(one,two,three,four)=== true){
         celebration()
       }
      }
    })
  }

function colorCheck(one,two,three,four){
  if (one === two && one === three && one === four && one !== 'white'){
    return true
  }else {return false}

}
function celebration(){
  if (turn === 1){
    stat.innerHTML = `${secondPlayer.value} Won the Game!`

  } else { 
    stat.innerHTML = `${firstPlayer.value} Won the Game!`
  }
  cheer.play()
  setTimeout(function(){
    init()},10000
  );
}