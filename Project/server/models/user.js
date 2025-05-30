// const users = [
//   {
//     userId: 12345,
//     userName: "cathy123",
//     password: "icecream"
//   },
//   {
//     userId: 55555,
//     userName: "bobbi",
//     password: "badpasswd"
//   }

const con = require('./db_connect')

async function createTable(){
    let sql = `CREATE TABLE IF NOT EXISTS USERS (
        UserId INT NOT NULL AUTO_INCREMENT,
        Username VARCHAR(60) NOT NULL,
        Email VARCHAR(255) NOT NULL,
        Firstname VARCHAR(50) NOT NULL,
        Lastname VARCHAR(50) NOT NULL,
        Password VARCHAR(255) NOT NULL,
        CONSTRAINT userPK PRIMARY KEY(UserId)
    );`
    await con.query(sql)
}
createTable()


//CRUD
async function getAllUsers() {
    let sql = `SELECT * FROM Users;`
    return await con.query(sql)
}

//Read in CRUD = logging in a user
async function loginUser(user){
    console.log(user)
    let cUser = await userExists(user.Username)
    if(!cUser[0]) throw Error('User does not exist!')
    if(cUser[0].Password != user.Password) throw Error('Password is incorrect!')
    return cUser[0]
}

async function userExists(Username){
    console.log(Username)
    let sql= `
    SELECT * FROM Users
    WHERE Username = "${Username}"
    `
    const u = await con.query(sql)
    console.log(u)
    return await con.query(sql)
}

//Create in CRUD = Registering a user
async function registerUser(user){
    const cUser = await userExists(user.Username)
    if(cUser.length > 0) throw Error('User already exists!')
    
    let sql = `
    INSERT INTO Users(Username,Email,Firstname,Lastname,Password)
    VALUES("${user.Username}", "${user.Email}","${user.Firstname}", "${user.Lastname}", "${user.Password}")
    `
    await con.query(sql)
    return await loginUser(user)
}

async function editUser(user){
    let sql = `
    UPDATE Users SET
    username = "${user.Username}"
    WHERE userId =  ${user.UserId}
    `

    await con.query(sql)
    const currentUser = await userExists(user.Username)
    return currentUser[0]
}


//User Example:
const user = {
    Username: "ThomasShelby",
    Email: "myEmail@gmail.com",
    Firstname: "Thomas",
    Lastname: "Woods",
    Password: "tommygun98!"
}

async function deleteAccount(user) {
    console.log(user)
    let sql = `
      DELETE FROM Users
      WHERE userId = ${user.UserId}
    `
    await con.query(sql)
  }
  





module.exports = {getAllUsers, loginUser, userExists, registerUser, editUser, deleteAccount}