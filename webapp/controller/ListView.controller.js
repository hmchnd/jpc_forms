sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("com.sap.jpcsubmissionforms.controller.ListView", {
            onInit: function () {

                let listModel = new sap.ui.model.json.JSONModel([{

                    templateType:"JPC Submission for CSTLTEP",
                    reqNumber:"REQ08052024",
                    tendStgy:"Competetive",
                    contractTitle:"Procurements of 100 office laptops",
                    contractType:"Goods Procurement",
                    estimatedValue:"5,000",
                    currency:"USD",
                    status:"Approved"
                },
                {

                    templateType:"JPC Submission for CAR",
                    reqNumber:"REQ08052024",
                    tendStgy:"Competetive",
                    contractTitle:"Procurements of 100 office laptops",
                    contractType:"Goods Procurement",
                    estimatedValue:"5,000",
                    currency:"USD",
                    status:"Draft"
                }]);
              this.getView().setModel(listModel,"listModel")
            },
            onNewSubmission:function(){
                if (!this.newSubDialog) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.jpcsubmissionforms.view.Templates",
                        controller: this
                    }).then(oDialog => {
                        this.newSubDialog = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.newSubDialog.open()
                }
            },
            onCreateNewTemplate:function(){

            },
            onCancelDialog:function(){
                this.newSubDialog.close()
            }
        });
    });
