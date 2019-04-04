// @ts-check

const path = require('path');
const express = require('express');

const PUBLIC = path.resolve(__dirname, 'public');
const PORT = 3000 || process.env.PORT;

function main() {
    const app = express();
    
    app.get("/*", (req, res) => {
        res.sendFile(PUBLIC + req.path);
    })
    
    app.listen(PORT, () => {
        console.log("Listening on:", PORT);
        console.log("Press Ctrl-C to quit.")
    })
}

if (require.main === module) main();
