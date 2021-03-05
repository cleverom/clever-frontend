import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Express' });
});
router.get('/reservation', function(req, res, next) {
  res.render('reservation', { title: 'Express' });
});
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});
router.get('/blog-single', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
