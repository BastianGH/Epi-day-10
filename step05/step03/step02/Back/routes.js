import pool from './connection.js';
import express from 'express';
import app from './server.js';

const router = express.Router();

/* Route pour la connection */

router.get('/Connection', async function (req,res) {
    try {
        /* Vérifier le contenu */

        console.log(req.body);

        /* Vérifiez que l'utilisateur existe */

        if (req.body.email) {
            const select = `SELECT * FROM Users WHERE Email=? `;
            const rows1 = await pool.query(select, req.body.email);
            console.log("l'utilisateur existe"+rows1);
            /* S'il existe, vérifier que le mot de passe correspond */
            if ( req.body.password === rows1.password ){
                console.log("Bon mot de passe connection autorisé");
                /* Si c'est le cas on lance le processus : 
                -changement de "State" de l'User de 0 à 1 pour dire que l'User est à présent connecté;
                -stockage de cette valeur dans le cookie pour que le navigateur s'en souvienne et laisse cet user connecté. */
                const update = `UPDATE Users SET State=1 WHERE Email = ?`; 
                const rows2 = await pool.query(update, req.body.email);
                console.log(rows2);
                /* On a changé la valeur dans la base de données pour cet utilisateur */
                const select = `SELECT * FROM Users WHERE Email=? `;
                const rows1 = await pool.query(select, req.body.email);
                /* On recherche à nouveau les valeurs pour pouvoir les utiliser sur tout le site */
                console.log(rows1);
                document.cookie = rows1;
                /* Maintenant pour employer le fait qu'on a notre user connecté, on pourra utiliser document.cookie.State = 1 par exemple pour leur avertir que l'user est connecté */
                document.location.href="http://localhost:8080";
                /* On redirige l'utilisateur sur la page d'acceuil */

            }else 
            /* Si le mot de passe ne correspont pas */
            console.log ("Le mot de passe est erroné");
        }else {
            /* S'il n'exsite pas */
            console.log("Le compte cherché n'existe pas");
        }       
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});

/* Route pour la déconnection */

router.get('/Disonnection', async function (req,res) {
    try {
        /* On change le status de l'utilisateur */
        const update = `UPDATE Users SET State=0 WHERE Email = ?`; 
        const rows1 = await pool.query(update, req.body.email);
        console.log(rows1);
        /* On a changé la valeur dans la base de données pour cet utilisateur */
        const select = `SELECT * FROM Users WHERE Email=? `;
        const rows2 = await pool.query(select, req.body.email);
        /* On supprime le cookie pour cet utilisateur */
        document.cookie = "";
        /* Maintenant pour employer le fait qu'on a notre user connecté, on pourra utiliser document.cookie.State = 1 par exemple pour leur avertir que l'user est connecté */
        document.location.href="http://localhost:8080";
        /* On redirige l'utilisateur sur la page d'acceuil */   
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});

/* Route pour changer les paramètres */

router.get('/Update', async function (req,res) {
    try {
        /* On récupère les valeur entrées */
        console.log(req.body);
        /* pour chaque valeur récupérer on modifie la row de l'User */
        /* On change le status de l'utilisateur */
        const update = `UPDATE Users SET Firstname=?, Lastname=?, Status=?, Phone=?, Email=?, Password=?, Email=?, WHERE Email = ?`; 
        const rows2 = await pool.query(update, req.body);
        console.log(rows2);
        /* On le cookie pour cet utilisateur */
        document.cookie = rows2;
        /* Maintenant pour employer le fait qu'on a notre user connecté, on pourra utiliser document.cookie.State = 1 par exemple pour leur avertir que l'user est connecté */
        document.location.href="http://localhost:8080";
        /* On redirige l'utilisateur sur la page d'acceuil */   
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Route pour le formulaire */

/* Route pour l'inscription */

router.post('/registration', async function (req,res) {
    try {
        /* On affiche les données récupérés */
        console.log(req.body);
        const {Firstname, Lastname, Status, Job, Email, Password, Phone, State} = req.body;
        const sqlQuery = `INSERT INTO Users ( Firstname, Lastname, Status, Job, Email, Password, Phone, State) VALUES (?,?,?,?,?,?,?,?)`; 
        const rows = await pool.query(sqlQuery, [ Firstname, Lastname, Status, Job, Email, Password, Phone, State] );
        res.status(200).json(rows);
        console.log('this registration has created an element in table "Users"');
        res.send(req.params.name);
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});

/* Route pour le formulaire */

router.get('/Sendemail', async function (req,res) {
    try{
        const path = require('path');
        app.use(express.static("views"));
        app.use(cors());
        const bodyParser = require("express").json;
        app.use(bodyParser());
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.AUTH_EMAIL,
                path: process.env.AUTH_PASS,
            }
        })
        const transporter_pro = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAUth2",
                user: process.env.AUTH_EMAIL,
                clientId: process.env.AUTH_CLIENT_ID,
                clientSecret: process.env.AUTH_CLIENT_SECRET,
                refreshToken: process.env.AUTH_REFRESH_TOKEN
            }
        })
        transporter_pro.verify((error, success) => {
            if(error){
                console.log("error");
            }else {
                console.log("Ready for messages");
                console.log("success");
            }
        })
        app.post("/sendemail", (req,res) => {
            const mailOptions = {
                from: this.name,
                to: process.env.AUTH_EMAIL,
                subject: "Applying for the post of "+this.chosenJob,
                text: message+" You can call me back, here my phone number : "+this.phone,
            }
            transporter_pro
                .sendMail(mailOptions)
                .then(() => {
                    res.sendFile(path.join(__dirname, "../Front/my-project/src/components/Form.vue"));
                })
                .catch((error) => {
                    console.log(error);
                    res.json({status: "FAILED", message: "An error occured ! "})
                })

            app.get("/", (req, res) => {
                res.sendFile(path.join(__dirname, "../Front/my-project/src/components/Form.vue"));
            })
            res.sendFile(path.join(__dirname, "/"));
            res.send("hihi");
        })
    }catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
})

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
        let {Job, ShortDescription, LongDescription, Wages, Place, Workingtime} = req.body;
        const sqlQuery = 'UPDATE Advertisements SET Job=?, ShortDescription=?, LongDescription=?, Wages=?, Place=?, Workingtime=? WHERE Job = ?;'; 
        const rows = await pool.query(sqlQuery, [Job, ShortDescription, LongDescription, Wages, Place, Workingtime, req.params.id] );
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
        const sqlQuery = `DELETE FROM Advertisements WHERE Job = ?`; 
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
router.get('/Companies/:id', async function (req,res) {
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
router.post('/Companies', async function (req,res) {
    try {
        const { Name, Ceo, Location, Job} = req.body;
        const sqlQuery = 'INSERT INTO Companies ( Name, Ceo, Location, Job) VALUES ( ?,?,?,?)'; 
        const rows = await pool.query(sqlQuery, [ Name, Ceo, Location, Job]);
        res.status(200).json(rows);
        console.log('this will create an element in table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.put('/Companies/:id', async function (req,res) {
    try {
        const {Name, Ceo, Location, Job} = req.body;
        const sqlQuery = `UPDATE Companies SET Name=?, Ceo=?, Location=?, Job=? WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, [ Name, Ceo, Location, Job, req.params.id]);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.delete('/Companies/:id', async function (req,res) {
    try {
        const sqlQuery = `DELETE FROM Companies WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Companies"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* CRUD request for Users*/

/* Getting all the elements from Users */
router.get('/Users', async function (req,res) {
    try {
        const sqlQuery = 'SELECT * FROM Users';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        console.log('this should display all elements in table "Users"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
    
});
/* Getting a row with the job name */
router.get('/Users/:id/:id2', async function (req,res) {
    try {
        const sqlQuery = `SELECT * FROM Users WHERE Job=? AND Status=?`;
        const rows = await pool.query(sqlQuery, [ req.params.id, req.params.id2]);
        res.status(200).json(rows);
        console.log('this should display the Job = $Job elements in table "Users"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* creating a new row */
router.post('/Users', async function (req,res) {
    try {
        const {Firstname, Lastname, Status, Job, Email} = req.body;
        const sqlQuery = `INSERT INTO Users ( Firstname, Lastname, Status, Job, Email) VALUES (?,?,?,?,?)`; 
        const rows = await pool.query(sqlQuery, [ Firstname, Lastname, Status, Job, Email] );
        res.status(200).json(rows);
        console.log('this will create an element in table "Users"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* changing a row with the job name */
router.put('/Users/:id', async function (req,res) {
    try {
        const {Firstname, Lastname, Status, Job} = req.body;
        const sqlQuery = `UPDATE Users SET Firstname=?, Lastname=?, Status=?, Job=? WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, [ Firstname, Lastname, Status, Job, req.params.id]);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Users"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.delete('/Users/:id', async function (req,res) {
    try {
        const sqlQuery = `DELETE FROM Users WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Users"');
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
router.get('/Informations/:id', async function (req,res) {
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
router.post('/Informations', async function (req,res) {
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
router.put('/Informations/:id', async function (req,res) {
    try {
        const {Mailsent, Firstname, Lastname, Status, Job} = req.body;
        const sqlQuery = `UPDATE Informations SET Mailsent=?, Firstname=?, Lastname=?, Status=?, Job=? WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, [ Mailsent, Firstname, Lastname, Status, Job, req.params.id]);
        res.status(200).json(rows);
        console.log('You have changed an element in table "Informations"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});
/* Deleting a row with the job name */
router.delete('/Informations/:id', async function (req,res) {
    try {
        const sqlQuery = `DELETE FROM Informations WHERE Job = ?`; 
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log('the element has been deleted from table "Informations"');
    } catch (e) {
        res.status(400).send(e.message);
    }
    res.status(200)
});

export default router;