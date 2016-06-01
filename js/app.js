$(document).foundation();

(function(){
  var buildColorDiv = function(color) {
    return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>'
  };

  var buildList = function(listValues = {}){
      var dl = document.createElement('dl');
      dl.style.border = '1px solid #999'
      dl.appendChild(buildListItem('Name', listValues.name))
      dl.appendChild(buildListItem('color', listValues.color))
      dl.appendChild(buildListItem('Age', listValues.age))
      dl.appendChild(buildListItem('Birth Place', listValues.birthplace))
      return dl;
  };

  var buildListItem = function(term, definition){
    var li = document.createElement('li');
    var dt = document.createElement('dt');
    var dd = document.createElement('dd');
    dt.innerHTML = term;
    dd.innerHTML = definition;
    li.appendChild(dt)
    li.appendChild(dd)
    return li;
  }

  var addValuesToDetails = function(ev) {
    ev.preventDefault();
    var details = document.querySelector('.details');
    var hairColor = this.hair_color;
    var colorDiv = buildColorDiv(hairColor.value);

    // ANOTHER WAY TO CREATE OBJECT
    //
    // var formValues={
    //   name: his.name.value,
    //   age: this.age.value,
    //   birthplace:this.birthplace.value,
    //   color: colorDiv
    // };


    var object = {};
    object.name = this.name.value;
    object.color= colorDiv;
    object.age = this.age.value;
    object.birthplace = this.birthplace.value;

    details.appendChild(buildList(object));

  };

  document.querySelector('form').onsubmit = addValuesToDetails;
})();
