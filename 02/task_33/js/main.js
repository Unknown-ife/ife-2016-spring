var btn = document.getElementById('btn');
var inp = document.getElementById('inp')
var table = document.getElementById('table')
var box = document.getElementById('box')
var r = 0;
var left = 0;
var top = 0;
var m = 9,
    n = 9;

function ram(a, b) {
    return parseInt(Math.random() * (b - a) + a)
}
window.onload = function() {
    var sBox = document.createElement('div');
    table.appendChild(sBox);
    sBox.className = 'box';
    left = ram(0, m) * 54;
    top = ram(0, n) * 54;
    sBox.style.left = left + 'px';
    sBox.style.top = top + 'px';

    function main() {
        var s = inp.value;
        switch (s) {
            case 'GO':
                go();
                break;
            case 'TUN LEF':
                r -= 90;
                break;
            case 'TUN RIG':
                r += 90;
                break;
            case 'TUN BAC':
                r -= 180;
                break;
        }
        sBox.style.transform = 'rotate(' + r + 'deg)';
    }

    function go() {
        var dir = (r / 90) % 4;
        if (dir == -3) {
            dir = 1;
        }
        if (dir == -2) {
            dir = 2;
        }
        if (dir == -1) {
            dir = 3;
        }
        switch (dir) {
            case 0:
                top -= 54;
                break;
            case 1:
                left += 54;
                break;
            case 2:
                top += 54;
                break;
            case 3:
                left -= 54;
                break;
        }
        if (top <= 0) {
            top = 0
        };
        if (top >= 54 * (m - 1)) {
            top = 54 * (m - 1)
        };
        if (left <= 54) {
            left = 54
        };
        // if (left >= 54 * (n - 1)) {
        //     left = 54 * (n - 1)
        // };
        sBox.style.left = left + 'px';
        sBox.style.top = top + 'px';
    }
    btn.onclick = main;

}
