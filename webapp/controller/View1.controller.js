sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
        },
        onPress: function () {
            MessageBox.alert("You have been alerted!");
        }
    });
});