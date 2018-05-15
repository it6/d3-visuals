window.onload = () => {
  const width = window.innerWidth,
    height = window.innerHeight,
    margin = 10,
    column = height / 8,
    row = width / 12;

  const svg = d3
    .select('body')
    .append('svg')
    .attr('height', height)
    .attr('width', width);

  for (let i = 0; i < width; i += row) {
    for (let j = 0; j < height; j += column) {
      svg
        .append('rect')
        .attr('x', i)
        .attr('y', j)
        .attr('width', row)
        .attr('height', column)
        .on('mouseover', updateElementColor)
        .on('touchmove', updateElementColor)
        // .on('touchend', updateElementColor)
        .on('touchstart', updateElementColor);
    }
  }

  function updateElementColor() {
    changeColor(this);
  }

  function changeColor(el) {
    el = d3.select(el);
    el.attr('fill', getRandomColor());
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};
