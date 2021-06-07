const dal = require("../data-access-layer/dal");


async function getAllFollowersAsync() {
    const sql = "SELECT userId, vacationId FROM followers";
    const followers = await dal.executeAsync(sql);
    return followers;
}


async function getDesignatedFollowsAsync(id) {
    const sql = "SELECT vacationId FROM followers WHERE userId = ${id}";
    const followers = await dal.executeAsync(sql);
    return followers[0];
}


async function addFollowAsync(follow) {
    const sql = "INSERT INTO followers(userId, vacationId) VALUES(${follow.userId}, ${follow.vacationId}";
    await dal.execute(sql);
    const info = await dal.executeAsync(sql);
    follow.id = info.insertId; // this is the new created id.
    return follow;
}


async function deleteFollowAsync(follow) {
    const sql = `DELETE FROM followers WHERE userID = ${follow.userID} AND vacationId = ${follow.vacationId}`;
    await dal.execute(sql);
}


async function deleteDesignatedFollowsAsync(id) {
    const sql = `DELETE FROM followers WHERE vacationId = ${id}`;
    await dal.execute(sql);
}



module.exports = {
    getAllFollowersAsync,
    getDesignatedFollowsAsync,
    addFollowAsync,
    deleteFollowAsync,
    deleteDesignatedFollowsAsync
}