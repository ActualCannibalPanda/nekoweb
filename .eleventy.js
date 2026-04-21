import path from "node:path";
import * as sass from "sass";

export default function (eleventyConfig) {
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    useLayouts: false,

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      // Don’t compile file names that start with an underscore
      if (parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || ".", this.config.dir.includes],
      });

      // Map dependencies for incremental builds
      this.addDependencies(inputPath, result.loadedUrls);

      return async (data) => {
        return result.css;
      };
    },
  });
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addPassthroughCopy("src/css/*.css");
  eleventyConfig.addPassthroughCopy("src/scripts/*.js");
  eleventyConfig.addPassthroughCopy("src/assets/*");
  eleventyConfig.addPassthroughCopy("src/rss.xml");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
