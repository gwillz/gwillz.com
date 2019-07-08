// @ts-check

const Metalsmith = require('metalsmith');
const handlebars = require('@goodthnx/metalsmith-handlebars');
const webpack = require('@goodthnx/metalsmith-webpack');
const postcss = require('@goodthnx/metalsmith-postcss');
const watch = require('metalsmith-watch');
const serve = require('./serve');


function main() {
    const isProduction = process.env.NODE_ENV === "production";
    const isWatch = process.argv.includes("watch");
    const isServe = process.argv.includes("serve");
    
    const M = Metalsmith(__dirname)
    .clean(isProduction)
    .metadata(require('./metadata.json'))
    .source("./src")
    .destination("./public")
    .use(webpack({
        pattern: "*.ts",
        config: __dirname + "/webpack.config.js",
    }))
    .use(postcss({
        pattern: "*.css",
        config: __dirname + "/postcss.config.js",
    }))
    .use(handlebars({
        partials: __dirname + "/src",
    }))
    
    if (isWatch) {
        M.use(watch({
            paths: {
                'src/*': '**/*',
            },
        }));
    }
    
    if (isServe) {
        serve();
    }
    
    M.build(err => {
        if (err) throw err;
        console.log("success");
    });
}

if (require.main === module) main();
