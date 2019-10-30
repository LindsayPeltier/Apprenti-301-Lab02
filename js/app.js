'use strict';

//Photo Constructor
function Photo(photo) {
  this.image_url = photo.image_url;
  this.title = photo.title;
  this.description = photo.description;
  this.keyword = photo.keyword;
  this.horns = photo.horns;
}
Photo.allPhotos = [];

Photo.prototype.render = function() {

  //1. Create Element
  let photoClone = $('#photo-template').clone();
  console.log(photoClone);
  let $photoClone = $(photoClone[0]);
  console.log($photoClone);

  //2. Give it Content
  $photoClone.find('h2').text(this.title);
  $photoClone.find('img').attr('src', this.image_url);
  $photoClone.find('p').text(this.description);
  $photoClone.find('p').text(this.keyword);
  $photoClone.find('p').text(this.horns);
  $photoClone.removeClass('clone');
  $photoClone.attr('class', this.title);

  //3. Append to the DOM
  $photoClone.appendTo('main');

};

Photo.readJson = () => {
  $.get('./data/page-1.json')
    .then(data => {
      data.forEach(item=> {
        Photo.allPhotos.push(new Photo(item));
        //console.log(item);
      });
    })
    .then(Photo.loadPhotos);
};

Photo.loadPhotos = () => {
  Photo.allPhotos.forEach(photo => photo.render());
};

$(() => Photo.readJson());


