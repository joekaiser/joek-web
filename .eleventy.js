const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");

function getRandom(min, max) {
    const floatRandom = Math.random();

    const difference = max - min;

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom);

    const randomWithinRange = random + min;

    return randomWithinRange;
}

module.exports = function (eleventyConfig) {
    const md = new markdownIt({
        html: true,
    });

    // Disable automatic use of your .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Merge data instead of overriding
    eleventyConfig.setDataDeepMerge(true);

    // human readable date
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
    });

    eleventyConfig.addFilter("excerpt", (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, "");
        return content.substr(0, content.lastIndexOf(".", 250)) + ".";
    });

    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    // Syntax Highlighting for Code blocks
    eleventyConfig.addPlugin(syntaxHighlight);

    // To Support .yaml Extension in _data
    // You may remove this if you can use JSON
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

    // Copy Static Files to /_Site
    eleventyConfig.addPassthroughCopy({
        "./src/admin/config.yml": "./admin/config.yml",
        "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
        "./node_modules/prismjs/themes/prism-tomorrow.css": "./static/css/prism-tomorrow.css",
    });

    // Copy Image Folder to /_site
    eleventyConfig.addPassthroughCopy("./src/static/img");

    // Copy favicon to route of /_site
    eleventyConfig.addPassthroughCopy("./src/favicon.ico");

    // Minify HTML
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }

        return content;
    });

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    return {
        dir: {
            input: "src",
        },
        htmlTemplateEngine: "njk",
    };
};
