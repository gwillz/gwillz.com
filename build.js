// @ts-check

const Metalsmith = require('metalsmith');
const handlebars = require('@goodthnx/metalsmith-handlebars');
const webpack = require('@goodthnx/metalsmith-webpack');
const postcss = require('@goodthnx/metalsmith-postcss');


function main() {
    Metalsmith(__dirname)
    .metadata(require('./metadata.json'))
    .source("./src")
    .destination("./public")
    .use(webpack())
    .use(postcss())
    .use(handlebars())
    .build(err => {
        if (err) throw err;
        console.log("success");
    })
}

if (require.main === module) main();
