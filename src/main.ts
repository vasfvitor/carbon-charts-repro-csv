import "@carbon/charts/styles.css";
import { StackedBarChart } from "@carbon/charts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="my-bar-chart"></div>
  </div>
`;

const chartHolder = document.getElementById("my-bar-chart") as HTMLDivElement;

new StackedBarChart(chartHolder, {
  data: [
    {
      group: "Imãs",
      value: 65000,
    },
    {
      group: "Íons",
      value: 29123,
    },
    {
      group: "Você",
      value: 35213,
    },
    {
      group: "Ação",
      value: 51213,
    },
  ],
  options: {
    axes: {
      left: {
        mapsTo: "value",
      },
      bottom: {
        mapsTo: "group",
        scaleType: "labels",
      },
    },
    height: "400px",
  },
});
