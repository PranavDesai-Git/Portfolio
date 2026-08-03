import { Component } from './Component.js';

export class Button extends Component {
    onMount() {
        const { callFunc } = this.props;

        if (this.element && typeof callFunc === 'function') {
            this._clickHandler = callFunc;
            this.element.addEventListener('click', this._clickHandler);
        }
    }

    onDestroy() {
        if (this.element && this._clickHandler) {
            this.element.removeEventListener('click', this._clickHandler);
        }
    }

    render() {
        const {
            text = 'Button',
            id = '',
            className = 'btn btn-primary',
            type = 'button',
            disabled = false
        } = { ...this.props, ...this.state };

        const idAttr = id ? `id="${id}"` : '';
        const disabledAttr = disabled ? 'disabled' : '';

        return `
      <button ${idAttr} class="${className}" type="${type}" ${disabledAttr}>
        ${text}
      </button>
    `;
    }
}
