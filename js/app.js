$(document).foundation();

var buildColorDiv = function(color) {
  return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>'
};

var buildList = function(listValues = {}){
    return ' \
    <dl> \
      <dt>Name</dt> \
      <dd>' + listValues.name + '</dd> \
          \
      <dt>Hair Color</dt> \
      <dd>' + listValues.color + '</dd> \
        \
      <dt>Age</dt> \
      <dd>' + listValues.age+ '</dd> \
        \
      <dt>Birthplace</dt> \
      <dd>' + listValues.birthplace + '</dd> \
    </dl>';
};

var addValuesToDetails = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('.details');
  var hairColor = this.hair_color;
  var colorDiv = buildColorDiv(hairColor.value);

  var object = {};
  object.name = this.name.value;
  object.color= colorDiv;
  object.age = this.age.value;
  object.birthplace = this.birthplace.value;

  details.innerHTML += buildList(object);

};

document.querySelector('form').onsubmit = addValuesToDetails;
