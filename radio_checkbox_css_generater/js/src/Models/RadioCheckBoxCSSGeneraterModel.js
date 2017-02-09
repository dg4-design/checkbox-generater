const getPrivates       = require('../Util/getPrivates.js');
const CSSVariableParser = require('../Util/CSSVariableParser.js');
const m                 = require('mithril');
const prop              = require('mithril/stream');

class RadioCheckBoxCSSGeneraterModel{

  constructor() {
    getPrivates(this).cssVariables = {};
    getPrivates(this).cssRaw       = '';
    getPrivates(this).CSSVariableParser = new CSSVariableParser();
    this.getRadioCheckBoxStyleSheet();
  }

  /**
   * get css file data
   *
   * @returns Promise
   */
  getRadioCheckBoxStyleSheet() {
    return m.request({
      url: 'css/radio_check.css',
      method: 'GET',
      deserialize: function(value) {return value;}
    }).then(this.refreshData.bind(this)).catch(function(e) {console.log(e);});
  }

  /**
   * refresh css variables and css raw
   *
   * @returns {undefined}
   */
  refreshData(value) {
    console.log('kita');
    getPrivates(this).cssRaw = value;
    const defaultVariables = getPrivates(this).CSSVariableParser.getVariables(value);
    for ( let variable of defaultVariables ) {
      this.getVariable(variable.key)(variable.value);
    }
  }

  /**
   * get style sheet variables
   *
   * @param string key
   *
   * @returns mixed
   */
  getVariable(key) {
    if ( !getPrivates(this).cssVariables[key] ) {
      getPrivates(this).cssVariables[key] = prop('');
    }
    return getPrivates(this).cssVariables[key];
  }

  /**
   * parsed variable style sheet
   *
   * @returns string
   */
  getStyle() {
    return getPrivates(this).CSSVariableParser.fixValiable(
      getPrivates(this).cssRaw,
      getPrivates(this).cssVariables
    );
  }

}
module.exports = RadioCheckBoxCSSGeneraterModel;
