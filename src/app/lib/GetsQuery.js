function GetLevels(){
    return 'select * from gv_vwGetLevels';
}

function GetEvalutes(){
    return 'select * from gv_vwGetEvalutes';
}

function GetTypes(){
    return 'select * from gv_vwGetTypes';
}

function GetProjects(){
    return 'select * from gv_vwGetProject';
}

module.exports = {GetLevels, GetEvalutes, GetTypes, GetProjects }
