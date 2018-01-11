    var erreur = 0;
    const db = require('./dataBase');
    console.log(req.body.register_name.length);
    if (req.body.register_name.length < 5) {
        erreur = 1;
        //Faire un genre de popup d'erreur
    }
    if (erreur == 0) {
        db.connection("INSERT INTO utilisateur (login, mdp, email,nom,prenom) VALUES ('" + req.body.register_name + "', '" + req.body.register_mdp + "', '" + req.body.register_email + "', 'test', 'test')");
    }
        res.render('post.ejs');