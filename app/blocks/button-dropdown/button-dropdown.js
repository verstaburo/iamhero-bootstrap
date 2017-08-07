export default () => {
  /*eslint-disable */
  const select = '.btn-select';
  const selectBtn = '.dropdown-toggle';
  const selectItem = $('.btn-select-item');
  const selectControl = select+'-control';

  selectItem.click(function (e) {
    e.preventDefault();
    const selectValue = $(this).text();
    $(this).parents(select).find(selectBtn).text(selectValue);
    $(this).parents(select).find(selectControl).val(selectValue);
  });
};
