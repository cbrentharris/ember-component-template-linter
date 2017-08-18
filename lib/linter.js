const Handlebars = require("handlebars");
const sh = require("shelljs");
const cwd = sh.pwd();
const fs = require("fs");
const path = require("path");

function walk(dir, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw new Error(err);
    }
  
    files.forEach((file) => {
      const fd = path.join(dir, file);
      const loc = `${dir}/${file}`;
      fs.stat(fd, (err, stat) => {
        if (err) {
          throw new Error(err);
        }
        if (stat && stat.isDirectory()) {
          walk(loc, callback);
        } else {
          callback(loc);
        }
      });
    });
  });
}

function lintTemplate(filename) {
  if (!filename.endsWith(".hbs")) {
    return;
  }
  fs.readFile(filename, { encoding: 'utf-8' }, (err, contents) => {
    const parsed = Handlebars.parse(contents);
    // TODO: Grab equivalent JS component and type check if component.
  });
}

const linter = { 
  lint: () => walk(cwd.toString(), lintTemplate)
};

export default linter;
