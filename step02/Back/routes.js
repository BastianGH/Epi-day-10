import pool from './connection.js';
import express from 'express';

const router = express.Router();

/* CRUD request for Advertisements*/

/* Getting all the elements from Advertisements */
router.get('/Advertisements', async function (req,res) {
    try {
        const mysql = 'SELECT * FROM Advertisements';
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display all elements in table "Advertisements"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('Advertisements/:id', async function (req,res) {
    try {
        const mysql = `SELECT Job, ShortDescription, LongDescription, Wages, Place, Workingtime FROM Advertisements WHERE Job=${id}`;
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "Advertisements"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('Advertisements/', async function (req,res) {
    try {
        const {Job, ShortDescription, LongDescription, Wages, Place, Workingtime} = req.body;
        const mysql = `INSERT INTO Advertisements set Job=?, set ShortDescription=?, set LongDescription=?, set Wages=?, set Place=?, set Workingtime=?`; 
        const rows = await pool.query(mysql, req.Job, req.ShortDescription, req.LongDescription, req.Wages, req.Place, req.Workingtime, req.id);
        res.status(200).json(rows);
        console.log('this will create an element in table "Advertisements"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.post('Advertisements/:id', async function (req,res) {
    try {
        const {Job, ShortDescription, LongDescription, Wages, Place, Workingtime} = req.body;
        const mysql = `INSERT INTO Advertisements set Job=?, set ShortDescription=?, set LongDescription=?, set Wages=?, set Place=?, set Workingtime=? WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.Job, req.ShortDescription, req.LongDescription, req.Wages, req.Place, req.Workingtime, req.id);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Advertisements"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.post('Advertisements/:id', async function (req,res) {
    try {
        const mysql = `DELETE Advertisements WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Advertisements"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* CRUD request for Companies*/

/* Getting all the elements from Companies */
router.get('/Companies', async function (req,res) {
    try {
        const mysql = 'SELECT * FROM Companies';
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display all elements in table "Companies"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('Companies/:id', async function (req,res) {
    try {
        const mysql = `SELECT Name, Ceo, Location, Job FROM Companies WHERE Job=${id}`;
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "Companies"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('Companies/', async function (req,res) {
    try {
        const {Name, Ceo, Location, Job} = req.body;
        const mysql = `INSERT INTO Companies set Name=?, set Ceo=?, set Location=?, set Job=? `; 
        const rows = await pool.query(mysql, req.Name, req.Ceo, req.Location, req.Job);
        res.status(200).json(rows);
        console.log('this will create an element in table "Companies"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.post('Companies/:id', async function (req,res) {
    try {
        const {Name, Ceo, Location, Job} = body;
        const mysql = `INSERT INTO Companies set Name=?, set Ceo=?, set Location=?, set Job=? WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.Name, req.Ceo, req.Location, req.Job);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Companies"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.post('Companies/:id', async function (req,res) {
    try {
        const mysql = `DELETE Companies WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Companies"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* CRUD request for HumanRessources*/

/* Getting all the elements from HumanRessources */
router.get('/HumanRessources', async function (req,res) {
    try {
        const mysql = 'SELECT * FROM HumanRessources';
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display all elements in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('HumanRessources/:id', async function (req,res) {
    try {
        const mysql = `SELECT Firstname, Lastname, Status, Job FROM HumanRessources WHERE Job=${id}`;
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('HumanRessources/', async function (req,res) {
    try {
        const {Firstname, Lastname, Status, Job} = req.body;
        const mysql = `INSERT INTO HumanRessources set Firstname=?, set Lastname=?, set Status=?, set Job=?`; 
        const rows = await pool.query(mysql, req.Firstname, req.Lastname, req.Status, req.Job );
        res.status(200).json(rows);
        console.log('this will create an element in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.post('HumanRessources/:id', async function (req,res) {
    try {
        const {Firstname, Lastname, Status, Job} = body;
        const mysql = `INSERT INTO HumanRessources set Firstname=?, set Lastname=?, set Status=?, set Job=? WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.Firstname, req.Lastname, req.Status, req.Job, req.id);
        res.status(200).json(rows);
        console.log('You have changed an element in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.post('HumanRessources/:id', async function (req,res) {
    try {
        const mysql = `DELETE HumanRessources WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "HumanRessources"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* CRUD request for Informations*/

/* Getting all the elements from Informations */
router.get('/Informations', async function (req,res) {
    try {
        const mysql = 'SELECT * FROM Informations';
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display all elements in table "Informations"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('Informations/:id', async function (req,res) {
    try {
        const mysql = `SELECT Mailsent, Firstname, Lastname, Status, Job FROM Informations WHERE Job=${id}`;
        const rows = await pool.query(mysql);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "Informations"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('Informations/', async function (req,res) {
    try {
        const {Mailsent, Firstname, Lastname, Status, Job} = req.body;
        const mysql = `INSERT INTO Informations set Mailsent=?, set Firstname=?, set Lastname=?, set Status=?, set Job=?`; 
        const rows = await pool.query(mysql, req.Mailsent, req.Firstname, req.Lastname, req.Status, req.Job);
        res.status(200).json(rows);
        console.log('this will create an element in table "Informations"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.post('Informations/:id', async function (req,res) {
    try {
        const {Mailsent, Firstname, Lastname, Status, Job} = body;
        const mysql = `INSERT INTO Informations set Mailsent=?, set Firstname=?, set Lastname=?, set Status=?, set Job=? WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.Mailsent, req.Firstname, req.Lastname, req.Status, req.Job, req.id);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Informations"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.post('Informations/:id', async function (req,res) {
    try {
        const mysql = `DELETE Informations WHERE Job = ?`; 
        const rows = await pool.query(mysql, req.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Informations"');
    } catch (e) {
        res.status(400).send(error.message);
    }
    res.status(200)
});

export default router;