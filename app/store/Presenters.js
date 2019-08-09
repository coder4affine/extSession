Ext.define("SE.store.Presenters", {
  extend: "Ext.data.Store",

  requires: ["SE.model.Presenter", "Ext.util.Filter"],

  model: "SE.model.Presenter",

  autoLoad: true,

  pageSize: 10,

  storeId: "Presenters",

  filters: {
    filterFn: function(item) {
      return false;
    }
  }
});
