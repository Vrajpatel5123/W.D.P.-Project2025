const con = require('./db_connect')


function createTable(){
    let sql = `CREATE TABLE IF NOT EXISTS CHAT (
        ChatId INT NOT NULL AUTO_INCREMENT,
        ChatMsg TEXT NOT NULL,
        usersendto INT NULL,
        UserId INT NOT NULL,
        CONSTRAINT chatPK PRIMARY KEY(ChatId),
        CONSTRAINT userFK FOREIGN KEY (usersendto) REFERENCES Users(UserId),
    )`
}

//Create a chat table function


// Create a delete chat function, update chat function and send chat function