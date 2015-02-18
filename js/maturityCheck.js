$(document).ready(function()
{

  function nextLight(light) {
    var traficLight = $(light).children();

    console.log("Actual trafficLight: " + traficLight.attr("class"));

    if(traficLight.attr("class")==='blacklight')
        traficLight.removeClass().addClass('redlight');
    else if(traficLight.attr("class")==='redlight')
        traficLight.removeClass().addClass('yellowlight');
    else if(traficLight.attr("class")==='yellowlight')
        traficLight.removeClass().addClass('greenlight');
    else if(traficLight.attr("class")==='greenlight')
        traficLight.removeClass().addClass('blacklight');

    $(".modal-body").html(generateMaturityReport());
  }

  function generateMaturityReport() {
    return $('#maturityGrid').find("tbody").html();
  }

  $(".trafficlight").click(function()
  {
    nextLight(this);
  });

  $("#generateReport").click(function()
  {
    console.log(generateMaturityReport());
  });

  $(".discipline").click(function()
  {
        $("#assertion").html("");
        $("#assertion").html($(this).next().next().html());
  });

  $(".assertions").hide();

});
