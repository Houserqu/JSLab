    var f_arr = "3 3 2".split(" ");
    var N = parseInt(f_arr[0]);
    var K = parseInt(f_arr[1]);
    var H = parseInt(f_arr[2]);
    
    var tiaoban = ['1','3','6'];
    
    // for(var k = 0; k < N; k++){
    //     tiaoban.push(parseInt(readline()));
    // }
    
    var cur_h = 0;
    for(var i = 0; i < N; i++){
        if(tiaoban[i] - cur_h <= H){
            cur_h = cur_h + ( tiaoban[i]-cur_h ) * 2;
        } else {
            break;
        }
    }
    
    console.log(cur_h);