const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

console.log('CLI Arguments', argv)

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

app.use(function(req, res, next) {
  res.status(404)

  const doggos = [
    "https://media.giphy.com/media/UkaZpqcieR38c/giphy.gif",
    "https://media.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif",
    "https://media.giphy.com/media/GBBVkpWFXCoy4/giphy.gif",
    "http://giphygifs.s3.amazonaws.com/media/O4bJPHKNO52cU/giphy.gif",
    "http://giphygifs.s3.amazonaws.com/media/qD6qDdUeyzfNu/giphy.gif",
    "https://media.giphy.com/media/Vp9rYcsH1cIVO/giphy.gif"
  ]

  const selectedDoggo = doggos[Math.floor(Math.random() * doggos.length)]

  if (req.accepts('html')) {
    res.render('404', {
      url: req.url,
      doggo: selectedDoggo
    })
    return
  }

  if (req.accepts('json')) {
    res.send({ error: 'Not found' })
    return
  }

  res.type('txt').send('Not found')
})

const PORT = argv.port || 3000;
console.log('Express server starting...');
app.listen(PORT, () => {
  console.log(`Server is is online, listening on port ${PORT}`);
});