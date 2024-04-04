class Hover {
    constructor(option) {
        if (typeof option.el == 'string') {
            this.el = document.querySelector(option.el);
        } else if (option.el instanceof HTMLElement) {
            this.el = option.el;
        }

        this.el.addEventListener('mouseenter', () => this.hover());
        this.el.addEventListener('click', () => this.move());

        const stayElement = document.querySelector('.content__stay');
        stayElement.addEventListener('click', () => this.changeTextYes());

        const moveElement = document.querySelector('.content__move');
        moveElement.addEventListener('click', () => this.changeTextNo());
        
        this.messages = [
            'Подумай лучше !',
            'Не ври себе!',
            'Не спеши с ответом подумай лучше!)',
            'Это не то, что я хотел бы услышать...((',
            'Не ужели всё что было ложь?!',
            'Скорее всего, ты шутишь!',
            'А вот и не угадал!',
            'Не совсем правильный выбор...',
            'Возможно, тебе стоит подумать еще раз!'
        ];
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    hover() {
        this.el.style.cursor = 'pointer';
    }

    move() {
        this.el.style.position = 'fixed';
        this.el.style.left = this.random(0, innerWidth - this.el.clientWidth) + 'px';
        this.el.style.top = this.random(0, innerHeight - this.el.clientWidth) + 'px';
    }

    changeTextYes() {
        const titleElement = document.querySelector('.title');
        titleElement.textContent = 'Я тоже тебя люблю, лакомка!';
    }

    changeTextNo() {
        const titleElement = document.querySelector('.title');
        const randomIndex = this.random(0, this.messages.length - 1);
        titleElement.textContent = this.messages[randomIndex];
    }
}

const btn = new Hover({
    el: '.content__move'
});