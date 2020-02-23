const colors = require('./colors/colors.js');
const options = require('./options/options.js');
const slides = require('./slides/slides.js');
const email = require('./email/email.js');

const routes = {
    colors: colors,
    options: options,
    slides: slides,
    email: email,
}

module.exports = routes;