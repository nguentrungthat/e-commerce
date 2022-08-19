
function works(field, work_id){
    if(field && work_id)
        return `select * from gv_vwGetWorks where ${field} = ${work_id}`;
    else
        return 'select * from gv_vwGetWorks';      
}

function work_receive(id){
    return `select * from gv_vwGetWorkReceives where work_id = ${id}`;
}

function work_receive_by_id(id){
    return `select * from gv_vwGetWorkReceives ID = ${id}`;
}

function project_by_userID(id){
    return `select distinct PROJECT_ID, NAME_PROJECT from gv_vwGetWorkReceives where user_id = ${id}`;
}

function work_by_projectID(body){
    return `select RECEIVE_ID, NAME_WORKS from gv_vwWork_by_projectID where PROJECT_ID = ${body.PROJECT_ID} and USER_ID = ${body.USER_ID}`;
}

//
function add_work(body){
    return `begin gv_P_Add_work(${body.USER_ID}, ${body.WORK_LEVEL_ID}, ${body.WORK_RECEIVE_ID}, ${body.WORK_EVALUTE_ID}, ${body.WORK_ID}, '${body.EVALUTE_COMMENT}', '${body.NAME_WORKS}', '${body.NOTE}','${body.END_DATE_AT}', '${body.CREATED_AT}', '${body.UPDATED_AT}', ${body.IS_SEEN}, '${body.BEGIN_DATE_AT}', ${body.STATUS}, ${body.PROJECT_ID}, '${body.WORK_GOALS}'); end;`;
}

function add_work_receive(body){
    return `begin gv_P_Add_work_receive(${body.WORK_ID}, ${body.USER_ID}, ${body.WORK_TYPE_ID}, ${body.WORK_EVALUTE_ID}, '${body.COMMENT_WORK_RECEIVE}', ${body.TOTAL_TIME}, ${body.TOTAL_TIME_CHECK}, '${body.BEGIN_DATE_AT}', '${body.END_DATE_AT}','${body.CREATED_AT}', '${body.CREATED_AT}', ${body.STATUS}, ${body.PROJECT_ID}, '${body.WORK_RECEIVE_GOALS}'); end;`;
}

function last_work(){
    return 'select * from gv_vwGetLastWork'
}

function update_work_receive(body){
    return `begin gv_P_Update_work_receive(${body.ID}, ${body.USER_ID}, '${body.COMMENT_WORK_RECEIVE}', '${body.BEGIN_DATE_AT}', '${body.END_DATE_AT}', '${body.UPDATE_AT}', '${body.WORK_RECEIVE_GOALS}'); end;`
}

function delete_work(id){
    return `begin gv_P_Delete_work(${id}); end;`
}

function delete_work_receive(id){
    return `begin gv_P_Delete_work_receive(${id}); end;`
}


function work_status(body){
    return `begin gv_P_Update_work_status(${body.ID},${body.STATUS}); end;`;
}

function work_receive_status(body){
    return `begin gv_P_Update_receive_status(${body.ID},${body.STATUS}); end;`;
}

function check_status(id){
    return `select * from gv_vwCheck_status where work_id = ${id}`
}

module.exports = {works, work_receive, add_work, add_work_receive, last_work, update_work_receive, work_receive_by_id, work_status, work_receive_status, check_status, project_by_userID, work_by_projectID, delete_work, delete_work_receive };
