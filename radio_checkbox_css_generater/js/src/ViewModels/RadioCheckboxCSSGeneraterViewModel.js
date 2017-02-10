const getPrivates = require('../Util/getPrivates.js');
const RadioCheckBoxCSSGeneraterModel = require('../Models/RadioCheckBoxCSSGeneraterModel.js');
const validator = require('validator');

class RadioCheckboxCSSGeneraterViewModel {

  constructor() {
    getPrivates(this).RCModel = new RadioCheckBoxCSSGeneraterModel();
  }

  /**
   * Parsed variable style text
   *
   * @returns string
   */
  getStyle() {
    return getPrivates(this).RCModel.getStyle();
  }

  /**
   * get radio overall size
   *
   * @returns int
   */
  getRadioSize() {
    return parseInt(getPrivates(this).RCModel.getVariable('radioSize')(), 10);
  }

  /**
   * get radio center circle size
   *
   * @returns int
   */
  getRadioCircleSize() {
    return parseInt(getPrivates(this).RCModel.getVariable('radioCircleSize')(),10);
  }

  /**
   * get radio center circle color
   *
   * @returns string
   */
  getRadioCircleColor() {
    return getPrivates(this).RCModel.getVariable('radioColor')();
  }

  /**
   * get radio border color
   *
   * @returns string
   */
  getRadioBorderColor() {
    return getPrivates(this).RCModel.getVariable('radioBorderColor')();
  }

  /**
   * get checkbox overall size
   *
   * @returns int
   */
  getCheckboxSize() {
    return parseInt(getPrivates(this).RCModel.getVariable('checkboxSize')(), 10);
  }

  /**
   * get checkbox check icon size
   *
   * @returns int
   */
  getCheckboxIconSize() {
    return parseInt(getPrivates(this).RCModel.getVariable('checkboxIconSize')(), 10);
  }

  /**
   * get checkbox check icon border weight size
   *
   * @returns int
   */
  getCheckboxIconBorderSize() {
    return parseInt(getPrivates(this).RCModel.getVariable('checkboxIconBorderSize')(), 10);
  }

  /**
   * get checkbox check icon color
   *
   * @returns string
   */
  getCheckboxIconColor() {
    return getPrivates(this).RCModel.getVariable('checkboxColor')();
  }

  /**
   * get checkbox border color
   *
   * @returns string
   */
  getCheckboxBorderColor() {
    return getPrivates(this).RCModel.getVariable('checkboxBorderColor')();
  }

  /**
   * set radio overall size
   *
   * @param int value
   *
   * @returns {undefined}
   */
  setRadioSize(value) {
    if ( !validator.isInt(value, {max: 100, min: this.getRadioCircleSize()}) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('radioSize')(`${value}px`);
  }

  /**
   * set radio center circle size
   *
   * @param int value
   *
   * @returns {undefined}
   */
  setRadioCircleSize(value) {
    if ( !validator.isInt(value, {max: this.getRadioSize(), min: 10}) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('radioCircleSize')(`${value}px`);
  }

  /**
   * set checkbox border color
   *
   * @param string value
   *
   * @returns {undefined}
   */
  setRadioBorderColor(value) {
    if ( !validator.isHexColor(value.toUpperCase()) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('radioBorderColor')(value);
  }

  /**
   * set radio center circle color
   *
   * @param string value
   *
   * @returns {undefined}
   */
  setRadioCircleColor(value) {
    if ( !validator.isHexColor(value.toUpperCase()) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('radioColor')(value);
  }

  /**
   * set checkbox overall size
   *
   * @param int value
   *
   * @returns {undefined}
   */
  setCheckboxSize(value) {
    if ( !validator.isInt(value, {max: 100, min: this.getCheckboxIconSize()}) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('checkboxSize')(`${value}px`);
  }

  /**
   * set checkbox check icon size
   *
   * @param int value
   *
   * @returns {undefined}
   */
  setCheckboxIconSize(value) {
    if ( !validator.isInt(value, {max: this.getCheckboxSize(), min: 10}) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('checkboxIconSize')(`${value}px`);
  }

  /**
   * set checkbox check icon border weight size
   *
   * @param int value
   *
   * @returns {undefined}
   */
  setCheckboxIconBorderSize(value) {
    if ( !validator.isInt(value, {max: Math.round(this.getCheckboxIconSize() / 5), min: 1}) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('checkboxIconBorderSize')(`${value}px`);
  }

  /**
   * set checkbox border color
   *
   * @param string value
   *
   * @returns {undefined}
   */
  setCheckboxBorderColor(value) {
    if ( !validator.isHexColor(value.toUpperCase()) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('checkboxBorderColor')(value);
  }

  /**
   * set checkbox check icon color
   *
   * @param string value
   *
   * @returns {undefined}
   */
  setCheckboxIconColor(value) {
    if ( !validator.isHexColor(value.toUpperCase()) ) {
      return;
    }
    getPrivates(this).RCModel.getVariable('checkboxColor')(value);
  }

}

module.exports = RadioCheckboxCSSGeneraterViewModel;
