$(document).ready(function () {
  const myVar = [];
  $('input[data-name=":amenity_name"]').change(function () {
    if ($(this).prop('checked')) {
      myVar.push($(this).data('id'));
    } else {
      const idToRemove = $(this).data('id');
      const indexToRemove = myVar.indexOf(idToRemove);
      if (indexToRemove !== -1) {
        myVar.splice(indexToRemove, 1);
      }
    }
  });
 $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (textStatus === 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
