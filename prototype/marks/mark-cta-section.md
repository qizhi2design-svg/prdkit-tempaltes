---
id: mark-cta-section
title: 行动号召区域
element: .cta-section
position: { x: 50%, y: 75% }
---

# 行动号召 (CTA) 区域设计

## 设计目标
引导用户完成核心操作，通过视觉层次和交互反馈提升转化率。

## 布局结构

### 输入组合
采用水平布局，输入框和按钮紧密结合：
```
[输入框 ────────────] [提交按钮]
```

### 响应式适配
- **桌面端**: 水平排列，最大宽度 600px
- **移动端**: 垂直堆叠，全宽显示

## 交互设计

### 输入框
- **占位符**: 提示用户输入内容
- **聚焦效果**: 边框颜色变化 + 阴影
- **回车提交**: 支持键盘快捷操作

```javascript
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});
```

### 提交按钮
1. **默认状态**
   - 品牌色背景 (#667eea)
   - 白色文字
   - 圆角 8px

2. **悬停状态**
   - 颜色加深 (#5568d3)
   - 轻微上浮效果
   - 阴影增强

3. **点击反馈**
   - 缩放动画
   - 触觉反馈（移动端）

## 反馈机制

### 结果消息显示
```javascript
function showResult(message, type) {
    // type: 'success' | 'error'
    resultDiv.textContent = message;
    resultDiv.className = `result-message show ${type}`;
    
    // 3秒后自动隐藏
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 3000);
}
```

### 消息类型
- **成功**: 绿色背景，显示确认信息
- **错误**: 红色背景，显示错误提示

### 动画效果
- 淡入: `opacity 0 → 1`
- 上滑: `translateY(10px) → 0`
- 过渡时间: 0.3s

## 验证逻辑

### 输入校验
```javascript
const inputValue = userInput.value.trim();

if (inputValue === '') {
    showResult('请输入内容', 'error');
    return;
}
```

### 校验规则
- 非空检查
- 去除首尾空格
- 可扩展：长度限制、格式验证等

## 用户体验优化

### 1. 即时反馈
- 输入时实时验证
- 错误提示清晰明确
- 成功后清空输入框

### 2. 键盘友好
- Tab 键切换焦点
- Enter 键提交表单
- Esc 键清空输入

### 3. 视觉引导
- 按钮使用对比色突出
- 输入框聚焦时有明显提示
- 消息提示位置固定，不干扰布局

## 可访问性

### ARIA 属性
```html
<input 
    type="text" 
    aria-label="用户输入"
    aria-required="true"
>
<button aria-label="提交">提交</button>
```

### 键盘导航
- 所有交互元素可通过 Tab 访问
- 焦点状态清晰可见
- 支持屏幕阅读器

## 性能考虑

### 防抖处理
对于实时验证，建议添加防抖：
```javascript
let debounceTimer;
userInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        // 验证逻辑
    }, 300);
});
```

### 事件委托
如果有多个类似的 CTA 区域，使用事件委托减少监听器数量。

## 扩展建议

### 加载状态
提交时显示加载指示器：
```javascript
submitBtn.disabled = true;
submitBtn.textContent = '提交中...';
// 处理完成后恢复
```

### 多步骤表单
可扩展为多步骤流程，使用进度指示器。

### A/B 测试
测试不同的按钮文案、颜色和位置，优化转化率。

---

💡 **转化优化**: CTA 区域是用户旅程的关键节点，确保交互流畅、反馈及时、视觉突出。
