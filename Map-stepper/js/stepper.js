
// Defines a function that marks "newstep" active and all others inactive
function switchStep(newStep)
{
  d3.selectAll(".step-link").classed("active", false);
  d3.select("#" + newStep).classed("active", true);
}

//
function switchAnnotation(newStep)
{
  d3.selectAll(".annotation-step") // hides all anno-step CLASS
    .style("display", "none")
    .style("opacity", 0.0); // invisible

  d3.select("#" + newStep + "-annotation") // selects the new step#-anno ID
    .style("display", "block") // displays it
    .transition().delay(300).duration(500) // nice transition
      .style("opacity", 1); // makes it visible
}


// listens to all the a.step-links, and on click runs it with name "step#"
d3.selectAll("a.step-link").on("click", function(d) { 
  var clickedStep = d3.select(this).attr("id"); // grabs the id (step1, step2, step3)
  switchStep(clickedStep); //marks that step active, all others inactive
  switchAnnotation(clickedStep); //displays that section of html
  return false;
});

