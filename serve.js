// @ts-check

const path = require('path');
const express = require('express');

const PUBLIC = path.resolve(__dirname, 'public');
const PORT = 3000 || process.env.PORT;

function main() {
    const app = express();
    
    app.get("/*", express.static(PUBLIC))
    
    app.listen(PORT, () => {
        console.log("Listening on:", PORT);
        console.log("Press Ctrl-C to quit.")
    })
}

module.exports = main;

// @ts-ignore
if (require.main === module) main();
