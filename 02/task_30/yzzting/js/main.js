(function(){
    var name = document.getElementById('nameInp');
    var password = document.getElementById('pawInp');
    var rePaw = document.getElementById('repawInp');
    var num = document.getElementById('num');
    var btn = document.getElementById('btn');
    var tip = document.getElementById('tip');
    var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;
    var fValue = name.value.trim().replace(chineseReg,'--');
    function tipStyle(tipMsg,tipColor) {
        tip.innerHTML = tipMsg;
        tip.style.color = tipColor;
        name.style.borderColor = tipColor;
    }

    function focusNameCheck(event) {
        if (fValue.length === 0) {
            tipStyle('必填，长度为4~16个字符','#a8a8a8');
        }
    }

    function blurNameCheck(event) {
        if (fValue.length === 0) {
            tipStyle('姓名不能为空','red');
        }
    }

    name.onfocus = focusNameCheck;
    name.onblur = blurNameCheck;
})()
