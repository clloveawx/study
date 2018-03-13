
const R = require('ramda');

//全排列
const qpl = (n) =>{
	const books = {};
	const results = [];
	let result = [];
	const dfs = (step) =>{  //处理第step个箱子里放的数字

		if(step === n + 1){  //说明放完了n个箱子,完成一次排列
			results.push(R.clone(result));
			return;
		}
		
		//尝试每一张牌
		for(let i = 1; i <= n; i++){
			if (!books[i]){  //如果该张牌已经使用,使用下一张
				//标记该张牌已使用
				books[i] = 1;
				//记录第step个箱子里放入牌i
				result[step - 1] = i;
				//去放下一个箱子
				dfs(step + 1);
				books[i] = 0;
			}
		}
		return ;
	};
	dfs(1);
	return results;
}

//console.log(qpl(6))

// 填充等式
function ds() {
	const books = {};
	const results = [];
	let result = [];
	const dfs = (step) =>{
		if(step === 10){
			if(result[0] * 100 + result[1] * 10 + result[2] + result[3] * 100 + result[4] * 10 + result[5] === result[6] * 100 + result[7] * 10 + result[8]){
				results.push(R.clone(result));
			}
			return;
		}
		
		for(let i = 1; i <= 9; i++){
			if(!books[i]){
				result[step - 1] = i;
				books[i] = 1;
				dfs(step + 1);
				books[i] = 0;
			}
		}
		return;
	};
	dfs(1);
	return results;
}
//console.log(ds())

//迷宫
// (1, 1) -> (p, q)
function mg(map, p, q) {
	
	let step = 0, result = [], minStep;
	const books = [[], [], [], [], []];  //标记走过的数组
	const results = [];
	const best = [];
	
	const dfs = (x, y) => {  //位置(x, y)时应该怎么办
		
		if(x === p && y === q){  //找到了一条路径
			if(minStep == null){
				minStep = step;
			}
			
			if(step < minStep){
				minStep = step;
			}
			results.push({
				step,
				way: R.clone(result),
			})
			step = 0; //重置步数
			return;
		}
		
		const next = [
			[0, 1],  //右
			[1, 0],  //下
			[0, -1],  //左
			[-1, 0],  //上
		];          //定义下一步的走法
		
		let tx, ty;  //下一步的位置
		
		//走下一步  四种走法
		for(let i = 1; i <= next.length; i++){
			//下一步到大的位置
			[tx, ty] = [x + next[i - 1][0], y + next[i - 1][1]];
			//判断是否越界
			if(tx < 1 || tx > map.length || ty < 1 || ty > map[0].length){
				continue;
			}
			
			if(!map[tx - 1][ty -1] && !books[tx - 1][ty - 1]){   //该位置不是障碍物 并且没有走过
				step++;  //成功走一步
				result.push([tx, ty])
				books[tx - 1][ty -1] = 1;
				dfs(tx, ty);
				books[tx - 1][ty -1] = 0;
			}
		}
		return;
	}
	dfs(1, 1);
	
	const bests = results.filter(r => r.step === minStep)
	
	return bests;
}
console.log(mg([
	[0, 0, 1, 0],
	[0, 0, 0, 0],
	[0, 0, 1, 0],
	[0, 1, 0, 0],
	[0, 0, 0, 1]
], 4, 3))










