import pool from './connection.js';
import express from 'express';

const router = express.Router();

/* CRUD request for Advertisements*/

/* Getting all the elements from Advertisements */
router.get('/Advertisements', async function (req,res) {
    try {
        const sqlQuery = 'SELECT * FROM Advertisements';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        console.log('this should display all elements in table "Advertisements"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('/Advertisements/:id', async function (req,res) {
    try {
        const sqlQuery = 'SELECT Job, ShortDescription, LongDescription, Wages, Place, Workingtime FROM Advertisements WHERE Job=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "Advertisements"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('/Advertisements', async function (req,res) {
    try {
        console.log(req.body);
        const { Job, ShortDescription, LongDescription, Wages, Place, Workingtime } = req.body;
        const sqlQuery = 'INSERT INTO Advertisements ( Job, ShortDescription, LongDescription, Wages, Place, Workingtime ) VALUES ( ?,?,?,?,?,? )'; 
        const rows = await pool.query(sqlQuery, [Job, ShortDescription, LongDescription, Wages, Place, Workingtime]);
        res.status(200).json(rows);
        console.log('this will create an element in table "Advertisements"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.put('/Advertisements/:id', async function (req,res) {
    try {
        const {Job, ShortDescription, LongDescription, Wages, Place, Workingtime} = req.body;
        const sqlQuery = `UPDATE Advertisements set Job=?, set ShortDescription=?, set LongDescription=?, set Wages=?, set Place=?, set Workingtime=? WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, [Job, ShortDescription, LongDescription, Wages, Place, Workingtime], req.params.id);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Advertisements"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.delete('/Advertisements/:id', async function (req,res) {
    try {
        const sqlQuery = `DELETE Advertisements WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Advertisements"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* CRUD request for Companies*/

/* Getting all the elements from Companies */
router.get('/Companies', async function (req,res) {
    try {
        const sqlQuery = 'SELECT * FROM Companies';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        console.log('this should display all elements in table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('Companies/:id', async function (req,res) {
    try {
        const sqlQuery = `SELECT Name, Ceo, Location, Job FROM Companies WHERE Job=?`;
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('Companies/', async function (req,res) {
    try {
        const { Name, Ceo, Location, Job} = req.body;
        const sqlQuery = `INSERT INTO Companies ( Name, Ceo, Location, Job) VALUES ( ?,?,?,?) `; 
        const rows = await pool.query(sqlQuery, [ Name, Ceo, Location, Job]);
        res.status(200).json(rows);
        console.log('this will create an element in table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.put('Companies/:id', async function (req,res) {
    try {
        const {Name, Ceo, Location, Job} = req.body;
        const sqlQuery = `UPDATE Companies set Name=?, set Ceo=?, set Location=?, set Job=? WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, [ Name, Ceo, Location, Job], req.params.id);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.post('Companies/:id', async function (req,res) {
    try {
        const sqlQuery = `DELETE Companies WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* CRUD request for HumanRessources*/

/* Getting all the elements from HumanRessources */
router.get('/HumanRessources', async function (req,res) {
    try {
        const sqlQuery = 'SELECT * FROM HumanRessources';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        console.log('this should display all elements in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('HumanRessources/:id', async function (req,res) {
    try {
        const sqlQuery = `SELECT Firstname, Lastname, Status, Job FROM HumanRessources WHERE Job=?`;
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('/HumanRessources/', async function (req,res) {
    try {
        const {Firstname, Lastname, Status, Job} = req.body;
        const sqlQuery = `INSERT INTO HumanRessources ( Firstname, Lastname, Status, Job) VALUES (?,?,?,?)`; 
        const rows = await pool.query(sqlQuery, [ Firstname, Lastname, Status, Job] );
        res.status(200).json(rows);
        console.log('this will create an element in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.put('/HumanRessources/:id', async function (req,res) {
    try {
        const {Firstname, Lastname, Status, Job} = req.body;
        const sqlQuery = `UPDATE HumanRessources set Firstname=?, set Lastname=?, set Status=?, set Job=? WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, [ Firstname, Lastname, Status, Job], req.params.id);
        res.status(200).json(rows);
        console.log('You have changed an element in table "HumanRessources"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.post('HumanRessources/:id', async function (req,res) {
    try {
        const sqlQuery = `DELETE HumanRessources WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "HumanRessources"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* CRUD request for Informations*/

/* Getting all the elements from Informations */
router.get('/Informations', async function (req,res) {
    try {
        const sqlQuery = 'SELECT * FROM Informations';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        console.log('this should display all elements in table "Informations"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('Informations/:id', async function (req,res) {
    try {
        const sqlQuery = `SELECT Mailsent, Firstname, Lastname, Status, Job FROM Informations WHERE Job=?`;
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "Informations"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('Informations/', async function (req,res) {
    try {
        const {Mailsent, Firstname, Lastname, Status, Job} = req.body;
        const sqlQuery = `INSERT INTO Informations ( Mailsent, Firstname, Lastname, Status, Job) VALUES (?,?,?,?,?)`; 
        const rows = await pool.query(sqlQuery, [ Mailsent, Firstname, Lastname, Status, Job]);
        res.status(200).json(rows);
        console.log('this will create an element in table "Informations"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.put('Informations/:id', async function (req,res) {
    try {
        const {Mailsent, Firstname, Lastname, Status, Job} = req.body;
        const sqlQuery = `UPDATE Informations set Mailsent=?, set Firstname=?, set Lastname=?, set Status=?, set Job=? WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, [ Mailsent, Firstname, Lastname, Status, Job], req.params.id);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Informations"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.post('Informations/:id', async function (req,res) {
    try {
        const sqlQuery = `DELETE Informations WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Informations"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});

export default router;