/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
const _ = require("lodash");
const Record = require("../models").records;

const create = async (req, res) => {

    try {

      const jsonData = require('../uploads/patient_10_.json');

      const insertedRecords= await Record.bulkCreate(jsonData);

      if(insertedRecords.length==0){
        return res.status(400).json({error: `No record has been saved!`});
      }
      
      return res.status(200).json({records: insertedRecords, message: `${jsonData.length} out of ${insertedRecords.length} records have been inserted!`});

    } catch (err) {

      return res.status(500).json({ error: err.message });

    }
};

const fetchAll = async (req, res) => {
    
    try {

      const records= await Record.findAll();
      
      return res.status(200).json(records);

    } catch (err) {

      return res.status(500).json({ error: err.message });

    }

}


module.exports = {
  create,
  fetchAll
};
