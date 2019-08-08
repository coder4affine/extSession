Ext.define("SE.controller.SessionController", {
  extend: "Ext.app.Controller",
  init: function() {
    this.control({
      "#session": {
        itemdblclick: function(v, record) {
          var formWindow = Ext.create("SE.view.SessionForm");
          var form = formWindow.down("form");
          form.loadRecord(record);
          formWindow.show();
        },
        select: function() {
          console.log("select data");
        }
      }
    });
  }
});
