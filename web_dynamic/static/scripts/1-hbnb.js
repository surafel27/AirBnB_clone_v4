$(document).ready(function () {
  const myVar = [];
  $('input[data-name=":amenity_name"]').change(function () {
    if ($(this).prop('checked', true)) {
      myVar.push($(this).data('id'));
    } else {
      const idToRemove = $(this).data('id');
      const indexToRemove = myVar.indexOf(idToRemove);
      if (indexToRemove !== -1) {
        myVar.splice(indexToRemove, 1);
      }
    }
  });
});
