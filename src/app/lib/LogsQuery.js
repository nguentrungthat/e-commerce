function logs(id){
    if(id)
        return `select * from gv_vwGetLogs where ID = ${id}`;
    return 'select * from gv_vwGetLogs'
}

function logs_by_receiveID(id){
    return `select * from gv_vwGetLogs where WORK_RECEIVE_ID = ${id}`;
 }

 function logs_by_userID(id){
    return `select * from gv_vwGetLogs where USER_ID = ${id}`;
 }

function create_log(body){
    return `begin gv_P_Create_log(${body.WORK_RECEIVE_ID}, '${body.BEGIN_DATE_AT}', '${body.END_DATE_AT}', ${body.TIME_WORK_LOGS}, ${body.TIME_CHECK}, '${body.CONTENT}', '${body.TITLE}', '${body.CREATED_AT}', '${body.UPDATED_AT}'); end;`
}

function update_log(body){
    return `begin gv_P_Update_log(${body.ID}, '${body.BEGIN_DATE_AT}', '${body.END_DATE_AT}', ${body.TIME_WORK_LOGS}, ${body.TIME_CHECK}, '${body.CONTENT}', '${body.TITLE}', '${body.UPDATED_AT}'); end;`
}

function get_time(id){
    return `select * from gv_vwGetTimes where ID = ${id}`
}

function update_time(body){
    return `begin gv_P_Update_time(${body.ID},${body.TOTAL_TIME},${body.TOTAL_TIME_CHECK}); end;`
}

function receive_by_userID(id){
    return `select * from gv_vw_receive_by_userID where user_id = ${id}`;
}

function delete_log(id){
    return `begin gv_P_Delete_log(${id}); end;`
}

module.exports = {logs, update_log, create_log, get_time, update_time, receive_by_userID, logs_by_receiveID, logs_by_userID, delete_log }
