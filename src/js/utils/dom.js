/**
 * DOM Utility Helpers
 */

/**
 * Select a single element matching selector
 * @param {string} selector
 * @param {ParentNode} scope
 * @returns {Element|null}
 */
export const $ = (selector, scope = document) => scope.querySelector(selector);

/**
 * Select all elements matching selector as an Array
 * @param {string} selector
 * @param {ParentNode} scope
 * @returns {Element[]}
 */
export const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/**
 * Create a DOM element with attributes and children
 * @param {string} tag
 * @param {Object} attrs
 * @param {...(string|Node)} children
 * @returns {HTMLElement}
 */
export const createElement = (tag, attrs = {}, ...children) => {
  const el = document.createElement(tag);

  Object.entries(attrs).forEach(([key, val]) => {
    if (key.startsWith('on') && typeof val === 'function') {
      const eventName = key.toLowerCase().slice(2);
      el.addEventListener(eventName, val);
    } else if (key === 'className' || key === 'class') {
      el.className = val;
    } else if (key === 'dataset' && typeof val === 'object') {
      Object.assign(el.dataset, val);
    } else {
      el.setAttribute(key, val);
    }
  });

  children.flat().forEach(child => {
    if (typeof child === 'string' || typeof child === 'number') {
      el.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  });

  return el;
};

/**
 * Parse HTML string into DOM Node
 * @param {string} htmlString
 * @returns {Element}
 */
export const htmlToElement = (htmlString) => {
  const template = document.createElement('template');
  template.innerHTML = htmlString.trim();
  return template.content.firstElementChild;
};

/**
 * Event delegation helper
 * @param {Element} target
 * @param {string} eventType
 * @param {string} selector
 * @param {Function} callback
 */
export const delegate = (target, eventType, selector, callback) => {
  target.addEventListener(eventType, (e) => {
    const delegateTarget = e.target.closest(selector);
    if (delegateTarget && target.contains(delegateTarget)) {
      callback.call(delegateTarget, e, delegateTarget);
    }
  });
};
