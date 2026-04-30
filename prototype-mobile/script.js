document.addEventListener("DOMContentLoaded", () => {
    const helperText = document.getElementById("helperText");
    const input = document.getElementById("mobileInput");
    const submitButton = document.getElementById("submitNote");
    const heroAction = document.getElementById("heroAction");
    const toggleTips = document.getElementById("toggleTips");

    submitButton?.addEventListener("click", () => {
        const value = input?.value.trim() ?? "";
        helperText.textContent = value ? `已记录验证场景：${value}` : "先输入一句你要验证的场景。";
    });

    heroAction?.addEventListener("click", () => {
        helperText.textContent = "这里通常接首屏 CTA，比如开始体验、立即下单、继续注册。";
    });

    toggleTips?.addEventListener("click", () => {
        const expanded = toggleTips.dataset.expanded === "true";
        toggleTips.dataset.expanded = expanded ? "false" : "true";
        helperText.textContent = expanded
            ? "建议一句话写清你的假设。"
            : "移动端原型优先验证首屏信息密度、单手操作路径和关键反馈。";
    });
});
