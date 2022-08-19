function users(){
    return 'select * from gv_vwGetUsers';      
}

function user_id(id){
    return `select * from gv_vwGetUsers where ID = ${id}`
}

module.exports = {users, user_id };
