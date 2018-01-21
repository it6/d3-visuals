window.onload = () => {
  const width = 960,
    height = 500,
    svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height),
    arc = d3
      .arc()
      .innerRadius(height / 4)
      .outerRadius(height / 3)
      .startAngle(0)
      .endAngle(Math.PI),
    primaryGroup = svg.append('g').attr('transform', `translate(480, 250)`),
    path = primaryGroup
      .append('path')
      .attr('d', arc)
      .attr('fill', 'none')
      .attr('stroke-width', 3)
      .attr('stroke', '#00A1FF'),
    circle = primaryGroup
      .append('circle')
      .attr('r', 8)
      .attr('stroke', '#173753')
      .attr('fill', '#F3C969');

  transition();

  function transition() {
    circle
      .transition()
      .duration(4000)
      .attrTween('transform', translateAlong(path.node()))
      .on('end', transition);
  }

  // Returns an attrTween for translating along the specified path element.
  function translateAlong(path) {
    var l = path.getTotalLength();
    return function(d, i, a) {
      return function(t) {
        var p = path.getPointAtLength(t * l);
        return 'translate(' + p.x + ',' + p.y + ')';
      };
    };
  }
};
