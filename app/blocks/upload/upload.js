export default () => {
  /*eslint-disable*/

  $(document).on('click', '.upload', function (e) { // eslint-disable-line func-names
      if ($(e.target).hasClass('upload__input')) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      $(this).find('.upload__input').trigger('click');
    });
};
