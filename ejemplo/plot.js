d3.json("samples.json").then((data) => {
	console.log(data)



	var filter_table_button = d3.select("#filter-btn");

	filter_table_button.on("click", function() 
	{

		 d3.event.preventDefault();

		var dropdownMenu = d3.select("#datetime");
  // Assign the value of the dropdown menu option to a variable
 		var dataset = dropdownMenu.property("value");


 		if (dataset === '940') {
    var trace1 = {
    x: data.samples[0].sample_values.slice(0,10),
    y: data.samples[0].otu_ids.slice(0,10),
    text: data.samples[0].otu_labels.slice(0,10),
    name: "garfica1",
    type: "bar",
    orientation: "h"
  };

var layout = {
  title: 'barras',
  showlegend: true,
  height: 600,
  width: 600
};
  // data
  var chartData = [trace1];

  Plotly.newPlot("plot", chartData, layout);


   var trace2 = {
      x: data.samples[0].otu_ids.slice(0,10),
      y: data.samples[0].sample_values.slice(0,10),
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.samples[0].sample_values.slice(0,10),
        color: data.samples[0].otu_ids.slice(0,10)
      },
      text: data.samples[0].otu_labels.slice(0,10),
    };

    var layout = {
  title: 'burbujas',
  showlegend: true,
  height: 600,
  width: 600
};

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout);	


    var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(data.metadata[0]).forEach(function([key, value])
        {
          // console.log(`${key}: ${value}`);
          var paragraph = sample_metadata.append("p");
          paragraph.text(`${key}: ${value}`);

          // sample_metadata.selectAll("h6").data(Object.entries(d)).enter().append("h6").text(function(d) {return `${d[0]}: ${d[1]}`})

        });

  }




  if (dataset === '941') {
    var trace1 = {
    x: data.samples[1].sample_values.slice(0,10),
    y: data.samples[1].otu_ids.slice(0,10),
    text: data.samples[1].otu_labels.slice(0,10),
    name: "garfica1",
    type: "bar",
    orientation: "h"
  };

var layout = {
  title: 'barras',
  showlegend: true,
  height: 600,
  width: 600
};
  // data
  var chartData = [trace1];

  Plotly.newPlot("plot", chartData, layout);


   var trace2 = {
      x: data.samples[1].otu_ids.slice(0,10),
      y: data.samples[1].sample_values.slice(0,10),
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.samples[1].sample_values.slice(0,10),
        color: data.samples[1].otu_ids.slice(0,10)
      },
      text: data.samples[1].otu_labels.slice(0,10),
    };

    var layout = {
  title: 'burbujas',
  showlegend: true,
  height: 600,
  width: 600
};

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout);	


    var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(data.metadata[1]).forEach(function([key, value])
        {
          // console.log(`${key}: ${value}`);
          var paragraph = sample_metadata.append("p");
          paragraph.text(`${key}: ${value}`);

          // sample_metadata.selectAll("h6").data(Object.entries(d)).enter().append("h6").text(function(d) {return `${d[0]}: ${d[1]}`})

        });

  }


  if (dataset === '942') {
    var trace1 = {
    x: data.samples[2].sample_values.slice(0,10),
    y: data.samples[2].otu_ids.slice(0,10),
    text: data.samples[2].otu_labels.slice(0,10),
    name: "garfica1",
    type: "bar",
    orientation: "h"
  };

var layout = {
  title: 'barras',
  showlegend: true,
  height: 600,
  width: 600
};
  // data
  var chartData = [trace1];

  Plotly.newPlot("plot", chartData, layout);


   var trace2 = {
      x: data.samples[2].otu_ids.slice(0,10),
      y: data.samples[2].sample_values.slice(0,10),
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.samples[2].sample_values.slice(0,10),
        color: data.samples[2].otu_ids.slice(0,10)
      },
      text: data.samples[2].otu_labels.slice(0,10),
    };

    var layout = {
  title: 'burbujas',
  showlegend: true,
  height: 600,
  width: 600
};

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout);	


    var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(data.metadata[2]).forEach(function([key, value])
        {
          // console.log(`${key}: ${value}`);
          var paragraph = sample_metadata.append("p");
          paragraph.text(`${key}: ${value}`);

          // sample_metadata.selectAll("h6").data(Object.entries(d)).enter().append("h6").text(function(d) {return `${d[0]}: ${d[1]}`})

        });

  }

  if (dataset === '943') {
    var trace1 = {
    x: data.samples[3].sample_values.slice(0,10),
    y: data.samples[3].otu_ids.slice(0,10),
    text: data.samples[3].otu_labels.slice(0,10),
    name: "garfica1",
    type: "bar",
    orientation: "h"
  };

var layout = {
  title: 'barras',
  showlegend: true,
  height: 600,
  width: 600
};
  // data
  var chartData = [trace1];

  Plotly.newPlot("plot", chartData, layout);


   var trace2 = {
      x: data.samples[3].otu_ids.slice(0,10),
      y: data.samples[3].sample_values.slice(0,10),
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.samples[3].sample_values.slice(0,10),
        color: data.samples[3].otu_ids.slice(0,10)
      },
      text: data.samples[3].otu_labels.slice(0,10),
    };

    var layout = {
  title: 'burbujas',
  showlegend: true,
  height: 600,
  width: 600
};

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout);	


    var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(data.metadata[3]).forEach(function([key, value])
        {
          // console.log(`${key}: ${value}`);
          var paragraph = sample_metadata.append("p");
          paragraph.text(`${key}: ${value}`);

          // sample_metadata.selectAll("h6").data(Object.entries(d)).enter().append("h6").text(function(d) {return `${d[0]}: ${d[1]}`})

        });

  }

  if (dataset === '944') {
    var trace1 = {
    x: data.samples[4].sample_values.slice(0,10),
    y: data.samples[4].otu_ids.slice(0,10),
    text: data.samples[4].otu_labels.slice(0,10),
    name: "garfica1",
    type: "bar",
    orientation: "h"
  };

var layout = {
  title: 'barras',
  showlegend: true,
  height: 600,
  width: 600
};
  // data
  var chartData = [trace1];

  Plotly.newPlot("plot", chartData, layout);


   var trace2 = {
      x: data.samples[4].otu_ids.slice(0,10),
      y: data.samples[4].sample_values.slice(0,10),
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.samples[4].sample_values.slice(0,10),
        color: data.samples[4].otu_ids.slice(0,10)
      },
      text: data.samples[4].otu_labels.slice(0,10),
    };

    var layout = {
  title: 'burbujas',
  showlegend: true,
  height: 600,
  width: 600
};

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout);	


    var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(data.metadata[4]).forEach(function([key, value])
        {
          // console.log(`${key}: ${value}`);
          var paragraph = sample_metadata.append("p");
          paragraph.text(`${key}: ${value}`);

          // sample_metadata.selectAll("h6").data(Object.entries(d)).enter().append("h6").text(function(d) {return `${d[0]}: ${d[1]}`})

        });

  }

  if (dataset === '945') {
    var trace1 = {
    x: data.samples[5].sample_values.slice(0,10),
    y: data.samples[5].otu_ids.slice(0,10),
    text: data.samples[5].otu_labels.slice(0,10),
    name: "garfica1",
    type: "bar",
    orientation: "h"
  };

var layout = {
  title: 'barras',
  showlegend: true,
  height: 600,
  width: 600
};
  // data
  var chartData = [trace1];

  Plotly.newPlot("plot", chartData, layout);


   var trace2 = {
      x: data.samples[5].otu_ids.slice(0,10),
      y: data.samples[5].sample_values.slice(0,10),
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.samples[5].sample_values.slice(0,10),
        color: data.samples[5].otu_ids.slice(0,10)
      },
      text: data.samples[5].otu_labels.slice(0,10),
    };

    var layout = {
  title: 'burbujas',
  showlegend: true,
  height: 600,
  width: 600
};

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout);	


    var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(data.metadata[5]).forEach(function([key, value])
        {
          // console.log(`${key}: ${value}`);
          var paragraph = sample_metadata.append("p");
          paragraph.text(`${key}: ${value}`);

          // sample_metadata.selectAll("h6").data(Object.entries(d)).enter().append("h6").text(function(d) {return `${d[0]}: ${d[1]}`})

        });

  }

  if (dataset === '946') {
    var trace1 = {
    x: data.samples[6].sample_values.slice(0,10),
    y: data.samples[6].otu_ids.slice(0,10),
    text: data.samples[6].otu_labels.slice(0,10),
    name: "garfica1",
    type: "bar",
    orientation: "h"
  };

var layout = {
  title: 'barras',
  showlegend: true,
  height: 600,
  width: 600
};
  // data
  var chartData = [trace1];

  Plotly.newPlot("plot", chartData, layout);


   var trace2 = {
      x: data.samples[6].otu_ids.slice(0,10),
      y: data.samples[6].sample_values.slice(0,10),
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.samples[6].sample_values.slice(0,10),
        color: data.samples[6].otu_ids.slice(0,10)
      },
      text: data.samples[6].otu_labels.slice(0,10),
    };

    var layout = {
  title: 'burbujas',
  showlegend: true,
  height: 600,
  width: 600
};

    var bubbleChart = [trace2];
    Plotly.newPlot("bubble", bubbleChart, layout);	


    var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(data.metadata[6]).forEach(function([key, value])
        {
          // console.log(`${key}: ${value}`);
          var paragraph = sample_metadata.append("p");
          paragraph.text(`${key}: ${value}`);

          // sample_metadata.selectAll("h6").data(Object.entries(d)).enter().append("h6").text(function(d) {return `${d[0]}: ${d[1]}`})

        });

  }
	});

	

});
