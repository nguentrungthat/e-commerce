const helper = require('../../app/lib/helper');

function get_workModel(obj){
    let works =[];
    if(obj){
        obj.forEach(element => {
            let work = {
                ID: element.ID,
                NAME_WORKS: element.NAME_WORKS,
                NOTE: element.NOTE,
                USER_ID: element.USER_ID,
                NAME_USERS: element.NAME_USERS,
                NAME_WORK_LEVELS: element.NAME_WORK_LEVELS,
                BEGIN_DATE_AT: element.BEGIN_DATE_AT,
                END_DATE_AT: element.END_DATE_AT,
                IS_SEEN: element.IS_SEEN,
                NAME_RECEIVERS: ' ',
                TOTAL_TIME: 0,
                STATUS: element.STATUS,
                NAME_PROJECT: element.NAME_PROJECT,
                WORK_GOALS: element.WORK_GOALS,
            }
            works.push(work);
        });
    }
    return works;
}

function receivesModel(obj){
    let work_receive = {
        ID: null,
        WORK_ID: null, 
        USER_ID: null, 
        WORK_TYPE_ID: null, 
        WORK_EVALUTE_ID: null, 
        COMMENT_WORK_RECEIVE: ' ', 
        TOTAL_TIME: 0, 
        TOTAL_TIME_CHECK: 0, 
        BEGIN_DATE_AT: new Date().toLocaleString('en-GB'), 
        END_DATE_AT: new Date().toLocaleString('en-GB'), 
        CREATED_AT: new Date().toLocaleString('en-GB'), 
        UPDATE_AT: new Date().toLocaleString('en-GB'),
        STATUS: 1,
        PROJECT_ID: null,
        WORK_RECEIVE_GOALS: ' '
    };
    if(obj){
        work_receive = {
            ID: helper.check(obj.ID, null),
            WORK_ID: helper.check(obj.WORK_ID, null), 
            USER_ID: helper.check(obj.USER_ID, null), 
            WORK_TYPE_ID: helper.check(obj.WORK_TYPE_ID, null),
            WORK_EVALUTE_ID: helper.check(obj.WORK_EVALUTE_ID, null), 
            COMMENT_WORK_RECEIVE: helper.check(obj.COMMENT_WORK_RECEIVE, ' '), 
            TOTAL_TIME: helper.check(obj.TOTAL_TIME, 0), 
            TOTAL_TIME_CHECK: helper.check(obj.TOTAL_TIME_CHECK, 0), 
            BEGIN_DATE_AT: helper.check(new Date(obj.BEGIN_DATE_AT).toLocaleString('en-GB'), new Date().toLocaleString('en-GB')), 
            END_DATE_AT: helper.check(new Date(obj.END_DATE_AT).toLocaleString('en-GB'), new Date().toLocaleString('en-GB')), 
            CREATED_AT: new Date().toLocaleString('en-GB'), 
            UPDATE_AT: new Date().toLocaleString('en-GB'),
            STATUS: 1,
            PROJECT_ID: helper.check(obj.PROJECT_ID, null),
            WORK_RECEIVE_GOALS: helper.check(obj.WORK_RECEIVE_GOALS, ' ')
        }     
    }
    return work_receive;
}

function workModel(obj){
    let work = { 
        ID: null,
        USER_ID: null, 
        WORK_LEVEL_ID: null,
        WORK_RECEIVE_ID: null, 
        WORK_EVALUTE_ID: null, 
        WORK_ID: null, 
        EVALUTE_COMMENT: ' ',
        NAME_WORKS: ' ', 
        NOTE: ' ', 
        BEGIN_DATE_AT: new Date().toLocaleString('en-GB'),
        END_DATE_AT: new Date().toLocaleString('en-GB'), 
        CREATED_AT: new Date().toLocaleString('en-GB'), 
        UPDATED_AT: new Date().toLocaleString('en-GB'), 
        IS_SEEN: 0,
        STATUS: 1,
        PROJECT_ID: null,
        WORK_GOALS: ' '
    };
    if(obj){
        work = { 
            ID: helper.check(obj.ID, null),
            USER_ID: helper.check(obj.USER_ID, null), 
            WORK_LEVEL_ID: helper.check(obj.WORK_LEVEL_ID, null),
            WORK_RECEIVE_ID: helper.check(obj.WORK_RECEIVE_ID, null), 
            WORK_EVALUTE_ID: helper.check(obj.WORK_EVALUTE_ID, null), 
            WORK_ID: helper.check(obj.WORK_ID, null), 
            EVALUTE_COMMENT: helper.check(obj.EVALUTE_COMMENT, ' '),
            NAME_WORKS: helper.check(obj.NAME_WORKS, ' '), 
            NOTE: helper.check(obj.NOTE, ' '), 
            BEGIN_DATE_AT: helper.check(new Date(obj.BEGIN_DATE_AT).toLocaleString('en-GB'), new Date().toLocaleString('en-GB')),
            END_DATE_AT: helper.check(new Date(obj.END_DATE_AT).toLocaleString('en-GB'), new Date().toLocaleString('en-GB')), 
            CREATED_AT: helper.check(new Date(obj.CREATED_AT).toLocaleString('en-GB'), new Date().toLocaleString('en-GB')), 
            UPDATED_AT: helper.check(new Date(obj.UPDATED_AT).toLocaleString('en-GB'), new Date().toLocaleString('en-GB')), 
            IS_SEEN: helper.check(obj.IS_SEEN, 0),
            STATUS: 1,
            PROJECT_ID: helper.check(obj.PROJECT_ID, null),
            WORK_GOALS: helper.check(obj.WORK_GOALS, ' ')
        };
    }
    return work;
}

function logModel(obj){
    let now = new Date();
    let logs = [];
    let log = {
        ID: null,
        WORK_RECEIVE_ID: null,
        BEGIN_DATE_AT: now.toLocaleString('en-GB'),
        END_DATE_AT: now.toLocaleString('en-GB'),
        TIME_WORK_LOGS: 0,
        TIME_CHECK: 0,
        CONTENT: ' ',
        TITLE: ' ',
        CREATED_AT: now.toLocaleString('en-GB'),
        UPDATED_AT: now.toLocaleString('en-GB')
    };
    if(obj){
        for(let element of obj){
            log = {
                ID: helper.check(element.ID, null),
                WORK_RECEIVE_ID: element.WORK_RECEIVE_ID,
                BEGIN_DATE_AT: helper.check(new Date(element.BEGIN_DATE_AT).toLocaleString('en-GB'), now.toLocaleString('en-GB')),
                END_DATE_AT: helper.check(new Date(element.END_DATE_AT).toLocaleString('en-GB'), now.toLocaleString('en-GB')),
                TIME_WORK_LOGS: helper.check(element.TIME_WORK_LOGS, 0),
                TIME_CHECK: helper.check(element.TIME_CHECK, 0),
                CONTENT: helper.check(element.CONTENT, ' '),
                TITLE: helper.check(element.TITLE, ' '),
                CREATED_AT: helper.check(new Date(element.CREATED_AT).toLocaleString('en-GB'), now.toLocaleString('en-GB')),
                UPDATED_AT: now.toLocaleString('en-GB')
            }
            logs.push(log);
        };
    };
    return logs;
}

module.exports =  {get_workModel, workModel, receivesModel, logModel };
