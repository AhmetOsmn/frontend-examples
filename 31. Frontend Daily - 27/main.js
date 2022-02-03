function tagsInput(el, options = {}){
    this.options = options;
    this.el = el;
    this.input = el.querySelector('.tags-input');
    this.tags = [];

    if(this.options.values){
        this.options.values.split(',').forEach(value => this.addTag(value));
    }

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = options.name ||'tags';
    this.el.appendChild(input);
    
    this.input.addEventListener('keyup', function(e){
        if(e.key === 'Enter'){

            if(e.target.value.trim() === ''){
                alert('Lütfen bir etiket girin');
                return;
            }

            if(e.target.value.trim().length < this.options.minLength){
                alert(`Minimum ${this.options.minLength} karakter olmalıdır`);
                return;
            }

            if(this.tags.includes(e.target.value)){
                alert(`${e.target.value} değeri zaten eklenmiş !`);
                return;
            }

            if(this.tags.length+1 > this.options.maxTags){
                alert('Daha fazla etiket eklenemez');
                return;
            }

            this.addTag(e.target.value);
            e.target.value = '';
        }
    }.bind(this));
}

tagsInput.prototype.addTag = function(tag){
    const span = document.createElement('span');
    span.className = 'tag';
    span.innerText = tag;

    const button = document.createElement('button');
    button.innerText = 'x';
    span.appendChild(button);

    button.addEventListener('click', function(){
        span.remove();
        this.tags = this.tags.filter(t => t !== tag);
    }.bind(this));

    this.tags.push(tag);
    this.el.insertBefore(span, this.el.firstChild);
}

tagsInput.prototype.showTags = function() {
    return this.tags;
}

const tag = new tagsInput(document.querySelector('.tags'), {
    name: 'etiketler',
    minLength: 3,
    maxTags: 9,
    values: 'js,html,css'
});
