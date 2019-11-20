// Your code here
let dodger = document.getElementById("dodger")
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }else if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
  });

function moveDodgerLeft(){
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
     
        dodger.style.left = `${left - 5}px`;
}

function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px", "")
    let right = parseInt(rightNumbers, 10)
    dodger.style.left =  `${right + 5}px`
    
}