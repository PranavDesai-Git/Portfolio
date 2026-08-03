import { Component } from './Component.js';

export class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        };
    }

    onMount() {
        const btn = this.element.querySelector('#action-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                this.setState({ clickCount: this.state.clickCount + 1 });
            });
        }
    }

    render() {
        const { title = 'Welcome', subtitle = 'Production-ready Vanilla JS template.' } = this.props;

        return `
      <section class="hero container">
        <h1 class="hero-title">${title}</h1>
        <p class="hero-subtitle">${subtitle}</p>
        <button id="action-btn" class="btn btn-primary">
          Interactions: ${this.state.clickCount}
        </button>
      </section>
    `;
    }
}
