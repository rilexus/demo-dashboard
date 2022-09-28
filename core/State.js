class State {
  state = null;
  subscribers = [];

  constructor() {}

  getSnapshot() {
    return this.getState();
  }

  notify(handler) {
    if (handler) {
      handler(this.getState());
      return;
    }
    this.subscribers.forEach((h) => {
      h(this.getState());
    });
  }

  getState() {
    return this.state;
  }

  setState(state) {
    if (typeof state === "function") {
      this.state = state(this.getState());
    } else {
      this.state = state;
    }
    this.notify();
  }

  subscribe(handler) {
    this.subscribers.push(handler);
    this.notify(handler);
  }

  unsubscribe(handler) {
    this.subscribers = this.subscribers.filter((h) => handler !== h);
  }
}

export default State;
