
/*Populting Dropdown*/
myApp.controller('summaryController', function ($rootScope,$scope,$http,$location) {
	
$scope.$parent.categoryUrl = $location.path();

$scope.$parent.$watch('salesData', function(value){
        if(value == undefined){
            console.log("no data");
        }else{
        	console.log(3445665)

        	setTimeout(function(){
        		 renderGraph(eval(value.current),"chart1");
	             renderGraph(eval(value.ytd),"chart3");
	             renderGraph(eval(value.last),"chart5");
	             renderGraph2(eval(value.current),"chart2");
	             renderGraph2(eval(value.ytd),"chart4");
	             renderGraph2(eval(value.last),"chart6");  

        	}, 500);
               

        }
    });

});




function renderGraph(data,id){	
	 var margin = {top: 20, right: 20, bottom: 30, left: 40},
	     width = 600 - margin.left - margin.right,
	     height = 200 - margin.top - margin.bottom;
	

var formatPercent = d3.format(".0%");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);
	var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

//var yAxis = d3.svg.axis()
  //  .scale(y)
    //.orient("left")
//    .tickFormat(formatPercent);
    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(function(tickVal) {
        return tickVal >= 1000 ? tickVal/1000 + "K" : tickVal;
    });

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>sales:</strong> <span style='color:red'>" + d.sales + "</span>";
  })

 var svg =d3.select("#"+id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

 x.domain(data.map(function(d) { return d.weeks; }));
	  y.domain([0, d3.max(data, function(d) { return d.sales; })]);

	  svg.append("g")
		  .attr("class", "x axis")
		  .attr("transform", "translate(0," + height + ")")
		  .call(xAxis);

	  svg.append("g")
		  .attr("class", "y axis")
		  .call(yAxis)
		.append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", 6)
		  .attr("dy", ".71em")
		  .style("text-anchor", "end")
		  .text("Sales");

	  svg.selectAll(".bar")
		  .data(data)
		.enter().append("rect")
		 .style("fill", "orange")
		  .attr("class", "bar")
		  .attr("x", function(d) { return x(d.weeks); })
		  .attr("width", x.rangeBand())
		  .attr("y", function(d) { return y(d.sales); })
		  .attr("height", function(d) { return height - y(d.sales); })
		  .on('mouseover', tip.show)
		  .on('mouseout', tip.hide);
	  svg.selectAll("text.bar")
      .data(data)
    .enter().append("text")
      .attr("class", "bar")
      .attr("text-anchor", "middle")
      .attr("x", function(d) { return x(d.weeks) + x.rangeBand()/2; })
      .attr("y", function(d) { return y(d.sales) - 5; })
      .text(function(d) { return "$"+d.sales+"K"; });
		  function type(d) {
		   d.sales= +d.sales;
		   return d;
		 }
	 }
	 
	  function renderGraph2(data,id){
	
	 var margin = {top: 20, right: 20, bottom: 30, left: 40},
	     width = 600 - margin.left - margin.right,
	     height = 200 - margin.top - margin.bottom;
	

var formatPercent = d3.format(".0%");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);
	var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
//    .tickFormat(formatPercent);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>throws:</strong> <span style='color:red'>" + d.throwsp + "</span>";
  })

 var svg =d3.select("#"+id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

 x.domain(data.map(function(d) { return d.weeks; }));
	  y.domain([0, d3.max(data, function(d) { return d.throwsp; })]);

	  svg.append("g")
		  .attr("class", "x axis")
		  .attr("transform", "translate(0," + height + ")")
		  .call(xAxis);

	  svg.append("g")
		  .attr("class", "y axis")
		  .call(yAxis)
		.append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", 6)
		  .attr("dy", ".71em")
		  .style("text-anchor", "end")
		  .text("throws");

	  svg.selectAll(".bar")
		  .data(data)
		.enter().append("rect")
		
		 .style("fill", "blue")
		  .attr("class", "bar")
		  .attr("x", function(d) { return x(d.weeks); })
		  .attr("width", x.rangeBand())
		  .attr("y", function(d) { return y(d.throwsp); })
		  .attr("text-anchor", "middle")
		  .attr("height", function(d) { return height - y(d.throwsp); })
		  .on('mouseover', tip.show)
		  .on('mouseout', tip.hide);
	  
	  svg.selectAll("text.bar")
      .data(data)
    .enter().append("text")
      .attr("class", "bar")
      .attr("text-anchor", "middle")
      .attr("x", function(d) { return x(d.weeks) + x.rangeBand()/2; })
      .attr("y", function(d) { return y(d.throwsp) - 5; })
      .text(function(d) { return "$"+d.throwsp; });
		  function type(d) {
		   d.throwsp= +d.throwsp;
		   return d;
		 }
	 }
	
	 
	 
	 