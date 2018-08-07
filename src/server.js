const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

const exphbs = hbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: 'src/templates/layouts/',
  partialsDir: 'src/templates/partials/',
  helpers: {}
});

app.set('view engine', 'hbs');
app.set('views', 'src/templates/views/');
app.engine('hbs', exphbs.engine);

const JS_DIR = path.resolve(__dirname, 'js');
const CSS_DIR = path.resolve(__dirname, 'css');
const FAVICON_DIR = path.resolve(__dirname, 'favicon');
const IMAGES_DIR = path.resolve(__dirname, 'images');

app.use('/assets/js', express.static(JS_DIR));
app.use('/assets/css', express.static(CSS_DIR));
app.use('/assets/favicon', express.static(FAVICON_DIR));
app.use('/assets/images', express.static(IMAGES_DIR));

app.get('/', (req, res, next) => {
  res.render('home');
});

app.get('/project/:projectName', (req, res, next) => {
  let template;

  switch(req.params.projectName) {
    case 'passwordbox':
      template = 'project_passwordbox';
      break;

    case 'projectone12':
      template = 'projectone12';
      break;

    default:
      template = req.params.projectName;
      break;
  }

  res.render(template);
});

console.log('Express server starting...');
app.listen(3000, () => {
  console.log('Server is is online');
});