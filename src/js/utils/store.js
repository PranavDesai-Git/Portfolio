/**
 * Simple Reactive State Store (Pub/Sub)
 */
export class Store {
  constructor(initialState = {}) {
    this.state = new Proxy(initialState, {
      set: (target, key, value) => {
        const oldValue = target[key];
        target[key] = value;
        if (oldValue !== value) {
          this.notify(key, value, oldValue);
        }
        return true;
      }
    });
    this.listeners = new Map();
  }

  /**
   * Subscribe to a state key change
   * @param {string} key
   * @param {Function} callback
   * @returns {Function} Unsubscribe callback
   */
  subscribe(key, callback) {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
    }
    this.listeners.get(key).add(callback);

    return () => {
      const callbacks = this.listeners.get(key);
      if (callbacks) {
        callbacks.delete(callback);
      }
    };
  }

  /**
   * Notify subscribers of state changes
   */
  notify(key, newValue, oldValue) {
    if (this.listeners.has(key)) {
      this.listeners.get(key).forEach(cb => cb(newValue, oldValue));
    }
  }

  /**
   * Batch update state properties
   * @param {Object} partialState
   */
  setState(partialState) {
    Object.assign(this.state, partialState);
  }
}
