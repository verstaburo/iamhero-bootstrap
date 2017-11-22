export default () => { /*eslint-disable*/

  $('.js-pdf').each(function () {
    const relativePath = '/' + $(this).attr('href');
    const fullPath = 'https://docs.google.com/gview?url=' + window.location.hostname + relativePath + '&embedded=true';

    $(this).attr('href', fullPath);
  });
};
