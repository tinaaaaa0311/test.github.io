let icecreamFlavor = ""; // 用于存儲冰淇淋口味

function nextPage(nextId, flavor) {
    if (flavor) {
        icecreamFlavor = flavor; // 存儲使用者選擇的口味
    }

    // 隱藏所有頁面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // 顯示下一頁
    const nextPageElement = document.getElementById(nextId);
    nextPageElement.classList.add('active');

    // 如果是第六頁，顯示相應的消息和圖片
    if (nextId === 'page6') {
        const messageElement = document.getElementById('icecream-message');
        const imageElement = document.getElementById('icecream-image');

        switch (icecreamFlavor) {
            case 'vanilla':
                messageElement.innerText = "你喜歡香草冰淇淋！";
                imageElement.src = "https://i.imgur.com/KJPx00b.jpeg"; // 替換為香草冰淇淋的圖片路徑
                break;
            case 'chocolate':
                messageElement.innerText = "你喜歡巧克力冰淇淋！";
                imageElement.src = "https://i.imgur.com/Hg69m9b.jpeg"; // 替換為巧克力冰淇淋的圖片路徑
                break;
            case 'fruit':
                messageElement.innerText = "你喜歡水果冰淇淋！";
                 
                imageElement.src = "https://i.imgur.com/p0dsceH.jpeg"; // 替換為水果冰淇淋的圖片路徑
                break;
            case 'taro':
                messageElement.innerText = "你喜歡芋頭冰淇淋！\n (反社會人格嗎)";
                imageElement.src = "https://i.imgur.com/iByL3he.jpeg"; // 替換為芋頭冰淇淋的圖片路徑
                break;
            default:
                messageElement.innerText = "";
                imageElement.src = "";
                break;
        }
    }
}

// 初始化，顯示第一頁
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('page1').classList.add('active');
});