import { $ } from './utils/dom.js';
import { Store } from './utils/store.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Footer } from './components/Footer.js';

// Global Application State
export const globalStore = new Store({
    user: null,
    theme: 'dark'
});

class App {
    constructor() {
        this.root = $('#app');
    }

    init() {
        if (!this.root) return;

        // Header Component
        const header = new Header({
            title: 'Portfolio',
            navLinks: [
                { label: 'Home', href: '#' },
            ]
        });
        header.mount(this.root);

        // Hero Component
        const hero = new Hero({
            title: 'Portfolio',
            subtitle: ' ',
        });
        hero.mount(this.root);

        // Footer Component
        const footer = new Footer();
        footer.mount(this.root);
    }
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
