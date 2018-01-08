window.onload = function() {
  const timeParsers = d3.timeParse("%d-%b-%y"),
    margin = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    },
    windowWidth = window.innerWidth - margin.left - margin.right,
    windowHeight = window.innerHeight,
    svg = d3
      .select("body")
      .append("svg")
      .attr("height", windowHeight)
      .attr("width", windowWidth),
    g = svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left + margin.right}, ${margin.top})`
      ),
    xScale = d3
      .scaleTime()
      .rangeRound([0, windowWidth - margin.left - margin.right]),
    yScale = d3
      .scaleLinear()
      .rangeRound([windowHeight - margin.top - margin.bottom, 0]),
    area = d3
      .area()
      .x(d => xScale(d.date))
      .y1(d => yScale(d.close));

  d3.tsv(
    "./data.tsv",
    d => {
      d.date = timeParsers(d.date);
      d.close = +d.close;
      return d;
    },
    (err, data) => {
      if (err) throw err;

      xScale.domain(d3.extent(data, d => d.date));
      yScale.domain([0, d3.max(data, d => d.close)]);
      area.y0(yScale(0));

      g
        .append("path")
        .datum(data)
        .attr("fill", "red")
        .attr("d", area);

      g
        .append("g")
        .attr(
          "transform",
          `translate(0, ${windowHeight - margin.top - margin.bottom})`
        )
        .call(d3.axisBottom(xScale));

      g
        .append("g")
        .call(d3.axisLeft(yScale))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price ($)");
    }
  );
};
