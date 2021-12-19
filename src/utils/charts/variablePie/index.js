export const variablePie = (target) => {
  var root = am5.Root.new(target);

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    layout: root.verticalLayout
  }));

  var series = chart.series.push(am5percent.PieSeries.new(root, {
    alignLabels: true,
    calculateAggregates: true,
    valueField: "value",
    categoryField: "category"
  }));

  series.slices.template.setAll({
    strokeWidth: 3,
    stroke: am5.color(0xffffff)
  });

  series.labelsContainer.set("paddingTop", 30)

  series.slices.template.adapters.add("radius", function (radius, target) {
    var dataItem = target.dataItem;
    var high = series.getPrivate("valueHigh");

    if (dataItem) {
      var value = target.dataItem.get("valueWorking", 0);
      return radius * value / high
    }
    return radius;
  });

  series.data.setAll([{
    value: 10,
    category: "One"
  }, {
    value: 9,
    category: "Two"
  }, {
    value: 6,
    category: "Three"
  }, {
    value: 5,
    category: "Four"
  }, {
    value: 4,
    category: "Five"
  }, {
    value: 3,
    category: "Six"
  }]);

  var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  }));

  legend.data.setAll(series.dataItems);

  series.appear(1000, 100);
}
