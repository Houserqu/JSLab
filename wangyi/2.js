// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
var lines = '3 4'.split(" ");
var n = parseInt(lines[0]);
var k = parseInt(lines[1]);

var tower = '5 8 5'.split(' ');  
var actions = [];
// 操作次数中循环
let i = 0;
for(i = 0; i < k; i++){
	// 寻找最高和最低塔
	let heightLow = findHeightLow(tower);

	if(heightLow){
		tower[heightLow.height]--;
		tower[heightLow.low]++;

		actions.push(heightLow);
	} else {
		break;
	}
}

let result = findHeightLow(tower);

if(result){
	console.log((result.height - result.low) + ' ' + i);
} else {
	console.log(0 + ' ' + i);

}

actions.forEach(item => {
	console.log((item.height+1)+' '+(item.low+1));
})

function findHeightLow(arr) {
	let height = 0;
	let low = 0;
	arr.forEach((item, index) => {
		if(item > arr[height]){
			height = index;
		}
		if(item < arr[low]){
			low = index;
		}
	})

	return  height == 0 && low == 0 ? null : { height, low };
}
