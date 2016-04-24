(function() {
  var student = document.getElementById('student');
  var schoolForm = document.getElementById('school-form');
  var location = document.getElementById('location');
  var school = document.getElementById('school');
  var notStudent = document.getElementById('notStudent');
  var addressForm = document.getElementById('address-form');

  var data = {
    "广东": [
      "潮州",
      "广州",
      "佛山"
    ],
    "北京": [
      "北京"
    ]
  }

  function updateSchool() {
    var inner = "";
    var city = data[location.value];
    console.log(city);
    for (item in city) {
      inner += "<option value='" + city[item] + "'>" + city[item] + "</option>";
    }
    school.innerHTML = inner;
  }

  function init() {
    var inner = "";
    for (item in data) {
      inner += "<option value='" + item + "'>" + item + "</option>";
    }
    location.innerHTML = inner;
    updateSchool();
  }

  function show() {
    if (student.checked) {
      console.log("show school-form");
      schoolForm.style.display = 'block';
      addressForm.style.display = 'none';
    }
    else if (notStudent.checked) {
      console.log("show address-form");
      addressForm.style.display = 'block';
      schoolForm.style.display = 'none';
    }
  }

  console.log(location.value);

  student.addEventListener('click', show);
  location.addEventListener('change', updateSchool);

  notStudent.addEventListener('click', show);

  show();
  init();
})();
