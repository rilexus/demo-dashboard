import { Sales } from "../../widgets/Sales";
import { Visitors } from "../../widgets/Visitors";
import { Insights } from "../../widgets/Insights";
import { Activity } from "../../widgets/Activity";
import { Orders } from "../../widgets/Orders";
import { Carts } from "../../widgets/Carts";
import useSubscription from "../../hooks/useSubscription/useSubscription";
import Summary from "../../widgets/Summary/Summary";

class Statefull {
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
    this.state = state;
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
class Widgets extends Statefull {
  widgets = [
    { Component: Summary, name: "Summary", column: [1, 4], row: [1, 1] },
    {
      Component: Sales,
      name: "Sales",
      column: [3, 4],
      row: [2, 3],
    },
    {
      Component: Visitors,
      name: "Visitors",
      column: [1, 3],
      row: [2, 3],
    },
    {
      Component: Insights,
      name: "Insights",
      column: [4, 5],
      row: [1, 3],
    },
    {
      Component: Activity,
      name: "Activity",
      column: [],
      row: [],
    },
    {
      Component: Orders,
      name: "Orders",
      column: [],
      row: [],
    },
    {
      Component: Carts,
      name: "Carts",
      column: [],
      row: [],
    },
  ];

  getState() {
    return this.widgets;
  }

  setState(state) {
    this.widgets = state;
    super.notify();
  }

  replace(name, withName) {
    console.log(`Replace: ${name} with ${withName}`);
    // TODO: implement replace
    console.warn("Widget/replace(): is not implemented yet!");
  }
}

const widgets = new Widgets();

const replace = (name, withName) => {
  widgets.replace(name, withName);
};

const useWidgets = () => {
  return useSubscription(widgets);
};

export { useWidgets, widgets, replace };
