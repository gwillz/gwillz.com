// @ts-check

const fs = require('fs');
const path = require('path');
const sprites = require('svg2sprite');

const ICONS_PATH = __dirname + "/icons/";
const OUT_PATH = __dirname + "/src/icons.hbs";

async function main() {
    console.log("loading icons from:", pp(ICONS_PATH));
    const icons = await loadIcons(ICONS_PATH);
    
    const collection = sprites.collection({
        inline: true,
        iconPrefix: "icon-",
        clean: {
            stripStyles: true,
            stripEmptyTags: true,
            stripExtraAttrs: true,
            stripAttrs: ["width", "height"],
        }
    });
    
    for (let [name, icon] of icons) {
        console.log("found:", name);
        collection.add(name, icon);
    }
    
    console.log("writing sprites:", pp(OUT_PATH));
    fs.writeFileSync(OUT_PATH, collection.compile());
}

/** @param {string} full_path */
function pp(full_path) {
    return "./" + path.relative(__dirname, full_path);
}

/**
 * @param {string} dir
 * @returns {Promise<[string, string][]>} name/data pair
 */
async function loadIcons(dir) {
    // Full paths of all .svg files.
    const paths = fs.readdirSync(dir)
        .map(p => path.resolve(dir, p))
        .filter(p => p.endsWith('.svg'));
    
    // Async-read files.
    return Promise.all(paths.map(file => new Promise((resolve, reject) => {
        fs.readFile(file, {encoding: "utf-8"}, (err, data) => {
            if (err) reject(err);
            else resolve([path.basename(file, '.svg'), data]);
        });
    })));
}

module.exports = main;

// @ts-ignore
if (require.main === module) main();
