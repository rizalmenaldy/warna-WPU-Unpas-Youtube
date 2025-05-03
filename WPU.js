const clickwarna = document.getElementById('clickwarna')
clickwarna.onclick = function(){
//document.body.setAttribute('class','biru-muda')
document.body.classList.toggle('biru-muda')
}
const button = document.createElement('button')
const textbutton = document.createTextNode('button')
button.appendChild(textbutton)
button.setAttribute('type', 'button')
clickwarna.after(button)

button.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    console.log(r)
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

// const red = document.querySelector('input[name=red]')
// const green = document.querySelector('input[name=green]')
// const blue = document.querySelector('input[name=blue]')
// red.addEventListener('input', function(){ 
//     const r = red.value
//     const g = green.value
//     const b = blue.value
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
// })
// green.addEventListener('input', function(){ 
//     const r = red.value
//     const g = green.value
//     const b = blue.value
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
// })
// blue.addEventListener('input', function(){ 
//     const r = red.value
//     const g = green.value
//     const b = blue.value
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
// })
const range = document.querySelectorAll('input');

for (let i = 0; i < range.length; i++) {

    range[i].addEventListener('input', function () {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}
document.body.addEventListener('mousemove', function(event){
const xpos = Math.round((event.clientX / window.innerWidth)* 255)
const ypos = Math.round((event.clientY / window.innerHeight)* 255)
document.body.style.backgroundColor = 'rgb('+ xpos +','+ ypos +',100) '
})