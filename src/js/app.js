import { $, createElement } from './utils/dom.js';
import { Store } from './utils/store.js';
import { Button } from './components/button.js';

export const globalStore = new Store({
    user: null,
    count: 0,
    theme: 'dark'
});

class App {
    constructor() {
        this.root = $('#app');
    }

    init() {
        if (!this.root) return;

        const boxContainer = createElement('div', {
            className: 'card flex-col items-center gap-3 text-center'
        });
        this.root.appendChild(boxContainer);

        const cardBox = createElement('div', {
            className: 'card flex flex-col items-center gap-3 text-center'
        });
        boxContainer.appendChild(cardBox);

        const cardBox2 = createElement('div', {
            className: 'card flex flex-col items-center gap-3 text-center'
        });
        boxContainer.appendChild(cardBox2);


        const myButton = new Button({
            text: `int:${globalStore.state.count}`,
            className: 'btn btn-primary',
            callFunc: () => {
                globalStore.state.count++;
            }
        });
        myButton.mount(cardBox);

        const myButton2 = new Button({
            text: `int:${globalStore.state.count}`,
            className: 'btn btn-primary',
            callFunc: () => {
                globalStore.state.count++;
            }
        });
        myButton2.mount(cardBox2);

        const unsub = globalStore.subscribe('count', (newCount) => {
            myButton.setState({ text: `int:${newCount}` });
            myButton2.setState({ text: `int:${newCount}` });
        });

    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});

