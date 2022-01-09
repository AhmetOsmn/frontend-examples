let colorPalette = document.getElementById('color-palette');
let currentElement;

function notification(message){

    let old_div = document.querySelector('.alert');
    if(old_div){
        old_div.parentNode.removeChild(old_div);    
    }

    let div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = message;
    document.body.appendChild(div);

    setTimeout(() => div.classList.add('active'),1);
    setTimeout(() => div.classList.remove('active'),10000);
}

function generateColor(){
    let str = 'abcdef0123456789';
    let color = '#';
    for(let i=0; i<=5; i++){ 
        color += str[Math.floor(Math.random()*str.length)];
    }


    return color;    
}

function generateColorPalette(){
    colorPalette.innerHTML = '';
    
    for(let i = 1; i <= 5; i++){
    
        let color = generateColor();
    
        let li = document.createElement('li');
    
        let spanColor = document.createElement('span');
            spanColor.className = 'color';
            spanColor.style.setProperty('--color',color);
        let spanText = document.createElement('span');
            spanText.className = 'text';
            spanText.innerText = color;
        let input = document.createElement('input');
        input.name = 'color';
        input.value = color;

        li.appendChild(spanColor);    
        li.appendChild(spanText);
        li.appendChild(input);
        colorPalette.appendChild(li);

        li.addEventListener('mouseover', (e) => {
            currentElement = e.target.parentNode;
        });

        li.addEventListener('click',(e)=>{
            let target_input = e.target.parentNode.querySelector('input[name="color"]');
            target_input.select();
            document.execCommand('copy');
            notification('Color <b>' + target_input.value + '</b>  copied to your clipboard')
        });

    }
}

window.addEventListener('keypress', (e) => {
    // console.log(e.code);
    if(e.code === 'Space'){
        generateColorPalette();
    }
    else if(e.code === 'KeyC' && currentElement){
        let target_input = currentElement.querySelector('input[name="color"]');
        target_input.select();
        document.execCommand('copy');
        notification('Color <b>' + target_input.value + '</b>  copied to your clipboard');
        e.preventDefault();
    }
});

generateColorPalette();
