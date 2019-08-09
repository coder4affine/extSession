Ext.define("SE.view.Presenters", {
  extend: "Ext.grid.Panel",

  title: "Presenter(s)",

  alias: "widget.presenters",

  store: "Presenters",

  columns: [
    {
      xtype: "gridcolumn",
      dataIndex: "fullName",
      text: "Presenter Name"
    },
    {
      xtype: "gridcolumn",
      dataIndex: "id",
      text: "id"
    }
  ]
});
