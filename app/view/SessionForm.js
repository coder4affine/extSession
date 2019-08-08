Ext.define("SE.view.SessionForm", {
  extend: "Ext.window.Window",
  alias: "widget.sessionForm",
  padding: 5,
  width: 600,
  title: "Edit Sessions",
  model: true,
  items: [
    {
      xtype: "form",
      bodyPadding: 10,
      defaults: {
        labelWidth: 90,
        margin: "0 0 10 0",
        anchor: "90%"
      },
      items: [
        {
          xtype: "textfield",
          name: "title",
          fieldLabel: "Title"
        },
        {
          xtype: "checkboxfield",
          name: "approved",
          fieldLabel: "Approved"
        }
      ]
    },
    {
      xtype: "container",
      padding: "10 10 10 10",
      layout: {
        type: "hbox",
        align: "middle",
        pack: "center"
      },
      items: [
        {
          xtype: "button",
          text: "Save",
          margin: "5 5 5 5",
          handler: function(button) {
            var form = button
              .up()
              .up()
              .down("form");
            var record = form.getRecord();
            var values = form.getValues();
            console.log(values);
            record.set(values);
            button.up("window").destroy();
          }
        },
        {
          xtype: "button",
          text: "Cancel",
          margin: "5 5 5 5",
          handler: function(button) {
            // button.up("sessionForm").close();
            button.up("window").destroy();
          }
        }
      ]
    }
  ]
});
