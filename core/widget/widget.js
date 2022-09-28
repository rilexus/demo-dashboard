import { Sales } from "../../widgets/Sales";
import { Visitors } from "../../widgets/Visitors";
import { Insights } from "../../widgets/Insights";
import Activity from "../../widgets/Activity";
import { Orders } from "../../widgets/Orders";
import useSubscription from "../../hooks/useSubscription/useSubscription";
import Summary from "../../widgets/Summary/Summary";
import State from "../State";

class Widgets extends State {
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
        position: [1, 4],
        height: 2,
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
        Component: Sales,
        name: "Sales",
        position: [2, 3],
        height: 1,
        width: 1,
      },
      {
        Component: Activity,
        name: "Activity",
        position: [3, 1],
        height: 1,
        width: 2,
      },
      // {
      //   Component: Carts,
      //   name: "Carts",
      //   position: [3, 2],
      //   height: 1,
      //   width: 2,
      // },
      {
        Component: Orders,
        name: "Orders",
        position: [3, 3],
        height: 1,
        width: 2,
      },
    ];
  }

  sortWidgets(widgets) {
    const copy = [...widgets];
    copy.sort((a, b) => {
      return a.position[0] - b.position[0] || a.position[1] - b.position[1];
    });
    return copy;
  }

  reorder(targetWidget, droppedWidget) {
    let widgets = [...this.state];
    const targetIndex = widgets.findIndex(
      (widget) => widget.name === targetWidget.name
    );
    const dropIndex = widgets.findIndex(
      (widget) => widget.name === droppedWidget.name
    );

    widgets = this.sortWidgets(widgets);

    this.setState(widgets);
  }
}

const widgets = new Widgets();

const reorder = (name, withName) => {
  widgets.reorder(name, withName);
};

const useWidgets = () => {
  return useSubscription(widgets);
};

export { useWidgets, widgets, reorder };
