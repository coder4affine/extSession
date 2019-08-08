Ext.define("SE.view.Sessions", {
  extend: "Ext.grid.Panel",
  alias: "widget.sessionGridPanel",
  itemId: "session",

  store: "Sessions",

  columns: [
    { text: "Id", dataIndex: "id" },
    { text: "Title", dataIndex: "title", flex: 1 },
    { text: "Approved", dataIndex: "approved" },
    {
      text: "Session Start Date",
      dataIndex: "sessionTimeDateTime"
    }
  ],
  features: [
    {
      ftype: "grouping",
      groupHeaderTpl: "Total records: {rows.length}"
    }
  ]
});
