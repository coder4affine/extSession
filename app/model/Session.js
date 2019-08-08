Ext.define("SE.model.Session", {
  extend: "Ext.data.Model",
  fields: [
    { name: "title", sortType: "asUCText" },
    { name: "id", sortType: "asInt" },
    "approved",
    {
      name: "sessionTimeDateTime",
      sortType: "asDate",
      type: "date",
      dateFormat: "c"
    },
    {
      name: "sessionTimePretty",
      type: "string",
      convert: function(v, rec) {
        var convertIt = Ext.util.Format.dateRenderer("m/d/Y g:i a");
        var pretty = convertIt(rec.get("sessionTimeDateTime"));
        return pretty;
      }
    }
  ],
  proxy: {
    type: "rest",
    url: "http://localhost:3004/session",
    reader: {
      type: "json"
    }
  }
});
