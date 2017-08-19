const Handlebars = require("handlebars");

/**
 * This file lints handlebars templates to ensure they are using injected
 * properties and JavaScript APIs correctly.
 */
class TemplateLinter {

  /**
   * This file takes as input a filename, then parses it if it is a
   * handlebars file and typechecks the following:
   * 1) Injected models
   * 2) Invoked components
   * @param {string} filename -- the file name to type check
   */
  static typeCheckTemplate(filename) {
    if (!filename.endsWith(".hbs")) {
      return;
    }
    fs.readFile(filename, { encoding: 'utf-8' }, (err, contents) => {
      const parsed = Handlebars.parse(contents);
      // TODO: Grab equivalent JS component and type check if component.
      // SO for ember components, we need to check whatever is injected.
    });
  }
}

export default TemplateLinter;
