// Modules required
const cowsay = require('cowsay'),
    information = require('./information');

// Let the cow talk!
let say = cowsay.say(
{
    text: `Hello, I’m ${information.name} from ${information.campus} Campus.`,
    e: 'oO',
    T: 'U '
});
console.log(say);