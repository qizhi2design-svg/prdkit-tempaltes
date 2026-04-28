// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('原型页面已加载');

    // 获取 DOM 元素
    const submitBtn = document.getElementById('submitBtn');
    const userInput = document.getElementById('userInput');
    const resultDiv = document.getElementById('result');

    // 提交按钮点击事件
    submitBtn.addEventListener('click', function() {
        const inputValue = userInput.value.trim();

        if (inputValue === '') {
            showResult('请输入内容', 'error');
            return;
        }

        // 模拟处理逻辑
        showResult(`已接收到您的输入: "${inputValue}"`, 'success');

        // 清空输入框
        userInput.value = '';
    });

    // 输入框回车事件
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });

    // 功能卡片悬停效果
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            console.log('卡片悬停:', this.querySelector('h3').textContent);
        });
    });
});

// 显示结果消息
function showResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.className = `result-message show ${type}`;

    // 3秒后隐藏消息
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 3000);
}

// 示例：添加更多交互功能
function initializePrototype() {
    console.log('初始化原型功能...');

    // 在这里添加更多初始化逻辑
    // 例如：数据加载、事件监听、动画设置等
}

// 调用初始化函数
initializePrototype();
