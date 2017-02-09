class CSSVariableParser {

  /**
   * get variable name
   *
   * @returns array
   */
  getVariables(rawCSS) {
    const variableList = rawCSS.match(/(--((?!:;).)+?:((?!:;).)+?;)/gi);
    return variableList.map(function (variableRowString) {
      const matches = variableRowString.split(/:\s*/);
      return {
        key : matches[0].replace(/^--/, ''), // variable name
        value: matches[1].replace(/;$/, '')  // variable value
      };
    })
  }

  /**
   * css string fix variable
   *
   * @param string rawCSS
   * @param object variables
   *
   * @returns string
   */
  fixValiable(rawCSS, variables) {
    const variableKeyList = Object.keys(variables);
    let result = rawCSS;

    for ( const variableName of variableKeyList ) {
      const variableValue = variables[variableName]();

      const variableRegExp = new RegExp(`var\\(\\s*--${variableName}([\\s\\S]*?)\\)`, 'gi');
      result = result.replace(variableRegExp, variableValue);
    }

    return result.replace(/var\(\s*--([\S]+?)\s*,\s*([\S]+?)\)/g, '$2').replace(/:root\s*{([\s\S]*?)}/g, '');
  }
}
module.exports = CSSVariableParser;
