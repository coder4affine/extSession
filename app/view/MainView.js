Ext.define("SE.view.MainView", {
  extend: "Ext.container.Viewport",
  layout: "fit",
  items: [
    {
      xtype: "panel",
      resizable: false,
      layout: "border",
      collapsed: false,
      items: [
        {
          xtype: "container",
          region: "center",
          layout: {
            type: "vbox",
            align: "stretch"
          },
          items: [
            {
              xtype: "datepicker",
              minDate: new Date()
            },
            {
              xtype: "splitter",
              width: 1
            },
            {
              xtype: "presenters",
              // html: "<b>Speakers panel</b>",
              flex: 1
            }
          ]
        },
        {
          region: "east",
          xtype: "detailspanel",
          flex: 2,
          split: true
        }
      ]
    }
  ]
});
