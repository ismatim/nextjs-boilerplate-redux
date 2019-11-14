import db from '../../../../data/db';

export default (req, res) => {
  console.log('\n New transaction:\n');
  console.log(req.body.type);
  console.log(req.body.amount);

  db.push({ type: req.body.type, amount: req.body.amount });

  res.status(200).send('OK');
};
