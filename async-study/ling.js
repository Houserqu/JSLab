function setValve(list, index) {
  $("#on span").html("");
  if (index < list.length) {
    var room = list[index];
    var valve = room.valve;
    var scale = room.scale;
    var roomname = room.roomname;
    $("#on .operation_left span").html(roomname);
    if (valve == "--") {
      $("#on .operation_left span").html("");
      $("#on .operation_right span").html("");
      $("#results").prepend("<div class='operation_result'><div class='operation_left'>执行结束：<span>" + roomname + "<span></div><div class='operation_right'>执行结果：<span>请完善阀门地址</span></div></div>");
      $("#total .operation_right span").html(++finished);
      setValve(list, ++index);
    } else {
      $.ajax({
        url: "http://192.168.0.119:8780/ctrl/scaleCtrl?valve=" + valve + "&scale=" + scale,
        dataType: 'json',
        type: 'GET',
        async: false,
        success: function (data) {
          var t = 0;
          var id = data.CtrlId;
          var flag = false;

          var interval = setInterval(function () {
            if (t == 8) {
              //zhuijia
              $("#results").prepend("<div class='operation_result'><div class='operation_left'>执行结束：<span>" + roomname + "<span></div><div class='operation_right'>执行结果：<span>操作失败</span></div></div>");
              finished++;
              $("#total .operation_right span").html(finished);
              // flag = true;
              clearInterval(interval);
              
              // ++++++++++++++
              setValve(list, ++index);
              // ++++++++++++++

            } else {
              var re = getResult(id);
              if (!re.Over) {
                $("#on .operation_right span").html(re.ExecResult);
                t++;
              }
              else {
                $("#on .operation_left span").html("");
                $("#on .operation_right span").html("");
                $("#results").prepend("<div class='operation_result'><div class='operation_left'>执行结束：<span>" + roomname + "<span></div><div class='operation_right'>执行结果：<span>" + re.ExecResult + "</span></div></div>");
                finished++;
                $("#total .operation_right span").html(finished);
                // flag = true;
                clearInterval(interval);

                // ++++++++++++++
                setValve(list, ++index);
                // ++++++++++++++

              }

            }

          }, 15000);

          // var interval0 = setInterval(function () {
          //   if (flag) {
          //     setValve(list, ++index);
          //     clearInterval(interval0);
          //   }
          // }, 2000);

        }
      });
    }
  }

}