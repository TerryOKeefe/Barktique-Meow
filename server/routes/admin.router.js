const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
  rejectNonAdmins,
} = require('../modules/authentication-middleware');
const axios = require('axios');

// PUT routes Edit employee info

router.put(
  '/editEmployee/firstName/v1/:employeeID',
  rejectUnauthenticated, rejectNonAdmins,
  async (req, res) => {
    console.log(
      `Full route and body => /api/admin/editEmployee/firstName/v1/:employeeID`
    );

    // Prepare the client to get some work done
    const client = await pool.connect();
    // deconstruct the body!
    const { employee_first_name } = req.body;
    console.log(`Params => `, req.params);
    console.log(`Data coming in => `, String(employee_first_name));
    // employee id from user table column id!
    const emp_id = Number(req.params.employeeID);
    // Query Area
    const updateEmployeeFirst = `
      UPDATE "user" SET employee_first_name=$1
      WHERE id=$2
      ;`;

    // Make sure they belong to this realm!
    if (req.isAuthenticated) {
      try {
        // Welcome
        await client.query('BEGIN');
        const putFirstName = await pool.query(updateEmployeeFirst, [
          employee_first_name,
          Number(emp_id)
        ]);
        await client.query('COMMIT');
        res.sendStatus(201);
      } catch (error) {
        console.log(
          `Sorry we had a problem editing Employee First Name`,
          error
        );
        // Send back a Lost in the Ether Code
        res.sendStatus(500);
      } finally {
        client.release();
      }
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
);

router.put(
  '/editEmployee/lastName/v1/:employeeID',
  rejectUnauthenticated,
  rejectNonAdmins,
  async (req, res) => {
    console.log(
      `Full route and body => /api/admin/editEmployee/lastName/v1/:employeeID`
    );

    // Prepare the client to get some work done
    const client = await pool.connect();
    // deconstruct the body!
    const { employee_last_name } = req.body;
    console.log(`Params => `, req.params);
    console.log(`Data coming in => `, String(employee_last_name));
    // employee id from user table column id!
    const emp_id = Number(req.params.employeeID);
    // Query Area
    const updateEmployeeLast = `
      UPDATE "user" SET employee_last_name=$1
      WHERE id=$2
      ;`;

    // Make sure they belong to this realm!
    if (req.isAuthenticated) {
      try {
        // Welcome
        await client.query('BEGIN');
        const putLastName = await pool.query(updateEmployeeLast, [
          employee_last_name,
          Number(emp_id),
        ]);
        await client.query('COMMIT');
        res.sendStatus(201);
      } catch (error) {
        console.log(`Sorry we had a problem editing Employee Last Name`, error);
        // Send back a Lost in the Ether Code
        res.sendStatus(500);
      } finally {
        client.release();
      }
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
);

router.put(
  '/editEmployee/phoneNumber/v1/:employeeID',
  rejectUnauthenticated, rejectNonAdmins,
  async (req, res) => {
    console.log(
      `Full route and body => /api/admin/editEmployee/phoneNumber/v1/:employeeID`
    );

    // Prepare the client to get some work done
    const client = await pool.connect();
    // deconstruct the body!
    const { employee_phone_number } = req.body;
    console.log(`Params => `, req.params);
    console.log(`Data coming in => `, String(employee_phone_number));
    // employee id from user table column id!
    const emp_id = Number(req.params.employeeID);
    // Query Area
    const updateEmployeePhoneNumber = `
      UPDATE "user" SET employee_phone_number=$1
      WHERE id=$2
      ;`;

    // Make sure they belong to this realm!
    if (req.isAuthenticated) {
      try {
        // Welcome
        await client.query('BEGIN');
        const putPhoneNumber = await pool.query(updateEmployeePhoneNumber, [
          employee_phone_number,
          Number(emp_id),
        ]);
        await client.query('COMMIT');
        res.sendStatus(201);
      } catch (error) {
        console.log(`Sorry we had a problem editing Employee Phone Number`, error);
        // Send back a Lost in the Ether Code
        res.sendStatus(500);
      } finally {
        client.release();
      }
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
);

router.put(
  '/editEmployee/accessLevel/v1/:employeeID',
  rejectUnauthenticated,
  rejectNonAdmins,
  async (req, res) => {
    console.log(
      `Full route and body => /api/admin/editEmployee/accessLevel/v1/:employeeID`
    );

    // Prepare the client to get some work done
    const client = await pool.connect();
    // deconstruct the body!
    const { employee_access_level } = req.body;
    console.log(`Params => `, req.params);
    console.log(`Data coming in => `, String(employee_access_level));
    // employee id from user table column id!
    const emp_id = Number(req.params.employeeID);
    // Query Area
    const updateEmployeeAccessLevel = `
      UPDATE "user" SET employee_access_level=$1
      WHERE id=$2
      ;`;

    // Make sure they belong to this realm!
    if (req.isAuthenticated) {
      try {
        // Welcome
        await client.query('BEGIN');
        const putAccessLevel = await pool.query(updateEmployeeAccessLevel, [
          employee_access_level,
          Number(emp_id),
        ]);
        await client.query('COMMIT');
        res.sendStatus(201);
      } catch (error) {
        console.log(
          `Sorry we had a problem editing Employee Access Level.`,
          error
        );
        // Send back a Lost in the Ether Code
        res.sendStatus(500);
      } finally {
        client.release();
      }
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
);


module.exports = router;
