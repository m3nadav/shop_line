const express = require('express');
const app = express();
app.set('port', process.argv[2] || 8888);

const router = express.Router()
router.get('/health', health(req, res))
router.post('/turn/:id', enterQueue(req, res))
app.use(router);
app.listen();


function health(req, res) {
  res.status(200).end('Ok');
}
