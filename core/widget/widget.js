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
class Widgets extends Statefull {
  constructor() {
    super();
    this.state = [
      { Component: Summary, name: "Summary", column: [1, 4], row: [1, 1] },
      {
        Component: Sales,
        name: "Sales",
        height: 1,
        width: 1,
        column: [3, 4],
        row: [2, 3],
      },
      {
        Component: Visitors,
        name: "Visitors",
        height: 1,
        width: 2,
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
        column: [1, 2],
        row: [3, 4],
      },
      {
        Component: Orders,
        name: "Orders",
        column: [2, 3],
        row: [3, 4],
      },
      {
        Component: Carts,
        name: "Carts",
        column: [3, 5],
        row: [3, 4],
      },
    ];
  }

  replace(name, withName) {
    const targetWidget = this.getState().find(
      ({ name: widgetName }) => name === widgetName
    );

    const sourceWidget = this.getState().find(
      ({ name: widgetName }) => widgetName === withName
    );

    const {
      column: [targetColumnStart, targetColumnEnd],
    } = targetWidget;

    const {
      column: [sourceColumnStart, sourceColumnEnd],
    } = sourceWidget;

    const newColumn1 = [
      targetColumnStart,
      targetColumnStart + (sourceColumnEnd - sourceColumnStart),
    ];

    const newColumn2 = [
      newColumn1[1],
      newColumn1[1] + targetColumnEnd - targetColumnStart,
    ];

    this.setState((state) => {
      return state.map((widget) => {
        if (widget.name === targetWidget.name) {
          return {
            ...widget,
            column: newColumn2,
          };
        }
        if (widget.name === sourceWidget.name) {
          return { ...widget, column: newColumn1 };
        }
        return widget;
      });
    });
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
