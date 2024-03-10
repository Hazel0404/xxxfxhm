document.getElementById("randomPickButton").addEventListener("click", function() {
    const names = ["徐浩淼", "徐通昊", "徐家禹", "冯玉英"];
    const pickedName = names[Math.floor(Math.random() * names.length)];
    document.getElementById("pickedName").textContent = `被点到的人是：${pickedName}`;
});
