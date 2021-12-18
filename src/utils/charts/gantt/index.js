import { unique } from '../../MiscHelpers'

// Roadmap Data Schema
//
//
// const example = [
//   {
//     category: "Category 1",
//     task: "Task 1",
//     start: "2021-12-22",
//     end: "2022-01-12"
//   },
//   {
//     category: "Category 1",
//     task: "Task 2",
//     start: "2022-01-12",
//     end: "2022-02-09"
//   },
//   {
//     category: "Category 1",
//     task: "Task 3",
//     start: "2022-02-09",
//     end: "2022-02-22",
//   },
//   {
//     category: "Category 2",
//     task: "Task 1",
//     start: "2022-02-09",
//     end: "2022-02-22",
//   },
//   {
//     category: "Category 2",
//     task: "Task 2",
//     start: "2022-01-12",
//     end: "2022-02-09"
//   },
//   {
//     category: "Category 3",
//     task: "Task 1",
//     start: "2021-12-22",
//     end: "2022-02-09"
//   },
//   {
//     category: "Category 3",
//     task: "Task 2",
//     start: "2021-12-22",
//     end: "2022-02-09"
//   },
//   {
//     category: "Category 3",
//     task: "Task 3",
//     start: "2021-12-22",
//     end: "2022-02-09"
//   },
//   {
//     category: "Category 3",
//     task: "Task 4",
//     start: "2021-12-22",
//     end: "2022-02-09"
//   },
// ]


export const Gantt = (data, target) => {
  const root = am5.Root.new(target);
  root.dateFormatter.setAll({
    dateFormat: "yyyy-MM-dd",
    dateFields: ["valueX", "openValueX"]
  });
  
  
  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
  }));
  
  var colors = chart.get("colors");

  const dataDate = date => {
    const year = parseInt(date.split('-')[0]);
    const month = parseInt(date.split('-')[1]);
    const day = parseInt(date.split('-')[2]);
    
    return new Date(year, month, day).getTime();
  }

  // Data
  const categories = data.map(c => c.category).filter(unique);

  data.forEach((col, taskIdx) => {
    const categoryIdx = categories.indexOf(col.category);

    let dataPoint = col;

    dataPoint.start = dataDate(col.start);
    dataPoint.end = dataDate(col.end);
    dataPoint.columnSettings = {
      fill: am5.Color.brighten(colors.getIndex(categoryIdx), taskIdx * 0.4)
    }
  })
  
  const elChart = document.getElementById(target);
  elChart.style.height = categories.length * 75 + 'px';
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "category",
      renderer: am5xy.AxisRendererY.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    })
  );
  
  yAxis.data.setAll(categories.map(c => ({ category: c })));
  
  var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "minute", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {})
    })
  );
  
  
  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    xAxis: xAxis,
    yAxis: yAxis,
    openValueXField: "start",
    valueXField: "end",
    categoryYField: "category",
    sequencedInterpolation: true
  }));
  
  series.columns.template.setAll({
    templateField: "columnSettings",
    strokeOpacity: 0,
    strokeWidth: 50,
    tooltipText: "{task}:\n[bold]{openValueX}[/] - [bold]{valueX}[/]"
  });
  
  series.data.setAll(data);
  
  // Add scrollbars
  // chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();
  chart.appear(1000, 100);
}
