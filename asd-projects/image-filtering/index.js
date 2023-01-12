// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
  for(filter in filters){
    $('#filterSelect').append($(`<input type ='checkbox' id = ${filter} name = ${filter} value = 'false'>`))
    $('#filterSelect').append($(`<label for = ${filter}>${filter}</label><br>`))
  }
  $('#filterSelect').change(function(){
    for(filter in filters){
      if($(`#${filter}`)[0].checked){
        activeFilters[filter] = filters[filter];
      }
      else{
        delete activeFilters[filter]
      }
    }
  })
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  //applyFilterNoBackground(filters.reddify);
  //applyFilterNoBackground(decreaseBlue);
  //applyFilterNoBackground(increaseGreenByBlue);
  //applySmudge(basicSmudge);
  for(filter in activeFilters){
    if(filter.includes('Smudge')){
      applySmudge(activeFilters[filter])
    }
    else{
      applyFilterNoBackground(activeFilters[filter])
    }
  }

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here


// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function


// TODO 3: Create reddify function


// TODO 6: Create more filter functions


// CHALLENGE code goes below here
