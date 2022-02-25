module.exports = (sequelize, Sequelize) => {
  const History = sequelize.define("history", {
    file: {
      type: Sequelize.STRING,
    },
    total_number_of_records: {
      type: Sequelize.INTEGER,
    },
    total_number_of_inserted_records: {
      type: Sequelize.INTEGER,
    },
    total_number_of_failed_records: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
  return History;
};
