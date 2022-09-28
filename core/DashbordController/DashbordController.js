import State from "../State";
import { useSubscription } from "../../hooks/useSubscription";

const dashboard1 = {
  id: "dashboard1",
  name: "Dashboard",
  date: "Monday, 3 September 2022",
  icon: "WidgetsFilledIcon",
  widgets: [
    {
      component: {
        name: "Summary",
        props: {},
      },
      name: "Summary",
      position: [1, 1],
      height: 1,
      width: 3,
    },
    {
      component: {
        name: "Insights",
        props: {},
      },
      name: "Insights",
      position: [1, 4],
      height: 2,
      width: 1,
    },
    {
      component: {
        name: "Visitors",
        props: {},
      },
      name: "Visitors",
      position: [2, 1],
      height: 1,
      width: 2,
    },
    {
      component: {
        name: "Sales",
        props: {},
      },
      name: "Sales",
      position: [2, 3],
      height: 1,
      width: 1,
    },
    {
      component: {
        name: "Activity",
        props: {},
      },
      name: "Activity",
      position: [3, 1],
      height: 1,
      width: 2,
    },
    {
      component: {
        name: "Orders",
        props: {},
      },
      name: "Orders",
      position: [3, 3],
      height: 1,
      width: 2,
    },
  ],
};

class DashboardController extends State {
  constructor() {
    super();
    this.state = {
      current: null,
      dashboards: [],
    };
  }

  addDashboard(dashboard) {
    this.setState((s) => ({ ...s, dashboards: [...s.dashboards, dashboard] }));
  }

  addDashboards(dashboards) {
    this.setState((s) => ({
      ...s,
      dashboards: [...s.dashboards, ...dashboards],
    }));
  }

  selectDashboard(name) {
    this.setState((state) => {
      return {
        ...state,
        current: state.dashboards.find((d) => d.name === name) || null,
      };
    });
  }
}

const dashboardController = new DashboardController();

const fetchWidgets = async () => {
  // return user specific widgets
  return [dashboard1];
};

fetchWidgets().then((dashboards) => {
  dashboardController.addDashboards(dashboards);
  dashboardController.selectDashboard(dashboards[0].name);
});

const useDashboardController = () => {
  return useSubscription(dashboardController);
};

export { useDashboardController };
export default DashboardController;
