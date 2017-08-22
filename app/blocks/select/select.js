import Selectize from 'selectize';
/*eslint-disable*/

export default () => {

  const select = $('.js-select');
  const select2 = $('.js-select2');

  if (!select.length && !select2.length) {
    console.log('obj');
    return;
  }

  Selectize.define('readOnly', function(options) {
    var self = this;

    this.setup_original = this.setup;

    this.setup = function() {
      self.setup_original();
      this.$control_input.prop("disabled", "true");
      this.$control_input.prop("readonly", "true");
    }
  });

  select.selectize({
    plugins: ['readOnly'],
    readOnly: true,
  });

  select2.selectize();
};
