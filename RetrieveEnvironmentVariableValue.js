// REF: Constants.js

if (typeof Ndxc == 'undefined') Ndxc = {};
if (typeof Ndxc.Common == "undefined") Ndxc.Common = {};

// Usage
/*
Ndxc.Common.RetrieveEnvironmentVariableValue('Function App Name').then(
function (variableValue) {

    console.log(variableValue);
});
*/

Ndxc.Common.RetrieveEnvironmentVariableValue = function (environmentVariableName) {

    // Definition
    let definitionLogicalName = Ndxc.Constants.EnvironmentVariableDefinition.LogicalName;
    let definitionSelect = "?$select=" + Ndxc.Constants.EnvironmentVariableDefinition.Id + "," + Ndxc.Constants.EnvironmentVariableDefinition.DefaultValue;
    let definitionFilter = "$filter=" + Ndxc.Constants.EnvironmentVariableDefinition.DisplayName + " eq '" + environmentVariableName + "'";

    // Value
    let valueLogicalName = Ndxc.Constants.EnvironmentVariableValue.LogicalName;
    let valueSelect = "?$select=" + Ndxc.Constants.EnvironmentVariableValue.Value;

    return new Promise(resolve => {
        Xrm.WebApi.retrieveMultipleRecords(definitionLogicalName, definitionSelect + '&' + definitionFilter, 1).then(

            function success(result) {

                let defaultValue = result.entities[0].defaultvalue;

                let valueFilter = "$filter=" + Ndxc.Constants.EnvironmentVariableValue.EnvironmentVariableDefinition_Value + " eq '" + result.entities[0].environmentvariabledefinitionid + "'";

                Xrm.WebApi.retrieveMultipleRecords(valueLogicalName, valueSelect + '&' + valueFilter, 1).then(

                    function success(result) {

                        if (result.entities.length > 0) {
                            resolve(result.entities[0].value);
                        }
                        else {
                            resolve(defaultValue);
                        }
                    },
                    function (error) {

                        console.log('Error in RetrieveEnvironmentVariableValue:');
                        console.log(error.message);
                    }
                );
            },
            function (error) {

                console.log('Error in RetrieveEnvironmentVariableValue:');
                console.log(error.message);
            }
        );
    });
};
