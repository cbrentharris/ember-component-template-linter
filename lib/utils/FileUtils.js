const sh = require("shelljs");
const cwd = sh.pwd();
const fs = require("fs");
const path = require("path");

/**
 * This is a utility class for performing operations on files not available
 * in fs.
 */
class FiteUtils {

  /**
   *
   * This function will perform the injected callback when walking the
   * directory if the current item in the directory being walked over is
   * a file. Otherwise, it recursively walks the directory.
   *
   * @param {string} dir -- the directory to walk
   * @param {function} callback -- the function to apply on the files
   */
  static walk(dir, callback) {
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
            FiteUtils.walk(loc, callback);
          } else {
            callback(loc);
          }
        });
      });
    });
  }
}

export default FileUtils;
