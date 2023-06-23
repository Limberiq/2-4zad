function displayArray(){
    var myArray = [1, 2, 3, 4, 5];
  
    var result = "";
    for(var i = 0; i < myArray.length; i++){
      result += myArray[i] + " ";
    }
  
    document.getElementById('result').innerHTML = result;
  }