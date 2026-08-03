import { Component } from './Component.js';

export class Header extends Component {
  render() {
    const { title = 'Portfolio', navLinks = [] } = this.props;

    return `
      <header class="site-header">
        <div class="container header-inner">
          <a href="#" class="logo">${title}<span>.</span></a>
          <nav class="site-nav">
            <ul class="nav-list">
              ${navLinks.map(link => `
                <li><a href="${link.href}" class="nav-link">${link.label}</a></li>
              `).join('')}
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}
