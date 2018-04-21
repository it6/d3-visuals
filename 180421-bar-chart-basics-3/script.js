window.onload = () => {
  const width = window.innerWidth,
    height = window.innerHeight,
    margin = {
      leftRight: 50,
      topBottom: 50
    };

  const ibuRange = d3.extent(beers, beer => beer.ibu),
    svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height - margin.topBottom),
    info = d3
      .select('body')
      .append('div')
      .style('text-align', 'center')
      .style('font-family', 'monaco')
      .style('font-weight', 'bold'),
    xScale = d3
      .scaleLinear()
      .domain([0, beers.length])
      .range([margin.leftRight, width - margin.leftRight]),
    yScale = d3
      .scaleLinear()
      .domain(ibuRange)
      .range([height - margin.topBottom, 0]),
    rects = svg
      .selectAll('rect')
      .data(beers)
      .enter()
      .append('rect'),
    colorScale = d3
      .scaleLinear()
      .domain(ibuRange)
      .range([0, 1]),
    xAxis = d3.axisBottom(xScale),
    yAxis = d3.axisLeft(yScale);

  rects
    .attr('x', (d, i) => xScale(i))
    .attr('y', d => yScale(d.ibu))
    .attr('width', () => width / beers.length - 2)
    .attr('fill', d => `rgb(${colorScale(d.ibu) * 255}, 150, 150)`)
    .attr('height', d => height - margin.topBottom - yScale(d.ibu))
    .on('mouseover', beer => {
      info.text(`${beer.name} - ${beer.ibu}`);
    })
    .on('mouseout', () => {
      info.text('');
    });

  svg
    .append('g')
    .call(yAxis)
    .attr('transform', `translate(${margin.leftRight}, 0)`);

  svg
    .append('text')
    .attr('transform', 'rotate(270)')
    .attr('x', 0 - height / 2)
    .attr('dy', '1em')
    .text('IBU');
};

const beers = [
  {
    '': '21',
    abv: '0.099',
    ibu: 92,
    id: '1036',
    name: 'Lower De Boom',
    style: 'American Barleywine',
    brewery_id: '368',
    ounces: '8.4'
  },
  {
    '': '32',
    abv: '0.09699999999999999',
    ibu: 94,
    id: '432',
    name: 'Hop Crisis',
    style: 'American Double / Imperial IPA',
    brewery_id: '368',
    ounces: '12.0'
  },
  {
    '': '87',
    abv: '0.08199999999999999',
    ibu: 103,
    id: '2401',
    name: 'Yellow Wolf Imperial IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '117',
    ounces: '12.0'
  },
  {
    '': '147',
    abv: '0.08199999999999999',
    ibu: 138,
    id: '980',
    name: 'Bitter Bitch Imperial IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '374',
    ounces: '12.0'
  },
  {
    '': '150',
    abv: '0.075',
    ibu: 115,
    id: '2503',
    name: 'Hop A-Peel',
    style: 'American Double / Imperial IPA',
    brewery_id: '72',
    ounces: '16.0'
  },
  {
    '': '212',
    abv: '0.08800000000000001',
    ibu: 108,
    id: '1806',
    name: 'Hoptopus Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '306',
    ounces: '16.0'
  },
  {
    '': '240',
    abv: '0.095',
    ibu: 104,
    id: '1762',
    name: 'Hemlock Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '220',
    ounces: '12.0'
  },
  {
    '': '339',
    abv: '0.07',
    ibu: 94,
    id: '1549',
    name: 'Farmer Wirtz India Pale Ale',
    style: 'English India Pale Ale (IPA)',
    brewery_id: '107',
    ounces: '16.0'
  },
  {
    '': '474',
    abv: '0.09',
    ibu: 118,
    id: '2123',
    name: 'More Cowbell',
    style: 'American Double / Imperial IPA',
    brewery_id: '214',
    ounces: '16.0'
  },
  {
    '': '479',
    abv: '0.099',
    ibu: 115,
    id: '2471',
    name: 'Hopkick Dropkick',
    style: 'American Double / Imperial IPA',
    brewery_id: '24',
    ounces: '12.0'
  },
  {
    '': '501',
    abv: '0.068',
    ibu: 100,
    id: '1442',
    name: 'F5 IPA',
    style: 'American IPA',
    brewery_id: '182',
    ounces: '16.0'
  },
  {
    '': '504',
    abv: '0.068',
    ibu: 100,
    id: '2315',
    name: 'Hopportunity Knocks IPA',
    style: 'American IPA',
    brewery_id: '155',
    ounces: '12.0'
  },
  {
    '': '509',
    abv: '0.061',
    ibu: 94,
    id: '793',
    name: 'Caldera IPA (2009)',
    style: 'American IPA',
    brewery_id: '155',
    ounces: '12.0'
  },
  {
    '': '510',
    abv: '0.061',
    ibu: 94,
    id: '792',
    name: 'Caldera IPA (2007)',
    style: 'American IPA',
    brewery_id: '155',
    ounces: '12.0'
  },
  {
    '': '517',
    abv: '0.061',
    ibu: 94,
    id: '36',
    name: 'Caldera IPA',
    style: 'American IPA',
    brewery_id: '155',
    ounces: '12.0'
  },
  {
    '': '525',
    abv: '0.09',
    ibu: 130,
    id: '2067',
    name: 'Dead-Eye DIPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '230',
    ounces: '16.0'
  },
  {
    '': '548',
    abv: '0.099',
    ibu: 100,
    id: '2094',
    name: 'Epitome',
    style: 'American Black Ale',
    brewery_id: '222',
    ounces: '16.0'
  },
  {
    '': '579',
    abv: '0.095',
    ibu: 99,
    id: '1647',
    name: 'Terrace Hill Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '350',
    ounces: '16.0'
  },
  {
    '': '594',
    abv: '0.08900000000000001',
    ibu: 126,
    id: '2440',
    name: 'Bay of Bengal Double IPA (2014)',
    style: 'American Double / Imperial IPA',
    brewery_id: '99',
    ounces: '12.0'
  },
  {
    '': '684',
    abv: '0.092',
    ibu: 115,
    id: '851',
    name: 'On the Wings of Armageddon',
    style: 'American Double / Imperial IPA',
    brewery_id: '227',
    ounces: '12.0'
  },
  {
    '': '697',
    abv: '0.085',
    ibu: 100,
    id: '2166',
    name: 'Dream Crusher Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '127',
    ounces: '12.0'
  },
  {
    '': '737',
    abv: '0.066',
    ibu: 100,
    id: '881',
    name: 'Hop Abomination',
    style: 'American IPA',
    brewery_id: '496',
    ounces: '12.0'
  },
  {
    '': '811',
    abv: '0.06',
    ibu: 104,
    id: '1610',
    name: 'Half Cycle IPA',
    style: 'American IPA',
    brewery_id: '16',
    ounces: '16.0'
  },
  {
    '': '835',
    abv: '0.07400000000000001',
    ibu: 97,
    id: '318',
    name: 'Vortex IPA',
    style: 'American IPA',
    brewery_id: '206',
    ounces: '16.0'
  },
  {
    '': '894',
    abv: '0.094',
    ibu: 92,
    id: '1641',
    name: 'Better Weather IPA',
    style: 'American IPA',
    brewery_id: '240',
    ounces: '16.0'
  },
  {
    '': '909',
    abv: '0.09300000000000001',
    ibu: 103,
    id: '312',
    name: 'Snake Handler Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '478',
    ounces: '12.0'
  },
  {
    '': '971',
    abv: '0.09',
    ibu: 99,
    id: '672',
    name: 'Hop A Potamus Double Dark Rye Pale Ale',
    style: 'Rye Beer',
    brewery_id: '365',
    ounces: '16.0'
  },
  {
    '': '1188',
    abv: '0.07200000000000001',
    ibu: 100,
    id: '664',
    name: 'Elevated IPA',
    style: 'American IPA',
    brewery_id: '332',
    ounces: '16.0'
  },
  {
    '': '1198',
    abv: '0.064',
    ibu: 95,
    id: '1675',
    name: 'Madra Allta',
    style: 'American IPA',
    brewery_id: '345',
    ounces: '12.0'
  },
  {
    '': '1268',
    abv: '0.099',
    ibu: 93,
    id: '1674',
    name: 'Chaotic Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '346',
    ounces: '12.0'
  },
  {
    '': '1335',
    abv: '0.08',
    ibu: 100,
    id: '2668',
    name: 'Habitus (2014)',
    style: 'American Double / Imperial IPA',
    brewery_id: '3',
    ounces: '16.0'
  },
  {
    '': '1338',
    abv: '0.08',
    ibu: 100,
    id: '2664',
    name: 'Habitus',
    style: 'American Double / Imperial IPA',
    brewery_id: '3',
    ounces: '16.0'
  },
  {
    '': '1392',
    abv: '0.065',
    ibu: 115,
    id: '1492',
    name: 'Blazing World',
    style: 'American Amber / Red Ale',
    brewery_id: '209',
    ounces: '16.0'
  },
  {
    '': '1578',
    abv: '0.099',
    ibu: 98,
    id: '8',
    name: 'Ten Fidy Imperial Stout',
    style: 'Russian Imperial Stout',
    brewery_id: '166',
    ounces: '12.0'
  },
  {
    '': '1580',
    abv: '0.099',
    ibu: 100,
    id: '6',
    name: 'GUBNA Imperial IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '166',
    ounces: '12.0'
  },
  {
    '': '1585',
    abv: '0.095',
    ibu: 98,
    id: '804',
    name: 'Ten Fidy Imperial Stout (2008)',
    style: 'Russian Imperial Stout',
    brewery_id: '503',
    ounces: '12.0'
  },
  {
    '': '1586',
    abv: '0.099',
    ibu: 98,
    id: '803',
    name: 'Ten Fidy Imperial Stout (2007)',
    style: 'Russian Imperial Stout',
    brewery_id: '503',
    ounces: '12.0'
  },
  {
    '': '1598',
    abv: '0.099',
    ibu: 98,
    id: '1532',
    name: 'Ten Fidy',
    style: 'Russian Imperial Stout',
    brewery_id: '389',
    ounces: '12.0'
  },
  {
    '': '1708',
    abv: '0.07',
    ibu: 100,
    id: '1176',
    name: 'Redacted Rye IPA',
    style: 'American IPA',
    brewery_id: '110',
    ounces: '16.0'
  },
  {
    '': '1709',
    abv: '0.099',
    ibu: 100,
    id: '1006',
    name: 'Elevation Triple India Pale Ale',
    style: 'American Double / Imperial IPA',
    brewery_id: '110',
    ounces: '12.0'
  },
  {
    '': '1711',
    abv: '0.07',
    ibu: 100,
    id: '636',
    name: 'Ryeteous Rye IPA (2012)',
    style: 'American IPA',
    brewery_id: '110',
    ounces: '16.0'
  },
  {
    '': '1743',
    abv: '0.05',
    ibu: 100,
    id: '2579',
    name: 'Jah Mon',
    style: 'American IPA',
    brewery_id: '43',
    ounces: '12.0'
  },
  {
    '': '1788',
    abv: '0.091',
    ibu: 99,
    id: '2063',
    name: 'Count Hopula (Vault Series)',
    style: 'American Double / Imperial IPA',
    brewery_id: '30',
    ounces: '16.0'
  },
  {
    '': '1811',
    abv: '0.071',
    ibu: 95,
    id: '967',
    name: 'Black IPA',
    style: 'American Black Ale',
    brewery_id: '392',
    ounces: '12.0'
  },
  {
    '': '1831',
    abv: '0.07',
    ibu: 105,
    id: '918',
    name: "Frankenlou's IPA",
    style: 'American IPA',
    brewery_id: '494',
    ounces: '16.0'
  },
  {
    '': '1863',
    abv: '0.099',
    ibu: 111,
    id: '1696',
    name: 'Hi-Res',
    style: 'American Double / Imperial IPA',
    brewery_id: '46',
    ounces: '12.0'
  },
  {
    '': '1874',
    abv: '0.091',
    ibu: 103,
    id: '628',
    name: 'Resin',
    style: 'American Double / Imperial IPA',
    brewery_id: '46',
    ounces: '12.0'
  },
  {
    '': '1894',
    abv: '0.071',
    ibu: 92,
    id: '1609',
    name: 'Initial Point India Pale Ale',
    style: 'American IPA',
    brewery_id: '313',
    ounces: '12.0'
  },
  {
    '': '1906',
    abv: '0.07',
    ibu: 113,
    id: '24',
    name: '113 IPA',
    style: 'American IPA',
    brewery_id: '371',
    ounces: '12.0'
  },
  {
    '': '1923',
    abv: '0.063',
    ibu: 100,
    id: '1596',
    name: 'Dagger Falls IPA',
    style: 'American IPA',
    brewery_id: '309',
    ounces: '12.0'
  },
  {
    '': '1924',
    abv: '0.063',
    ibu: 100,
    id: '1595',
    name: 'Dagger Falls IPA',
    style: 'American IPA',
    brewery_id: '309',
    ounces: '12.0'
  },
  {
    '': '1931',
    abv: '0.099',
    ibu: 100,
    id: '1160',
    name: "Old Devil's Tooth",
    style: 'American Barleywine',
    brewery_id: '309',
    ounces: '12.0'
  },
  {
    '': '1937',
    abv: '0.063',
    ibu: 100,
    id: '879',
    name: 'Dagger Falls IPA',
    style: 'American IPA',
    brewery_id: '309',
    ounces: '12.0'
  },
  {
    '': '1957',
    abv: '0.085',
    ibu: 110,
    id: '1728',
    name: 'Red Cockaded Ale',
    style: 'American Double / Imperial IPA',
    brewery_id: '118',
    ounces: '12.0'
  },
  {
    '': '1958',
    abv: '0.092',
    ibu: 100,
    id: '1497',
    name: 'Valkyrie Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '118',
    ounces: '12.0'
  },
  {
    '': '1959',
    abv: '0.085',
    ibu: 110,
    id: '1011',
    name: 'Red Cockaded Ale (2013)',
    style: 'American Double / Imperial IPA',
    brewery_id: '118',
    ounces: '12.0'
  },
  {
    '': '1962',
    abv: '0.099',
    ibu: 100,
    id: '853',
    name: 'PRO-AM (2012) (2012)',
    style: 'American Double / Imperial IPA',
    brewery_id: '118',
    ounces: '12.0'
  },
  {
    '': '2031',
    abv: '0.083',
    ibu: 100,
    id: '2415',
    name: 'Unchained #18 Hop Silo',
    style: 'American Double / Imperial IPA',
    brewery_id: '58',
    ounces: '16.0'
  },
  {
    '': '2062',
    abv: '0.091',
    ibu: 91,
    id: '651',
    name: 'Isis',
    style: 'American Double / Imperial IPA',
    brewery_id: '25',
    ounces: '16.0'
  },
  {
    '': '2081',
    abv: '0.09699999999999999',
    ibu: 120,
    id: '15',
    name: 'Abrasive Ale',
    style: 'American Double / Imperial IPA',
    brewery_id: '61',
    ounces: '16.0'
  },
  {
    '': '2084',
    abv: '0.062',
    ibu: 99,
    id: '12',
    name: 'Furious',
    style: 'American IPA',
    brewery_id: '61',
    ounces: '16.0'
  },
  {
    '': '2095',
    abv: '0.08',
    ibu: 95,
    id: '1229',
    name: 'Dodgy Knight Imperial IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '449',
    ounces: '12.0'
  },
  {
    '': '2108',
    abv: '0.068',
    ibu: 110,
    id: '1017',
    name: 'Ethos IPA',
    style: 'American IPA',
    brewery_id: '45',
    ounces: '16.0'
  },
  {
    '': '2110',
    abv: '0.07200000000000001',
    ibu: 93,
    id: '912',
    name: 'Oasis',
    style: 'Extra Special / Strong Bitter (ESB)',
    brewery_id: '45',
    ounces: '16.0'
  },
  {
    '': '2117',
    abv: '0.07200000000000001',
    ibu: 93,
    id: '104',
    name: 'Oasis (2010)',
    style: 'American Double / Imperial IPA',
    brewery_id: '45',
    ounces: '16.0'
  },
  {
    '': '2145',
    abv: '0.08',
    ibu: 120,
    id: '379',
    name: 'Heady Topper',
    style: 'American Double / Imperial IPA',
    brewery_id: '272',
    ounces: '16.0'
  },
  {
    '': '2160',
    abv: '0.099',
    ibu: 101,
    id: '1561',
    name: 'Double Trunk',
    style: 'American Double / Imperial IPA',
    brewery_id: '33',
    ounces: '16.0'
  },
  {
    '': '2191',
    abv: '0.085',
    ibu: 115,
    id: '1449',
    name: 'Overlord Imperial IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '17',
    ounces: '16.0'
  },
  {
    '': '2214',
    abv: '0.075',
    ibu: 93,
    id: '2444',
    name: 'Nugget Nectar',
    style: 'American Amber / Red Ale',
    brewery_id: '97',
    ounces: '16.0'
  },
  {
    '': '2360',
    abv: '0.08199999999999999',
    ibu: 100,
    id: '1619',
    name: 'Hop Slayer Double IPA',
    style: 'American Double / Imperial IPA',
    brewery_id: '361',
    ounces: '12.0'
  },
  {
    '': '2364',
    abv: '0.08199999999999999',
    ibu: 100,
    id: '740',
    name: 'Hop Slayer Double IPA (2011)',
    style: 'American Double / Imperial IPA',
    brewery_id: '361',
    ounces: '12.0'
  },
  {
    '': '2365',
    abv: '0.08199999999999999',
    ibu: 100,
    id: '430',
    name: 'Hop Slayer Double IPA (2011)',
    style: 'American Double / Imperial IPA',
    brewery_id: '361',
    ounces: '12.0'
  },
  {
    '': '2390',
    abv: '0.059000000000000004',
    ibu: 135,
    id: '1676',
    name: 'Troopers Alley IPA',
    style: 'American IPA',
    brewery_id: '344',
    ounces: '12.0'
  }
];
