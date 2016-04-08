(function() {
  var name = document.getElementById('name');
  var nameTip = document.getElementById('nameTip');
  var password = document.getElementById('password');
  var passwordTip = document.getElementById('passwordTip');
  var confirm = document.getElementById('confirm');
  var confirmTip = document.getElementById('confirmTip');
  var email = document.getElementById('email');
  var emailTip = document.getElementById('emailTip');
  var phone = document.getElementById('phone');
  var phoneTip = document.getElementById('phoneTip');
  var submit = document.getElementById('submit');

  var msg = {
    name: {
      tip: '必填，长度为4~16个字符',
      required: '名称不能为空',
      illegal: '名称不能包含除中文、英文及数字以外的字符',
      length: '名称长度应为4~16个字符',
      right: '名称格式正确'
    },
    password: {
      tip: '必填，长度为9~24个字符',
      required: '密码不能为空',
      illegal: '密码不能包含除英文及数字以外的字符',
      length: '密码长度应为9~24个字符',
      right: '密码可用'
    },
    confirm: {
      tip: '再次输入相同密码',
      required: '密码不能为空',
      equal: '密码不一致',
      right: '密码输入一致'
    },
    email: {
      tip: '必填，请输入正确的邮箱地址',
      required: '邮箱不能为空',
      illegal: ' 邮箱格式错误',
      right: '邮箱格式正确'
    },
    phone: {
      tip: '必填，请输入正确的手机号码',
      required: '手机号码不能为空',
      illegal: '手机格式错误',
      right: '手机格式正确'
    },
  }

  // Show Tip
  var show = {
    nameTip: function() {
      console.log('nameTip');
      updateTip(name, nameTip, msg.name.tip, '#999');
    },
    passwordTip: function() {
      console.log('passwordTip');
      updateTip(password, passwordTip, msg.password.tip, '#999');
    },
    confirmTip: function() {
      console.log('confirmTip');
      updateTip(confirm, confirmTip, msg.confirm.tip, '#999');
    },
    emailTip: function() {
      console.log('emailTip');
      updateTip(email, emailTip, msg.email.tip, '#999');
    },
    phoneTip: function() {
      console.log('phoneTip');
      updateTip(phone, phoneTip, msg.phone.tip, '#999');
    }
  }

  // Check Value
  var check = {
    name: function() {
      var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;
      var nameValue = name.value.trim().replace(chineseReg, 'xx');
      var nameLength = nameValue.length;

      if (nameLength == 0) {
        updateTip(name, nameTip, msg.name.required, '#f00');
      }
      else if (nameLength < 4 || nameLength > 16) {
        updateTip(name, nameTip, msg.name.length, '#f00');
      }
      else if (/[^0-9a-z\u4e00-\u9fa5]/i.test(nameValue)) {
        updateTip(name, nameTip, msg.name.illegal, '#f00');
      }
      else {
        updateTip(name, nameTip, msg.name.right, '#3C3');
        return true;
      }
      return false;
    },
    password: function() {
      var passwordValue = password.value;
      var passwordLength = passwordValue.length;

      if (passwordLength == 0) {
        updateTip(password, passwordTip, msg.password.required, '#f00');
      }
      else if (passwordLength < 9 || passwordLength > 24) {
        updateTip(password, passwordTip, msg.password.length, '#f00');
      }
      else if (/[^0-9a-z]/gi.test(passwordValue)){
        updateTip(password, passwordTip, msg.password.illegal, '#f00');
      }
      else {
        updateTip(password, passwordTip, msg.password.right, '#3C3');
        return true;
      }
      return false;
    },
    confirm: function() {
      var confirmValue = confirm.value;
      if (confirmValue == '') {
        updateTip(confirm, confirmTip, msg.confirm.required, '#f00');
      }
      else if (confirmValue !== password.value) {
        updateTip(confirm, confirmTip, msg.confirm.equal, '#f00');
      }
      else {
        updateTip(confirm, confirmTip, msg.confirm.right, '#3C3');
        return true;
      }
      return false;
    },
    email: function() {
      var emailValue = email.value;

      if (emailValue == '') {
        updateTip(email, emailTip, msg.email.required, '#f00');
      }
      else if (/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(emailValue)) {
        updateTip(email, emailTip, msg.email.right, '#3C3');
        return true;
      }
      else {
        updateTip(email, emailTip, msg.email.illegal, '#f00');
      }
      return false;
    },
    phone: function() {
      var phoneValue = phone.value;

      if (phoneValue == '') {
        updateTip(phone, phoneTip, msg.phone.required, '#f00');
      }
      else if (/^\d{11}$/.test(phoneValue)) {
        updateTip(phone, phoneTip, msg.phone.right, '#3C3');
        return true;
      }
      else {
        updateTip(phone, phoneTip, msg.phone.illegal, '#f00');
      }
      return false;
    }
  }

  // Update Tip
  function updateTip(ele, eleTip, msg, color) {
    eleTip.innerHTML = msg;
    eleTip.style.color = color;
    ele.style.borderColor = color;
  }

  // check all value
  function checkAll() {
    if(check.name() & check.password() & check.confirm()
       & check.email() & check.phone()) {
      alert("提交成功");
    }
    else {
      alert("输入有误");
    }
  }

  // Add Event Listener
  name.addEventListener('focus', show.nameTip);
  name.addEventListener('blur', check.name);

  password.addEventListener('focus', show.passwordTip);
  password.addEventListener('blur', check.password);

  confirm.addEventListener('focus', show.confirmTip);
  confirm.addEventListener('blur', check.confirm);

  email.addEventListener('focus', show.emailTip);
  email.addEventListener('blur', check.email);

  phone.addEventListener('focus', show.phoneTip);
  phone.addEventListener('blur', check.phone);

  submit.addEventListener('click', checkAll);
})();
