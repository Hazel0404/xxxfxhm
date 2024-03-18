document.getElementById("randomPickButton").addEventListener("click", function() {
    const names = ['马驰恒', '高添铄', '金沫函', '岳柏帆', '尹怡丁', '杨翼帆', '张兆慷', '刘潇蔚', '田悦然', '郑寒月', '申雪', '陈轩宇', '刘雅', '倪子贺', '和芊辰', '李思达', '王优优', '陈熙薷', '杨博铄', '宋紫嫚', '张馨宇', '张润一', '岳佳彤', '侯文鑫', '刘梦洁', '孙颢宸', '赵淑颖', '胡竞文', '丁焱鑫'];
    const pickedName = names[Math.floor(Math.random() * names.length)];
    document.getElementById("pickedName").textContent = `被点到的人是：${pickedName}`;
});
