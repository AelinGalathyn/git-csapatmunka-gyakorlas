function calculateTriangle() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
    if(canItBeATriangle(side1, side2, side3)){
    var perimeter = side1 + side2 + side3;
    var s = perimeter / 2;
    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    document.getElementById("result").innerHTML = "A háromszög kerülete: " + perimeter + "<br>A háromszög területe: " + area;
    }
    else{
        alert("Hibás értékek!")
        document.getElementById("side1").value=""
        document.getElementById("side2").value=""
        document.getElementById("side3").value=""
    }
  }

function canItBeATriangle(side1, side2, side3){
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return false; 
      } else {
        return true; 
      }
}