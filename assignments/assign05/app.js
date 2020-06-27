function getNumber(num){
    
    var result =document.getElementById("result");
    result.value += num;
}
function clearResult(){
    var result =document.getElementById("result");
    result.value = "";
}

function backSpace(){
    // //var result =document.getElementById("result");
    // // var number = result.value;
   // //  var len = number.length - 1;
  // //  var newNumber = number.substring( 0, len );
 // //  result.value = newNumber;
             //OR
var result =document.getElementById("result").value;
document.getElementById("result").value = result.substring(0, result.length-1);

}

function squar(){
    var result =document.getElementById("result").value;
    
    document.getElementById("result").value= Math.pow(result,2);
    
}

function sqrt(){
    var result =document.getElementById("result").value;
    
    document.getElementById("result").value= Math.sqrt(result);
    
}


function getResult(){
    var result =document.getElementById("result");
    result.value= eval(result.value);
}
