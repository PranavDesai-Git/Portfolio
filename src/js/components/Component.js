import { htmlToElement } from '../utils/dom.js';

/**
 * Base Component class for Vanilla JS UI Architecture
 */
export class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.element = null;
    this._unsubscribers = [];
  }

  /**
   * Set internal component state and re-render
   * @param {Object} newState
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  /**
   * Return HTML string or Element definition. Override in subclasses.
   * @returns {string|HTMLElement}
   */
  render() {
    return `<div></div>`;
  }

  /**
   * Called after component element is inserted into DOM
   */
  onMount() {}

  /**
   * Called when component is destroyed or unmounted
   */
  onDestroy() {}

  /**
   * Mount component inside a target DOM node
   * @param {HTMLElement} target
   */
  mount(target) {
    if (!target) return;
    this.element = this._createDOMNode();
    target.appendChild(this.element);
    this.onMount();
  }

  /**
   * Re-render & patch component DOM
   */
  update() {
    if (!this.element || !this.element.parentNode) return;
    const newElement = this._createDOMNode();
    this.element.parentNode.replaceChild(newElement, this.element);
    this.element = newElement;
    this.onMount();
  }

  /**
   * Remove component from DOM and cleanup
   */
  destroy() {
    this._unsubscribers.forEach(unsub => unsub());
    this.onDestroy();
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  }

  _createDOMNode() {
    const rendered = this.render();
    if (typeof rendered === 'string') {
      return htmlToElement(rendered);
    }
    return rendered;
  }
}
