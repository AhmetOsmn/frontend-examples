let list = document.querySelectorAll('.component--feedback .labels li');

list.forEach(li => li.addEventListener('click', evt => {

    let target = evt.currentTarget,
        input = target.querySelector('input'),
        messageBox = target.parentNode.nextElementSibling;

    if (messageBox.className === 'labels-text'){
        messageBox = messageBox.nextElementSibling;
    }

   if(evt.currentTarget.classList.contains('active')){
        target.classList.remove('active');
        messageBox.classList.remove('active');
        input.checked = false;
   }
   else {
        input.checked = true;
        list.forEach(li => li.classList.remove('active'));
        target.classList.add('active');
        messageBox.classList.add('active');
   }
    
}));

document.querySelectorAll('.close-btn').forEach(btn => btn.addEventListener('click', e=> {

    let parent = e.currentTarget.parentNode;
    parent.classList.add('hide');
    e.preventDefault();
}));
