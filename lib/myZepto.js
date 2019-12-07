require('zepto')
require('./touch.js')
window.Zepto = Zepto;
window.$ === undefined && (window.$ = Zepto);
module.exports = $;