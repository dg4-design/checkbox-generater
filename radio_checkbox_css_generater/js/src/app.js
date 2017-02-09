const m = require('mithril');
const RadioCheckboxCSSGeneraterViewModel = require('./ViewModels/RadioCheckboxCSSGeneraterViewModel.js');
const StatusChangeComponent = require('./StatusChangeComponent.js');

const RadioCheckboxCSSGenerater = {

  oninit: function(vnode){
    vnode.state.vm = new RadioCheckboxCSSGeneraterViewModel();
  },

  view: function(vnode) {
    return m('div', [
        m('style', vnode.state.vm.getStyle()),
        m('h1', 'Radio CheckBox CSS Generater'),
        m('p',  'A script that outputs CSS that applies design to radio buttons and check boxes.'),
        m('div.Grid', [
          m('div.Grid--child', [
            m('h2', 'Preview'),
            m('ul', [
              m('li', m('label.radio',         m('input[type="radio"][name="radio"]'))),
              m('li', m('label.radio_text',    [m('input[type="radio"][name="radio"]'), 'Radio Text'])),
              m('li', m('label.checkbox',      m('input[type="checkbox"][name="check"]'))),
              m('li', m('label.checkbox_text', [m('input[type="checkbox"][name="check"]'), 'CheckBox Text'])),
            ])
          ]),
          m('div.Grid--child',[
            m('h2', 'Control Panel'),
            m(StatusChangeComponent, {vm: vnode.state.vm})
          ]),
        ]),
        m('div.Grid', [
          m('div.Grid--child',[
            m('h2', 'DOM'),
            m('textarea', {style: {'min-height': '200px'}, readonly: 'readonly'}, `<ul>
  <li><label class="radio"><input type="radio"></label></li>
  <li><label class="radio_text"><input type="radio">Radio Text</label></li>
  <li><label class="checkbox"><input type="checkbox"></label></li>
  <li><label class="checkbox_text"><input type="checkbox">CheckBox Text</label></li>
</ul>`)
          ]),
          m('div.Grid--child',[
            m('h2', 'CSS'),
            m('textarea', {style: {'min-height': '400px'}, readonly: 'readonly'}, vnode.state.vm.getStyle())
          ])
        ])
    ]);
  }
};
m.mount(document.body, RadioCheckboxCSSGenerater);
