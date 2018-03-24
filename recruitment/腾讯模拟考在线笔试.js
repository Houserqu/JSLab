//var n = parseInt(readline());

//for(var i = 0; i < n; i++){
    
    var x = "0 0 4 4".split(" ");
    var y = "0 4 0 4".split(" ");
    var l = [];

    console.log(x,y)
    
    for(var j = 1; j < 4; j++){
      console.log()
      l.push(Math.pow(Math.pow(parseInt(x[j])-parseInt(x[0]),2) + Math.pow(parseInt(y[j])-parseInt(y[0]),2), 0.5));
    }
    
    l.sort();
    console.log(l)
    
    if(l[0] == l[1] && l[2] == Math.pow(2, 0.5)*l[0]){
        console.log('Yes');
    }else{
        console.log('No')
    } 

    console.log(parseFloat(2.8284271247461903,3));
//}