Ext.Loader.setConfig({
  enable: true
});

Ext.application({
  name: "SE",

  requires: ["SE.view.MainView"],

  controllers: ["SE.controller.SessionController"],

  stores: ["Sessions", "SessionPresenters", "Presenters"],

  models: ["Session", "Presenter", "SessionPresenter"],

  views: ["Sessions", "SessionForm", "Presenters", "Details"],

  launch: function() {
    Ext.create("SE.view.MainView");
  }
});
