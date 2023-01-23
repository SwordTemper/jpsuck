const title =document.getElementById('title');

var lis =document.getElementsByTagName('li');

title.style.margin = '60px';

title.innerHTML += ' resource';

var paras =document.querySelectorAll('p');

console.log(paras);

paras.forEach(p => {
    if(p.textContent.includes('steel')){
        p.style.color = 'rgb(160, 157, 157)',
        p.classList.add('steel')
    }
    if(p.textContent.includes('copper')){
        p.style.color = 'rgb(121, 92, 15)'
        p.classList.add('copper')
    }
    if(p.textContent.includes('bronze')){
        p.style.color = 'rgb(196, 154, 40)'
        p.classList.add('bronze')
    }
    if(p.textContent.includes('silver')){
        p.style.color = 'rgb(207, 204, 195)'
        p.classList.add('silver')
    }
    
});

var metal =document.querySelectorAll('metal');