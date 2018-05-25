/**
 * 适配器模式
 * 例如不同电脑通过 多功能读卡器都可以连接内存卡，还有多功能插排插口
 */

 // 不同的内存卡数据存储键不一样

 // 内存卡 A
var cardA = {
  type: 'cardA',
  cardAData: 'card a data'
}

// 内存卡 B
var cardB = {
  type: 'cardB',
  cardBData: 'card b data'
}

var Adapter = {}; // 创建适配器

Adapter.read = function(card) {
  // 适配逻辑
  let data;
  switch (card.type) {
    case 'cardA' : data = card.cardAData; break;
    case 'cardB': data = card.cardBData; break;
  }

  console.log(data)
}


Adapter.read(cardA);
Adapter.read(cardB);
