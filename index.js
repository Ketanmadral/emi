function ChangeAmount(){
  document.getElementById("txtAmount").value = document.getElementById("SliderAmount").value;
 }
  
  function ChangeYear(){
    
  document.getElementById("txtYear").value = document.getElementById("SliderYear").value;
    
  }
  
  function ChangeInterest(){
    
 document.getElementById("txtInterest").value = document.getElementById("SliderInterest").value;
    
  }
  
function Click(){
  
  var amount= document.getElementById("txtAmount").value;
  var year= document.getElementById("txtYear").value * 12;
  var interest= document.getElementById("txtInterest").value /1200;
  
  
const result = amount * interest / (1- (Math.pow (1 / (1 + interest),year)));
  
  document.getElementById("total").innerHTML= result.toFixed(2);

document.getElementById("result").style.display = "block";
  
}