

/**
 * 判断能走的步数
 * @param {array} path 
 * @param {int} N 
 * @param {int} M 
 * @param {int} X 
 * @param {int} Y 
 */
function howLong(path, N, M, X, Y){
  var i = 0;
  for(i; i < path.length; i++) {
    switch(path[i]){
      case 'u': X--; break;
      case 'd': X++; break;
      case 'l': Y--; break;
      case 'r': Y++; break;
      default : break; 
    }

    console.log(X,Y);

    if(Y < 1 || Y > M || X < 1 || X > N){
      break;
    }
  
  }
  console.log(i+1);

}


howLong(['u','u','u','r','r','d','d','d','d','d','l'], 6, 6, 4, 2);
