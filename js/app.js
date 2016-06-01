$(document).foundation()

document.querySelector('form').onsubmit = function(ev){
        ev.preventDefault();
        var details = document.querySelector('div.details');
        var name =this.firstName
        var hairColor = this.hairColor
        var age = this.age
        var birthplace = this.birthplace

        var colorDiv = '<div style="height:100px; width: 100px; background-color: '+hairColor.value+'" >  </div>'
        // details.innerHTML += "<strong>Name: </strong>" +  + ' | ';
        // details.innerHTML += "<strong>Hair Color: </strong>" + + " | ";
        // details.innerHTML += "<strong>Age: </strong>" +  + " | ";
        // details.innerHTML += "<strong>Birth Place: </strong>" +  + '</p>';

        details.innerHTML += ' \
          <dl>\
            <dt>Name<dt>\
            <dd>'+ name.value +'</dd>\
            \
            <dt>Hair Color<dt>\
            <dd>'+ hairColor.value +'</dd>\
            \
            <dt>Age<dt>\
            <dd>'+ age.value +'</dd>\
            \
            <dt>Birthplace<dt>\
            <dd>'+ birthplace.value +'</dd>\
        </dl>';

       };
