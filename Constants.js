if (typeof Ndxc === 'undefined') Ndxc = {};
if (typeof Ndxc.Constants === "undefined") Ndxc.Constants = {};

Ndxc.Constants.EnvironmentVariableDefinition = {

    LogicalName: "environmentvariabledefinition",
    Id: "environmentvariabledefinitionid",
    SchemaName: "schemaname",
    DefaultValue: "defaultvalue",
    DisplayName: "displayname",
}

Ndxc.Constants.EnvironmentVariableValue = {

    LogicalName: "environmentvariablevalue",
    Id: "environmentvariablevalueid",
    Value: "value",
    EnvironmentVariableDefinition_Value: "_environmentvariabledefinitionid_value",
}

Ndxc.Constants.SecurityRoles = {

    SystemAdministrator: "System Administrator",
}
