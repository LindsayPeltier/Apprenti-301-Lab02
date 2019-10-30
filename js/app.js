'use strict';

//Photo Constructor
function Photo(photo) {
  this.image_url = photo.image_url;
  this.title = photo.title;
  this.description = photo.description;
  this.keyword = photo.keyword;
  this.horns = photo.horns;
}
photo.allphotos = [];

Photo.prototype.render = function() {

  //1. Create Element
  let photoClone = $('#photo-template').clone();
  console.log(photoClone);
  let $photoClone = $(photoClone[0].content);
  console.log($photoClone);

  //2. Give it Content
  $photoClone.find('h2').text(this.title);
  $photoClone.find('img').attr('src', this.image_url);
  $photoClone.find('p').text(this.description);

  //3. Append to the DOM
  $photoClone.appendTo('main');

};

Photo.readJson = () => {
  $.get('./data/page-1.json')
    .then(data => {
      data.forEach(item=> {
        Photo.allphotos.push(new Photo(item));
        console.log(item);
      });
    })
    .then(Photo.loadPhotos);
};

Photo.loadPhotos = () => {
  Photo.allPhotos.forEach(photo => photo.render());
};

$(() => Photo.readJson());


