/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a,b)=> a - b);
  s.sort((a, b) => a - b);

  console.log(g,s);
  
  let gi = 0, si = 0;
  
  while(gi < g.length && si <s.length){
    if(g[gi] <= s[si]){
      gi++
    }
    
    si++
  }
  return gi;
};

console.log(findContentChildren([10, 9, 8, 7],[5, 6, 7, 8]))