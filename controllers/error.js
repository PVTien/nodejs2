const rootDIr = require('../util/path');
const path = require('path');

exports.error404 = (req,res,next)=>{
    res.status(404).sendFile(path.join(rootDIr,'views','404.html'));
}