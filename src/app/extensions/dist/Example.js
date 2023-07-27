(function(React2, react) {
  "use strict";
  react.createRemoteReactComponent("Alert");
  react.createRemoteReactComponent("Button");
  react.createRemoteReactComponent("ButtonRow");
  react.createRemoteReactComponent("Card");
  react.createRemoteReactComponent("DescriptionList");
  react.createRemoteReactComponent("DescriptionListItem");
  react.createRemoteReactComponent("Divider");
  react.createRemoteReactComponent("EmptyState");
  react.createRemoteReactComponent("ErrorState");
  react.createRemoteReactComponent("Form");
  react.createRemoteReactComponent("Heading");
  react.createRemoteReactComponent("Image");
  react.createRemoteReactComponent("Input");
  react.createRemoteReactComponent("Textarea");
  react.createRemoteReactComponent("LoadingSpinner");
  react.createRemoteReactComponent("ProgressBar");
  react.createRemoteReactComponent("Select");
  react.createRemoteReactComponent("Tag");
  react.createRemoteReactComponent("Text");
  react.createRemoteReactComponent("Tile");
  react.createRemoteReactComponent("ToggleGroup");
  react.createRemoteReactComponent("Stack");
  react.createRemoteReactComponent("StatisticsItem");
  react.createRemoteReactComponent("Statistics");
  react.createRemoteReactComponent("StatisticsTrend");
  react.createRemoteReactComponent("Table");
  react.createRemoteReactComponent("TableFooter");
  react.createRemoteReactComponent("TableCell");
  react.createRemoteReactComponent("TableRow");
  react.createRemoteReactComponent("TableBody");
  react.createRemoteReactComponent("TableHeader");
  react.createRemoteReactComponent("TableHead");
  react.createRemoteReactComponent("Link");
  react.createRemoteReactComponent("NumberInput");
  react.createRemoteReactComponent("Box");
  const hubspot = {
    extend: render
  };
  const extend = (...args) => self.extend(...args);
  function render(renderCallback) {
    return extend((root, api) => {
      const renderCallbackResult = renderCallback(api);
      if (!React2.isValidElement(renderCallbackResult)) {
        throw new Error(`[hubspot.extend]: Expected callback function to return a valid element, got: ${renderCallbackResult}`);
      }
      react.createRoot(root).render(renderCallbackResult);
      root.mount();
    });
  }
  var ServerlessExecutionStatus;
  (function(ServerlessExecutionStatus2) {
    ServerlessExecutionStatus2["Success"] = "SUCCESS";
    ServerlessExecutionStatus2["Error"] = "ERROR";
  })(ServerlessExecutionStatus || (ServerlessExecutionStatus = {}));
  hubspot.extend(({ context, runServerlessFunction, actions }) => /* @__PURE__ */ React2.createElement(
    Extension,
    {
      context,
      runServerless: runServerlessFunction,
      sendAlert: actions.addAlert
    }
  ));
  const Extension = ({ context, runServerless, sendAlert }) => {
    React2.useState("");
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h1", null, "hello world lol"));
  };
})(React, RemoteUI);
