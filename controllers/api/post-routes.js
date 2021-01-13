const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req,res) => {
    const body = req.body;
    console.log(req.session.userId);
    Post.create({...body, userId: req.session.userId})
    .then(newPost => {
        res.json(newPost);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//console logs to find URL here to update path to edit.js
router.put("/:id", withAuth, (req,res) => {
  console.log("res: "+res);
  console.log("request: "+req);
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(affectedRows => {
        if(affectedRows > 0) {
            res.status(200).end();
        } else{
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.get('/delete/:id', withAuth, function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM User WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect('/users/user-list');
    
  });

module.exports = router;