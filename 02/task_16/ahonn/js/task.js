/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById('aqi-city-input');
var valueInput = document.getElementById('aqi-value-input');
var add = document.getElementById('add-btn');
var table = document.getElementById('aqi-table');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var city = cityInput.value.trim();
  var value = valueInput.value.trim();
  if (!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
    alert("城市名称请输入中英文");
    console.log(city);
    return;
  }
  if (!value.match(/^\d+$/)) {
    alert("空气质量指数请输入合法的正整数");
    console.log(value);
    return;
  }
  aqiData[city] = value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  if (Object.keys(aqiData).length) {
    var str = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for (city in aqiData) {
      str += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button data-city='" + city + "'>删除</button></td></tr>"
    }
    table.innerHTML = str;
  }
  else {
    table.innerHTML = '';
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  console.log(aqiData);
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  add.addEventListener("click", addBtnHandle);
  table.addEventListener("click", function (event) {
    if (event.target.nodeName.toLowerCase() === 'button') {
      delBtnHandle.call(null, event.target.dataset.city);
    }
  });
}

init();
