const dal = require("../data-access-layer/dal");
const filesHelper = require("../helpers/files-helper");


async function getAllVacationsAsync() {
    const sql = "SELECT target, startDate, endDate, price, description, image, numberOfFollowers FROM vacations";
    const vacations = await dal.executeAsync(sql);
    return vacations;
}


async function addVacationAsync(vacation) {
    const sql = "INSERT INTO vacations(target, startDate, endDate, price, description, image, numberOfFollowers ) VALUES('${vacation.target}', '${vacation.startDate}', '${vacation.endDate}', ${vacation.price}, '${vacation.description}', '${vacation.image}', ${vacation.numberOfFollowers} )";
    const info = await dal.executeAsync(sql);
    user.id = info.insertId; // this is the new created id.
    return vacation;
}

async function updateVacationAsync(vacation) {
    const sql = `UPDATE vacations SET
                 target = '${vacation.target}',
                 startDate = '${vacation.startDate}',
                 endDate = '${vacation.endDate}',
                 price = '${vacation.price}',
                 description = '${vacation.description}',
                 image = '${vacation.image}',
                 numberOfFollowers = '${vacation.numberOfFollowers}'
                 WHERE vacationId = ${vacation.id}`;
    return await dal.execute(sql);
}


async function deleteVacationAsync(id) {
    const sql = `DELETE FROM vacations WHERE vacationId = ${id}`;
    await dal.executeAsync(sql);
    const fileName = id + ".jpg";
    const absolutePath = path.join(__dirname, "..", "images", "vacations", fileName);
    filesHelper.safeDelete(absolutePath);
}


module.exports = {
    getAllVacationsAsync,
    addVacationAsync,
    updateVacationAsync,
    deleteVacationAsync
}