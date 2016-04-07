(function () {
  var name = document.getElementById('name');
  var verify = document.getElementById('verify')
  var tip = document.getElementById('tip');

  var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;

  function updateTip(tipMsg, tipColor) {
    tip.innerHTML = tipMsg;
    tip.style.color = tipColor;
    name.style.borderColor = tipColor;
  }

  function validate(event) {
    var nameValue = name.value.trim().replace(chineseReg, 'xx');
    var nameLength = nameValue.length;

    if (nameLength == 0) {
      updateTip('姓名不能为空', 'red');
    }
    else if (nameLength >= 4 && nameLength <= 16) {
      updateTip('名称格式正确', 'green');
    }
    else {
      updateTip('名称长度应为4~16个字符', 'red');
    }
  }

  verify.addEventListener('click', validate);
})()
