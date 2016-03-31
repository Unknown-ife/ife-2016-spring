var btn = document.getElementById('btn');
var table = document.getElementById('table')
var box = document.getElementById('box')
box.className = 'box'
function main() {
    var r = 0;
    var s = btn.value;
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
    box.style.transform = 'rotate('+rotate+'deg');
}
function go() {
    var dir = (r/90)%4;
    
}
