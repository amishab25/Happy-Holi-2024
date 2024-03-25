let images = [
'url("cl1.png")',
'url("cl2.png")',
'url("cl3.png")',
'url("cl4.png")',
'url("cl5.png")',
'url("cl6.png")',
'url("cl10.jpeg")',
'url("cl9.jpeg")',
'url("cl1.png")',
'url("cl8.png")',
'url("cl11.png")',
'url("cl12.png")'
];

let body=document.querySelector('body');
body.onclick = function(e){
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY-e.target.offsetTop;

    let splash = document.createElement('span');
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';

    let bg = images[Math.floor(Math.random() * images.length)];
    splash.style.backgroundImage = bg;

    this.appendChild(splash);

    setTimeout(()=> {
        splash.remove()
    },4000);
}