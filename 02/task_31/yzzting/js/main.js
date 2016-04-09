(function() {
    var cityData = [
        ["潮州", "广州", "深圳", "汕头"],
        ["杭州", "温州", "义乌", "宁波"],
        ["厦门", "福州", "漳州", "泉州"],
        ["昆明", "大理", "丽江", "香格里拉"]
    ];
    window.onload = function() {
        var stu = document.getElementById('stuSelect');
        var city = document.getElementById('citySelect');
        var div = document.getElementsByTagName('div');
        var form = document.getElementsByTagName("form")[0];

        function checkRadio(ev) {
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if (target.name && target.name == "stu") {
                if (target.id === "inStu") {
                    div[0].style.display = "block";
                    div[1].style.display = "none"
                } else if (target.id = "outStu") {
                    div[1].style.display = "block";
                    div[0].style.display = "none"
                }
            }
        }

        function updateForm() {
            var item = '';
            var arr = cityData[this.selectedIndex];
            for (var i = 0; i < arr.length; i++) {
                item += '<option>' + arr[i] + '</option>'
            }
            city.innerHTML = item;
        }
        form.onclick = checkRadio;
        stu.onclick = updateForm;
    }

})()
