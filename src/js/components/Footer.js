import { Component } from './Component.js';

export class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <div class="container">
          <p>&copy; ${year} Portfolio. Built with Modular Vanilla JS, HTML & CSS.</p>
        </div>
      </footer>
    `;
  }
}
