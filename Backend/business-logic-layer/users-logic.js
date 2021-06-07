// const path = require("path");
const dal = require("../data-access-layer/dal");
// const filesHelper = require("../helpers/files-helper");

async function getUserNamesAsync() {
    const sql = "SELECT userName AS user FROM users";
    const users = await dal.executeAsync(sql);
    return users;
}


async function getOneUserAsync(user) {
    const sql = `SELECT userId AS id,
                 firstName,
                 lastName,,
                 userName AS user,
                 password,
                 isAdmin
                 FROM users
                 WHERE userName = ${user}`;
    const users = await dal.executeAsync(sql);
    return users[0];
}


async function addUserAsync(user) {
    const sql = `INSERT INTO users(firstName, lastName, userName, password, isAdmin)
                 VALUES('user','${user.firstName}', '${user.lastName}', '${user.userName}', '${user.password}', ${user.isAdmin})`;
    const info = await dal.executeAsync(sql);
    user.id = info.insertId; // this is the new created id.
    return user;

    // async function addUserAsync(user, image) {
    //     const sql = `INSERT INTO users(firstName, lastName, userName, password, isAdmin)
    //                  VALUES('user','${user.firstName}', '${user.lastName}', '${user.userName}', '${user.password}', ${user.isAdmin})`;
    //     const info = await dal.executeAsync(sql);
    //     user.id = info.insertId; //this is the new created id.
    // Save the image to disk:
    // const extension = image.name.substr(image.name.lastIndexOf("."));
    // const fileName = product.id + extension;
    // product.imageName = fileName;
    // const absolutePath = path.join(__dirname, "..", "images", "products", fileName);
    // await image.mv(absolutePath);
    // return user;
}

async function updateUserAsync(user, image) {
    const sql = `UPDATE users SET
                 firstName = '${user.firstName}',
                 lastName = '${user.lastName}',
                 userName = '${user.userName}',
                 password = '${user.password}'
                 isAdmin='${user.isAdmin}'
                 WHERE userID = ${user.id}`;
    const info = await dal.executeAsync(sql);
}
// Save image if exists: 
//     if (image) {
//         const extension = image.name.substr(image.name.lastIndexOf("."));
//         const fileName = product.id + extension;
//         product.imageName = fileName;
//         const absolutePath = path.join(__dirname, "..", "images", "products", fileName);
//         await image.mv(absolutePath);
//     }

//     return info.affectedRows === 0 ? null : product;
// }

// async function deleteProductAsync(id) {
//     const sql = `DELETE FROM Products WHERE ProductID = ${id}`;
//     await dal.executeAsync(sql);
//     const fileName = id + ".jpg";
//     const absolutePath = path.join(__dirname, "..", "images", "products", fileName);
//     filesHelper.safeDelete(absolutePath);
// }

module.exports = {
    getUserNamesAsync,
    getOneUserAsync,
    addUserAsync,
    updateUserAsync
};
