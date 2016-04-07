 (function () {
     var checkBtn = document.getElementById('btn');
     var inp = document.getElementById('inp');

     var p = document.getElementById('tip');
     var chineseReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;
     var trimReg = /^\s+|\s+$/g;

    function tipStyle(tipMsg,tipColor) {
        p.innerHTML = tipMsg;
        p.style.color = tipColor;
        inp.style.borderColor = tipColor;
    }

     function check(event) {
          var sValue = inp.value.trim();
         // 首尾去空字符, 替换中文为英文字符好计算长度
         var testStr = sValue.replace(chineseReg, '--');
         console.log(testStr.length);
         if (testStr.length <= 16 || testStr.length >=4 ) {
             tipStyle('长度为4~16个字符','red')
         } else if (testStr.length === 0) {
             tipStyle('姓名不能为空','red')
         }else{
             tipStyle('格式正确','green')
         }
     }

    checkBtn.addEventListener('click',check)

})()
