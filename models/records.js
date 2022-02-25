module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define("records", {
    src_pt_id: {
      type: Sequelize.STRING,
    },
    prefix: {
      type: Sequelize.STRING,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    middle_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.DATE,
    },
    sex: {
      type: Sequelize.STRING,
    },
    ethnicity: {
      type: Sequelize.STRING,
    },
    marital_status: {
      type: Sequelize.STRING,
    },
    veteran_status: {
      type: Sequelize.STRING,
    },
    tobacco_use: {
      type: Sequelize.BOOLEAN,
    },
    deceased_indicator: {
      type: Sequelize.STRING,
    },
    date_of_death: {
      type: Sequelize.STRING,
    },
    education_level: {
      type: Sequelize.INTEGER,
    },
    address_type: {
      type: Sequelize.STRING,
    },
    street: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    zip_code: {
      type: Sequelize.STRING,
    },
    primary_phone: {
      type: Sequelize.STRING,
    },
    alternate_phone: {
      type: Sequelize.STRING,
    },
    allergies: {
      type: Sequelize.STRING,
    },
    comment1: {
      type: Sequelize.STRING,
    },
    email_address: {
      type: Sequelize.STRING,
    },
    race: {
      type: Sequelize.STRING,
    },
    comment2: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
  return Record;
};
