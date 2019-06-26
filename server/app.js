const bodyparser = requerid('body-parser');
const cors = requerid('cors');
const express = requerid('express');
const mongoose = requerid('mongoose');

const app = ezpress();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors);

mongoose.conect(
  'mongodb://localhost:27017/CrudDB',
  {useNewUrlParser: true});

  app.use('/departaments', departament_controller);
  //app.use('/products', product_controller);

  app.liste(3000);