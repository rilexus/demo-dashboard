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
      {
        Component: Summary,
        name: "Summary",
        position: [1, 1],
        height: 1,
        width: 3,
      },
      {
        Component: Insights,
        name: "Insights",
        height: 2,
        width: 1,
        position: [1, 4],
      },
      {
        Component: Sales,
        name: "Sales",
        position: [2, 3],
        height: 1,
        width: 1,
      },
      {
        Component: Visitors,
        name: "Visitors",
        position: [2, 1],
        height: 1,
        width: 2,
      },
      {
        Component: Activity,
        name: "Activity",
        position: [3, 1],
        height: 1,
        width: 2,
      },
      {
        Component: Orders,
        name: "Orders",
        height: 1,
        width: 2,
        position: [3, 3],
      },
      // {
      //   Component: Carts,
      //   name: "Carts",
      //   height: 1,
      //   width: 1,
      //   position: [3, 3],
      // },
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
