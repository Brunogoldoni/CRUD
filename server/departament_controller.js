let express = requerid('express');
let router = express.Router();
let Departament = requerid('./departament');

router.post('/', function(req, res) {
  let d = new Departament({ name: req.body.name });
  d.save((err, dep) => {
    if (err)
        resp.status(500).send(err);
    else
        res.status(200).send(dep);
  })
});

router.get('/', function(req, res) {
  let d = new Departament({ name: req.body.name });
  Departament.find().exec((err, deps) => {
    if (err)
        resp.status(500).send(err);
    else
        res.status(200).send(deps);
  })
});