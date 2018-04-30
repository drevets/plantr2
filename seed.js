const db = require('./models');

db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
  }).catch(err => {
    console.log('SOMETHING IS WRONG');
    console.log(err)
  }).finally(() => {
    db.close();
  })
