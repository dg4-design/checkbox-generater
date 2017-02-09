const m = require('mithril');
module.exports = {
  view: function (vnode) {
    return m('dl', [
      m('dt', [
        'Radio overall size',
        m('span', `100〜${vnode.attrs.vm.getRadioCircleSize()}`)
      ]),
      m('dd', [
        m('input[type="number"]', {
          value: vnode.attrs.vm.getRadioSize(),
          onchange: m.withAttr('value', vnode.attrs.vm.setRadioSize.bind(vnode.attrs.vm))
        }),
        'px'
      ]),
      m('dt', ['Radio box border color',m('span', 'Hex color code')]),
      m('dd', [
        m('input[type="color"]', {
          value: vnode.attrs.vm.getRadioBorderColor(),
          onchange: m.withAttr('value', vnode.attrs.vm.setRadioBorderColor.bind(vnode.attrs.vm))
        })
      ]),
      m('dt', [
        'Radio circle size',
        m('span', `${vnode.attrs.vm.getRadioSize()}〜10`)]),
      m('dd', [
        m('input[type="number"]', {
          value: vnode.attrs.vm.getRadioCircleSize(),
          onchange: m.withAttr('value', vnode.attrs.vm.setRadioCircleSize.bind(vnode.attrs.vm))
        }),
        'px'
      ]),
      m('dt', ['Radio circle color',m('span', 'Hex color code')]),
      m('dd', [
        m('input[type="color"]', {
          value: vnode.attrs.vm.getRadioCircleColor(),
          onchange: m.withAttr('value', vnode.attrs.vm.setRadioCircleColor.bind(vnode.attrs.vm))
        })
      ]),
      m('dt', [
        'CheckBox size',
        m('span', `100〜${vnode.attrs.vm.getCheckboxIconSize()}`)
      ]),
      m('dd', [
        m('input[type="number"]', {
          value: vnode.attrs.vm.getCheckboxSize(),
          onchange: m.withAttr('value', vnode.attrs.vm.setCheckboxSize.bind(vnode.attrs.vm))
        }),
        'px'
      ]),
      m('dt', ['Check box border color',m('span', 'Hex color code')]),
      m('dd', [
        m('input[type="color"]', {
          value: vnode.attrs.vm.getCheckboxBorderColor(),
          onchange: m.withAttr('value', vnode.attrs.vm.setCheckboxBorderColor.bind(vnode.attrs.vm))
        })
      ]),
      m('dt', [
        'Checked icon size',
        m('span', `${vnode.attrs.vm.getCheckboxSize()}〜10`)
      ]),
      m('dd', [
        m('input[type="number"]', {
          value: vnode.attrs.vm.getCheckboxIconSize(),
          onchange: m.withAttr('value', vnode.attrs.vm.setCheckboxIconSize.bind(vnode.attrs.vm))
        }),
        'px'
      ]),
      m('dt', [
        'Checked icon border size',
        m('span', `${(vnode.attrs.vm.getCheckboxSize() - vnode.attrs.vm.getCheckboxSize())}〜1`)]
      ),
      m('dd', [
        m('input[type="number"]', {
          value: vnode.attrs.vm.getCheckboxIconBorderSize(),
          onchange: m.withAttr('value', vnode.attrs.vm.setCheckboxIconBorderSize.bind(vnode.attrs.vm))
        }),
        'px'
      ]),
      m('dt', ['Checked icon color',m('span', 'Hex color code')]),
      m('dd', [
        m('input[type="color"]', {
          value: vnode.attrs.vm.getCheckboxIconColor(),
          onchange: m.withAttr('value', vnode.attrs.vm.setCheckboxIconColor.bind(vnode.attrs.vm))
        })
      ]),
    ]);
  }
};
