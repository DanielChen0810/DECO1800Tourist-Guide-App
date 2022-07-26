$(function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-33.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // 线条设置
  var polyOptions = {
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  }
  poly = new google.maps.Polyline(polyOptions);
  poly.setMap(map);

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  var html = "";
  imgArr = [
    {img:"images/1.jfif",locations:0},
    {img:"images/2.jfif",locations:1},
    {img:"images/3.jfif",locations:2},
  ];
  var locations = [
    ['Bondi Beach', -33.890542, 151.274856],
    ['Coogee Beach',-33.950198, 151.259302],
    ['Cronulla Beach', -34.028249, 151.157507],
  ];
  imgArr.sort(function() {
    return Math.random() - 0.5;
  });
  for (var i = 0; i < imgArr.length; i++) {
    html +=`<div class='item' data-location="${imgArr[i].locations}" data-id=" + (i + 1) + ">`;
    html += "<img src=" + imgArr[i].img + " >";
    html += " <p ></p>";
    html += `<div class='number' ></div>`
    html += "</div>";
  }
  $(".gameContainer").html(html);

  //翻牌
  var count = 0;
  var id1, id2, src1, src2;
  var flag = true;//开关
  var routes = []
  $(".item").click(function() {
    if ($(this).find("img").hasClass("on")) {
      return;
    }
    var currentLocation = $(this).data("location")
    routes.push(locations[Number.parseInt(currentLocation)])
    $(this).find("img").css({ opacity: 1, transform: "scale(1,1)" }).addClass("on");
    $(this).find("p").css({ opacity: 0, transform: "scale(0,1)" });
    var path = poly.getPath();    //获取线条的坐标
    path.push(new google.maps.LatLng(locations[count][1], locations[count][2]));    //为线条添加标记坐标
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      label:count+1+""
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));

    count++;
    $(this).find(".number").text(count)
    if (count==imgArr.length){
      Lobibox.confirm({
        buttons: {
          yes: {
            'class': 'lobibox-btn lobibox-btn-yes',
            text: 'Accept',
            closeOnClick: true
          },
          no: {
            'class': 'lobibox-btn lobibox-btn-no',
            text: 'Leave',
            closeOnClick: true
          },
        },
        title:"Final Route",
        msg: `Final route: ${routes[0][0]} -> ${routes[1][0]} ->  ${routes[2][0]}`
      });
    }
  });

  function Fz(ids) {
    $("[data-id=" + ids + "]").find("img").css({ opacity: 0, transform: "scale(0,1)" }).removeClass("on");
    $("[data-id=" + ids + "]").find("p").css({ opacity: 1, transform: "scale(1,1)" });
  }





});
