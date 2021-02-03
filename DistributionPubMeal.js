{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  
  "width": 500, "height": 400,
  
  "data": {"url": "https://raw.githubusercontent.com/RDeconomist/prices/master/PubMealSwatheLong.csv"},

    "transform": [
    {
      "filter": {
        "field": "price",
        "oneOf": ["10", "1020", "2030", "3040", "4050", "5060", "6070", "7080", "8090"]
      }
    }
  ],

 
  "mark": {
    "type":"area",
    "orient":"vertical",
    "opacity": 0.7
  },
  
  "encoding": {
  
    "x": {
      "field": "newDate",
      "type": "temporal",
      "title": null
    },

    "y": {
      "aggregate":"sum",
      "field": "p",
      "type": "quantitative",
      "title":"Price distribution"
    },

    "color": {
      "legend":null,
      "field": "price",
      "scale": {"range": [null, "#D9D9F3", "#00BFFF", "#0276FD", "#000080", "#000080", "#0276FD", "#00BFFF", "#D9D9F3" ]}
    },

    "order": {"field": "price"}

  }
}