sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.jpcsubmissionforms.controller.TempletForm", {
            onInit: function () {
                let data = [{
                    "procurementActv": "JPC-XXX meeting (Approval of CS, TL/TEP)",
                    "duration": "1"
                },
                {
                    "procurementActv": "Prepare ITT",
                    "duration": "5"
                },
                {
                    "procurementActv": "TGA review",
                    "duration": "9"
                },
                {
                    "procurementActv": "Issue ITT's",
                    "duration": "1"
                },
                {
                    "procurementActv": "Tendering Period",
                    "duration": "28"
                },
                {
                    "procurementActv": "Receive Bids",
                    "duration": "4"
                },
                {
                    "procurementActv": "Technical and Commercial Evaluation",
                    "duration": "46"
                },
                {
                    "procurementActv": "TGA review",
                    "duration": "7"
                },
                {
                    "procurementActv": "Financial Evaluation",
                    "duration": "14"
                },
                {
                    "procurementActv": "JPC Submission",
                    "duration": "14"
                },
                {
                    "procurementActv": "TGA review",
                    "duration": "5"
                },
                {
                    "procurementActv": "JPC review",
                    "duration": "10"
                },
                {
                    "procurementActv": "JPC-XXX meeting (Approval of Contract Award)",
                    "duration": "1"
                },
                {
                    "procurementActv": "Contract Award",
                    "duration": "30"
                },
                ];


                let data2 = {
                    "field1": [
                        {
                            "Desc": "",

                        },

                    ],
                    "dropdown": [
                        {
                            "UOM": "Daily rate",
                        },
                        {
                            "UOM": "All inclusive daily rate excluding mob/demob costs",
                        },
                        {
                            "UOM": "Lump Sum",
                        },
                        {
                            "UOM": "All inclusive lump sum rate per trip (both directions",
                        },
                        {
                            "UOM": "At Operator cost + % mark-up",
                        },
                    ]
                };

                let data1 = [
                    {
                        "tender": "Technical offer",
                        "position": "[Please state] local content"

                    },
                    {
                        "tender": "Commercial offer",
                        "position": "Contracts Controller C&P Manager C&P Section Head C&P Specialist/Expert Legal, Tax, Finance, Insurance, Business Governance as require"

                    },
                    {
                        "tender": "Financial offer",
                        "position": "Contracts Controller C&P Manager C&P Section Head C&P Specialist/Expert"

                    },
                ]

                let jModel = new JSONModel(data);
                this.getView().setModel(jModel, "jModel");

                let sModel = new JSONModel(data2);
                this.getView().setModel(sModel, "sModel")

                let tModel = new JSONModel(data1);
                this.getView().setModel(tModel, "tModel")

                this.initRichTextEditor(false);


            },
            // handleSelect: function (oEvent) {
            //     var sSelectedKey = oEvent.getParameters().selectedItem.getKey();
            //     if (this.oRichTextEditor) {
            //         this.oRichTextEditor.destroy();
            //     }
            //     switch (sSelectedKey) {
            //         case "TinyMCE5":
            //             this.initRichTextEditor(true);
            //             break;
            //         default:
            //             this.initRichTextEditor(false);
            //             break;
            //     }
            // },
            initRichTextEditor: function (bIsTinyMCE5) {
                var that = this,
                    sHtmlValue = '<p style="text-align: center">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>&nbsp;Submission to JPC-XXX</strong></p>' +
                        '<p>&nbsp;</p>' +
                        '<p>The User Department will be responsible for the technical evaluation of Tenders with support from the relevant functions as required. The technical, HSE and Local Content evaluations will commence with the evaluation of mandatory questions and if any Tenderer does not pass one mandatory criterion following any clarification the Tenderer shall not be further technically evaluated. No scoring will be calculated for technically unacceptable Tenderer who failed to answer mandatory questions and/ or failed to meet mandatory requirements. For Tenderers that met the mandatory requirements each individual technical criterion will be scored out of 5 and all the criteria shall be weighted. The weighted total shall also be scored out of 5. The minimum score to be achieved for acceptance of the technical tenders shall be a score of 3.</p>' +
                        '<p>C&amp;P will be responsible for commercial evaluation of the Tenders with support from relevant functions as required. The commercial evaluation will commence with the evaluation of mandatory questions and if any Tenderer does not pass one mandatory criterion following any clarification the Tenderer&rsquo;s Tender shall not be further commercially evaluated.&nbsp;</p>' +
                        '<p>Financial evaluation will be performed by C&amp;P. Technical, commercial and financial evaluations will be performed in accordance with Tender Evaluation Plan and Operator quantity estimations specified in Appendices 9.2 and 9.1</p>' +
                        '<p>Operator reserves the right to perform a negotiation with the Tenderer offering the lowest price. These negotiations will be performed in due compliance with the provisions of JOC Tender Procedure, Article 8.11.6.</p>' +
                        '<table style="border-collapse: collapse ; width: 100.023%" border="1"><colgroup><col style="width: 49.9657%"><col style="width: 49.9657%"></colgroup>' +
                        '<tbody>' +
                        '<tr>' +
                        '<td>Tender Submission:</td>' +
                        '<td>Position*:</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Technical Offer</td>' +
                        '<td>[Please state] Local Content</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Commercial Offer</td>' +
                        '<td>Contracts Controller C&amp;P Manager C&amp;P Section Head C&amp;P Specialist/Expert Legal, Tax, Finance, Insurance, Business Governance as require</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Financial Offer</td>' +
                        '<td>Contracts Controller C&amp;P Manager C&amp;P Section Head C&amp;P Specialist/Exper</td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>';







                // sHtmlValue = sHtmlValue.replace(/[{}]/g, ''); 


                sap.ui.require(["sap/ui/richtexteditor/RichTextEditor", "sap/ui/richtexteditor/library"],
                    function (RTE, library) {
                        // var EditorType = library.EditorType;
                        that.oRichTextEditor = new RTE("myRTE", {
                            // editorType: bIsTinyMCE5 ? EditorType.TinyMCE5 : EditorType.TinyMCE6,
                            width: "100%",
                            height: "700px",
                            customToolbar: false,
                            showGroupFont: false,
                            showGroupLink: false,
                            showGroupInsert: false,
                            value: sHtmlValue,
                            editable: false,
                            enabled: false,
                            showGroupClipboard:false,
                            showGroupStructure: false,
                            showGroupTextAlign:false,
                            showGroupUndo:false,
                            useLegacyTheme:false,
                            showGroupInsert:false,
                            showGroupFontStyle:false,
                            showGroupInsert:false,
                            showGroupLink:false,
                            useLegacyTheme:false,


                            // ready: function () {
                            //     bIsTinyMCE5 ? this.addButtonGroup("styleselect").addButtonGroup("table") : this.addButtonGroup("styles").addButtonGroup("table");
                            // }
                        });

                        that.getView().byId("idVerticalLayout").addContent(that.oRichTextEditor);
                    });
            },
            www: function () {
                debugger

                let purpose = sap.ui.getCore().byId("myRTE").getValue()


                // console.log(icoNo,contractTitle,contractType,contractNo,Supplier,purpose,background);
                console.log(purpose);

            },
            onAdd: function () {
                debugger
                var oModel = this.getView().getModel("sModel");
                let oldData = oModel.getProperty("/field1");


                var oNewRowData = {
                    "desc": "",

                };

                oldData.push(oNewRowData);
                oModel.setProperty("/field1", oldData);
                oModel.refresh();

            },
            onDelete: function () {
                var oTable = this.byId("Table");
                var aSelectedItems = oTable.getSelectedContexts();

                // Check if any item is selected
                if (aSelectedItems.length > 0) {
                    var oModel = oTable.getModel("sModel");
                    var aData = oModel.getProperty("/field1");

                    // If only one item is selected, delete it directly
                    if (aSelectedItems.length === 1) {
                        var oSelectedItem = aSelectedItems[0].getObject();
                        var iIndex = aData.indexOf(oSelectedItem);
                        aData.splice(iIndex, 1); // Remove the selected item
                    } else {
                        // If multiple items are selected, delete them one by one starting from the last index
                        for (var i = aSelectedItems.length - 1; i >= 0; i--) {
                            var oSelectedItem = aSelectedItems[i].getObject();
                            var iIndex = aData.indexOf(oSelectedItem);
                            aData.splice(iIndex, 1); // Remove the selected item
                        }
                    }

                    oModel.setProperty("/field1", aData); // Update the model
                }
            }


        });
    });
