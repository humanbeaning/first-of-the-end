// 当前页的索引
let currentPage = 1;

// 加载指定页面的内容
function loadPage(pageNumber) {
    const pageFilePath = `pages/page${pageNumber}.html`;

    // 使用 fetch 加载 HTML 文件内容
    fetch(pageFilePath)
        .then(response => response.text())
        .then(data => {
            // 将加载的内容插入到 `typed-output` 容器中
            document.getElementById('typed-output').innerHTML = ""; // 清空旧内容

            // 使用 Typed.js 显示打字效果
            new Typed('#typed-output', {
                strings: [data],           // 加载的 HTML 内容
                typeSpeed: 50,             // 打字速度
                backSpeed: 0,              // 不删除内容
                showCursor: false,         // 不显示光标
                onComplete: () => {
                    // 显示“点击继续”提示
                    document.querySelector('.click-hint').style.display = 'block';
                }
            });
        })
        .catch(error => console.error('Error loading page:', error));
}

// 页面加载时显示第一页
loadPage(currentPage);

// 点击事件监听器，用于翻页
document.addEventListener('click', () => {
    // 隐藏“点击继续”提示
    document.querySelector('.click-hint').style.display = 'none';

    // 进入下一页
    currentPage += 1;
    loadPage(currentPage);
});
