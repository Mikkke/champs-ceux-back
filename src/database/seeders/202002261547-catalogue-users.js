const catalogueUser = require("../seeds/202002261547-catalogue-users");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("users", catalogueUser);
  },
  down: queryInterface => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
