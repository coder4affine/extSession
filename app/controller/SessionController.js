Ext.define("SE.controller.SessionController", {
  extend: "Ext.app.Controller",

  stores: ["Sessions", "SessionPresenters", "Presenters"],

  refs: [
    {
      ref: "details",
      selector: "detailspanel"
    },
    {
      ref: "presenters",
      selector: "presenters"
    },
    {
      ref: "sessions",
      selector: "sessionGridPanel"
    }
  ],

  onItemdblclick: function(v, record) {
    var formWindow = Ext.create("SE.view.SessionForm");
    var form = formWindow.down("form");
    form.loadRecord(record);
    formWindow.show();
  },

  onSelectRecord: function(rowmodel, record, index, eOpts) {
    Ext.suspendLayouts(); // best practices

    var sessionId = record.get("id");

    var presenterIds = [];

    var spStore = this.getSessionPresentersStore();

    spStore.each(function(rec) {
      if (rec.get("sessionId") === sessionId) {
        presenterIds.push(rec.get("presenterId"));
      }
    });

    this.getPresentersStore().clearFilter(); // good practice

    this.getPresentersStore().filterBy(function(rec) {
      var foundMatch = false;
      for (let i = 0; i < presenterIds.length; i++) {
        if (rec.get("id") === presenterIds[i]) {
          foundMatch = true;
        }
      }
      return foundMatch;
    });

    var sessions = record.getData();
    sessions.presenters = [];

    this.getPresentersStore().each(function(presenterRecord) {
      sessions.presenters.push(presenterRecord.getData());
    });

    var detailsPanel = this.getDetails();

    detailsPanel.update(sessions);

    Ext.resumeLayouts(); // best practices
  },

  init: function() {
    this.control({
      "#session": {
        itemdblclick: this.onItemdblclick,
        select: this.onSelectRecord
      }
    });
  }
});
