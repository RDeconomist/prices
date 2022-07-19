{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "xx yy.",

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/prices/master/db_item.csv"
  },


  "selection": {
    "paintbrush": {"type": "multi", "on": "mouseover", "nearest": true},
    "grid": {"type": "interval", "bind": "scales"},
    "division": {"type": "multi", "fields": ["division"], "bind": "legend"}
  },


  "height":500,
  "width":500,


  "mark": "circle",

  "encoding": {
    "x": {
      "field": "up1_sh",
      "type": "quantitative",
      "scale": {"zero": false},
      "title":"Price rises"
    },

    "y": {
      "field": "down1_sh",
      "type": "quantitative",
      "scale": {"zero": false},
      "title":"Price cuts"
    },

    "color": {"field": "name1", "type": "nominal", "title":"Type"},

    "opacity": {"condition": {"selection": "division", "value": 1}, "value": 0.1},

    "size": {"field": "total1", "type": "nominal", "legend":null},

    "size": {
      "condition": {"selection": "paintbrush", "value": 500, "init":{"value":70}},
      "value": 70
    },

    "tooltip": [
      {"field": "total1", "type": "quantitative", "title": "Prices", "format":","},
      {"field": "name5", "type": "nominal", "title": "Item"}
      
    ]
  }
}