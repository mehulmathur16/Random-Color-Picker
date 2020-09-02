

function random1(){

    var hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    
    var res = "" ;

    for(var i=0 ; i<6 ; i++){

        var r = Math.floor(Math.random() * 16);
        
        res = res + hex[r];    

    }
    
    res = "#" + res;

    document.getElementById("color").style.backgroundColor = res;
    
    document.getElementById("n").innerHTML = res;

}