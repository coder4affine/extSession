Ext.define("SE.view.MainView", {
  extend: "Ext.container.Viewport",
  layout: {
    type: "border"
  },
  items: [
    {
      region: "west",
      split: true,
      flex: 1,
      layout: {
        type: "vbox",
        align: "stretch"
      },
      items: [
        {
          xtype: "sessionGridPanel",
          //   html: "Session Grid Panel",
          flex: 3
        },
        {
          xtype: "splitter",
          width: 1
        },
        {
          xtype: "panel",
          html: "<b>Speakers panel</b>",
          flex: 1
        }
      ]
    },
    {
      region: "center",
      html: "<b>Details panel</b>",
      flex: 1,
      xtype: "panel",
      title: "Details Panel",
      collapsible: true,
      collapsed: true,
      collapseDirection: "right"
    }
  ]
});
