(function() {
    var name = document.getElementById('nameInp');
    var password = document.getElementById('pawInp');
    var rePaw = document.getElementById('rePawInp');
    var num = document.getElementById('numInp');
    var email = document.getElementById('emailInp');
    var btn = document.getElementById('btn');
    var nameTip = document.getElementById('nameTip');
    var passwordTip = document.getElementById('passwordTip');
    var rePasswordTip = document.getElementById('rePasswordTip');
    var numTip = document.getElementById('numTip');
    var emailTip = document.getElementById('emailTip');

    var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;

    function tipStyle(tipMsg, tipColor, tip, tipName) {
        tip.innerHTML = tipMsg;
        tip.style.color = tipColor;
        tipName.style.borderColor = tipColor;
    }

    function focusNameCheck() {
        tipStyle('必填，长度为4~16个字符', '#a8a8a8', nameTip, name);
    }

    function blurNameCheck() {
        var nValue = name.value.trim().replace(chineseReg, '--');
        if (nValue.length === 0) {
            tipStyle('姓名不能为空', 'red', nameTip, name);
        } else if (nValue.length <= 4 || nValue >= 16) {
            tipStyle('姓名不能小于4个长度或超过16个长度', 'red', nameTip, name);
        } else {
            tipStyle('格式正确', 'green', nameTip, name);
            return true;
        }
        return false;
    }

    function focusPasswordCheck() {
        tipStyle('密码不能包含除英文及数字以外的字符', '#a8a8a8', passwordTip, password);
    }

    function blurPasswordCheck() {
        var pValue = password.value.trim();
        if (pValue.length >= 9 && pValue.length <= 16) {
            tipStyle('密码可用', 'green', passwordTip, password)
            return true;
        } else if (pValue.length <= 9 || pValue.length >= 16) {
            tipStyle('密码长度不能小于9个长度或超过16个长度', 'red', passwordTip, password)
        } else if (pValue.length === 0) {
            tipStyle('密码不能为空', 'red', passwordTip, password)
        } else {
            if (/[^0-9a-z]/gi.test(pValue)) {
                tipStyle('密码只能是数字和英文组成', 'red', passwordTip, password);
            }
        }
        return false;
    }

    function focusRepawCheck() {
        tipStyle('确认密码', '#a8a8a8', rePasswordTip, rePaw);
    }

    function blurRepawCheck() {
        var rValue = rePaw.value.trim();
        if (rValue !== password.value) {
            tipStyle('两次密码不一致', 'red', rePasswordTip, rePaw);
        } else {
            tipStyle('两次密码一致', 'green', rePasswordTip, rePaw);
            return true;
        }
        return false;
    }

    function focusNumCheck() {
        tipStyle('必填，请输入正确的手机号码', '#a8a8a8', numTip, num);
    }

    function blurNumCheck() {
        var nValue = num.value.trim();
        if (nValue.length === 0) {
            tipStyle('手机号码不能为空', 'red', numTip, num);
        } else if (!(/^\d{11}$/.test(nValue))) {
            tipStyle('手机号码格式不正确', 'red', numTip, num);
        } else {
            tipStyle('手机号码正确', 'green', numTip, num);
            return true;
        }
        return false;
    }

    function focusEmailCheck() {
        tipStyle('必填，请输入正确的邮箱地址', '#a8a8a8', emailTip, email);
    }

    function blurEmailCheck() {
        var eValue = email.value.trim();
        if (eValue.length === 0) {
            tipStyle('邮箱不能为空', 'red', emailTip, email);
        } else if (!(/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(eValue))) {
            tipStyle('邮箱格式不正确', 'red', emailTip, email);
        } else {
            tipStyle('邮箱格式正确', 'green', emailTip, email);
            return true;
        }
        return false;
    }

    function check() {
        if (blurNameCheck() & blurPasswordCheck() & blurRepawCheck() & blurNumCheck() & blurEmailCheck()) {
            alert('全部填写正确!');
        } else {
            alert('有错误!');
        }
    }

    name.onfocus = focusNameCheck;
    name.onblur = blurNameCheck;

    password.onfocus = focusPasswordCheck;
    password.onblur = blurPasswordCheck;

    rePaw.onfocus = focusRepawCheck;
    rePaw.onblur = blurRepawCheck;

    num.onfocus = focusNumCheck;
    num.onblur = blurNumCheck;

    email.onfocus = focusEmailCheck;
    email.onblur = blurEmailCheck;

    btn.onclick = check;
})()
