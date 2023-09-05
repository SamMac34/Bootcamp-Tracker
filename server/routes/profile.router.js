const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  //get all information for specific user on profile page 
  router.get('/',rejectUnauthenticated, (req, res) => {
      console.log('req.user is', req.user);
    console.log('inside of /profile GET router side');
    let userId = req.user.id
    console.log('user id is ',userId);
    let queryText= `SELECT
    job_info.id AS job_info_id,
    job_info."job_title",
    job_info."job_level",
    job_info."job_type",
    job_info."workplace",
    job_info."company",
    job_info."state",
    job_info."promotion",
    job_info."job_number",
    job_info."hours",
    job_info."date_hired",
    job_info."salary",
    benefits."health_insurance",
    benefits."dental_insurance",
    benefits."PTO",
    benefits."401K",
    benefits."equity",
    benefits."total_yearly_bonus",
    benefits."long_term_disability",
    benefits."short_term_disability",
    benefits."notes",
    bootcamp."graduation_date",
    bootcamp."bootcamp"
FROM
    job_info
INNER JOIN
    benefits ON job_info.id = benefits.job_id
INNER JOIN
    bootcamp ON job_info.user_id = bootcamp.user_id
WHERE
    job_info.user_id = $1;
    `
    //bringing in the pool 
    pool.query(queryText, [userId])
        .then((result) => {
            //sending table row data
            res.send(result.rows)
        }).catch((err) => {
            //catch error 
            console.log('error getting profile data router side', err);
            res.sendStatus(500)
        })
  })

  module.exports = router;