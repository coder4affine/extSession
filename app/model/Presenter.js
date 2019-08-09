Ext.define("SE.model.Presenter", {
  extend: "Ext.data.Model",

  requires: ["Ext.data.Field", "Ext.data.proxy.Rest", "Ext.data.reader.Json"],

  fields: [
    { name: "id" },
    { name: "firstName" },
    { name: "lastName" },
    {
      name: "fullName",
      convert: function(v, rec) {
        return rec.get("firstName") + " " + rec.get("lastName");
      }
    },
    {
      name: "website"
    },
    {
      name: "bio"
    },
    {
      name: "imageUrl"
    },
    {
      name: "imagePicture"
    }
  ],
  proxy: {
    type: "rest",
    url: "http://localhost:3004/presenter",
    reader: {
      type: "json"
    }
  }
});
