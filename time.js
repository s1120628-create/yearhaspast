// 假設這是你的引入時間數值（毫秒時間戳記）
const timestamp = 1718002613000; 
const date = new Date(timestamp);

// 1. 取得各個時間單位
const year = date.getFullYear();
// 月份從 0 開始計算，所以要加 1
const month = String(date.getMonth() + 1).padStart(2, '0'); 
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

// 2. 組合字串成 YYYY-MM-DD HH:mm:ss
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

// 3. 渲染至 HTML
document.getElementById('datetime-display').textContent = formattedDateTime;
