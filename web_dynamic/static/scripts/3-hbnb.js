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
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
  fetchPlaces();
});

function fetchPlaces () {
  const PLACES_URL = 'http://0.0.0.0:5001/api/v1/places_search/';
  $.ajax({
    url: PLACES_URL,
    type: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({}),
    success: function (response) {
      for (const r of response) {
        const article = ['<article>',
          '<div class="title_box">',
        `<h2>${r.name}</h2>`,
        `<div class="price_by_night">$${r.price_by_night}</div>`,
        '</div>',
        '<div class="information">',
        `<div class="max_guest">${r.max_guest} Guest(s)</div>`,
        `<div class="number_rooms">${r.number_rooms} Bedroom(s)</div>`,
        `<div class="number_bathrooms">${r.number_bathrooms} Bathroom(s)</div>`,
        '</div>',
        '<div class="description">',
        `${r.description}`,
        '</div>',
        '</article>'];
        $('SECTION.places').append(article.join(''));
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}
