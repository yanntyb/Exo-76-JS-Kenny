

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t + 10;
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click',function() {
    let l = parseInt(document.getElementById('kenny').style.left);
    l = l - 10;
    document.getElementById('kenny').style.left = l + 'px';
});

document.getElementById('right').addEventListener('click',function() {
    let r = parseInt(document.getElementById('kenny').style.top);
    r = r + 10;
    document.getElementById('kenny').style.left = r + 'px';
});