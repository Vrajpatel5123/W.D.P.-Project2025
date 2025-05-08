const con = require('./db_connect')


async function createTable(){
    let sql = `CREATE TABLE IF NOT EXISTS CHAT (
        ChatId INT NOT NULL AUTO_INCREMENT,
        ChatMsg TEXT NOT NULL,
        usersendto INT NULL,
        UserId INT NOT NULL,
        CONSTRAINT chatPK PRIMARY KEY(ChatId),
        CONSTRAINT userFK FOREIGN KEY (UserId) REFERENCES Users(UserId)
    );`
    await con.query(sql)
}
createTable()

//CreateChat and getAllChat need to be implemented in the frontend inside postChat.js

async function getAllChats(){
    let sql = `
    SELECT * FROM CHAT;`

    return await con.query(sql)
}

//Create a chat table function
async function createChat(chat){
    let sql = `
    UPDATE chat SET
    ChatMsg = "${chat.ChatMsg}",
    usersendto = ${chat.usersendto}
    WHERE UserId = ${chat.UserId};
    `
    await con.query(sql)
}


// Create a delete chat function, update chat function and send chat function
async function deleteChat(ChatId){
    let sql = `
    DELETE FROM chat 
    WHERE ChatId = ${ChatId};
    `
    await con.query(sql)
}

module.exports = {createChat, deleteChat, getAllChats}