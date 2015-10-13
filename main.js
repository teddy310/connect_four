 var turn = 1;
    function reset(){

        $(".btns").removeClass('black-cell');
        $(".btns").removeClass('red-cell');

    }
    $("#reset").click(reset);

  $('.btns').click(function() {

      if( turn === 1 ) {
          if ($(this).hasClass("black-cell")){
            $(this).removeClass("black-cell")
          } else if ($(this).hasClass("red-cell")){
            alert("Nice Try Dummy, you just waisted a turn!");
          } else{
            $(this).toggleClass("red-cell");
          } console.log( this );

        turn = 2;
        winner();

      } else {
          if ($(this).hasClass("red-cell")){
            $(this).removeClass("red-cell")
          } else if ($(this).hasClass("black-cell")){
            alert("Nice Try Dummy, you just waisted a turn!");
          } else{
            $(this).toggleClass("black-cell");
          } console.log( this );

        turn = 1;
        winner();

      }
    })

      function winner(){
        if (
          // row 1
          document.getElementById("1").getAttribute('class') == "btns red-cell" &&
          document.getElementById("2").getAttribute('class') == "btns red-cell" &&
          document.getElementById("3").getAttribute('class') == "btns red-cell" &&
          document.getElementById("4").getAttribute('class') == "btns red-cell" ||
          document.getElementById("2").getAttribute('class') == "btns red-cell" &&
          document.getElementById("3").getAttribute('class') == "btns red-cell" &&
          document.getElementById("4").getAttribute('class') == "btns red-cell" &&
          document.getElementById("5").getAttribute('class') == "btns red-cell" ||
          document.getElementById("3").getAttribute('class') == "btns red-cell" &&
          document.getElementById("4").getAttribute('class') == "btns red-cell" &&
          document.getElementById("5").getAttribute('class') == "btns red-cell" &&
          document.getElementById("6").getAttribute('class') == "btns red-cell" ||
          document.getElementById("4").getAttribute('class') == "btns red-cell" &&
          document.getElementById("5").getAttribute('class') == "btns red-cell" &&
          document.getElementById("6").getAttribute('class') == "btns red-cell" &&
          document.getElementById("7").getAttribute('class') == "btns red-cell" ||
          // row 2
          document.getElementById("8").getAttribute('class') == "btns red-cell" &&
          document.getElementById("9").getAttribute('class') == "btns red-cell" &&
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("11").getAttribute('class') == "btns red-cell" ||
          document.getElementById("9").getAttribute('class') == "btns red-cell" &&
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("12").getAttribute('class') == "btns red-cell" ||
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("12").getAttribute('class') == "btns red-cell" &&
          document.getElementById("13").getAttribute('class') == "btns red-cell" ||
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("12").getAttribute('class') == "btns red-cell" &&
          document.getElementById("13").getAttribute('class') == "btns red-cell" &&
          document.getElementById("14").getAttribute('class') == "btns red-cell" ||
          // row 3
          document.getElementById("15").getAttribute('class') == "btns red-cell" &&
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" ||
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" ||
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("20").getAttribute('class') == "btns red-cell" ||
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("20").getAttribute('class') == "btns red-cell" &&
          document.getElementById("21").getAttribute('class') == "btns red-cell" ||
          // row 4
          document.getElementById("22").getAttribute('class') == "btns red-cell" &&
          document.getElementById("23").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" ||
          document.getElementById("23").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" ||
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" ||
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" &&
          document.getElementById("28").getAttribute('class') == "btns red-cell" ||
          // row 5
          document.getElementById("29").getAttribute('class') == "btns red-cell" &&
          document.getElementById("30").getAttribute('class') == "btns red-cell" &&
          document.getElementById("31").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" ||
          document.getElementById("30").getAttribute('class') == "btns red-cell" &&
          document.getElementById("31").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" ||
          document.getElementById("31").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" &&
          document.getElementById("34").getAttribute('class') == "btns red-cell" ||
          document.getElementById("32").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" &&
          document.getElementById("34").getAttribute('class') == "btns red-cell" &&
          document.getElementById("35").getAttribute('class') == "btns red-cell" ||
          // row 6
          document.getElementById("36").getAttribute('class') == "btns red-cell" &&
          document.getElementById("37").getAttribute('class') == "btns red-cell" &&
          document.getElementById("38").getAttribute('class') == "btns red-cell" &&
          document.getElementById("39").getAttribute('class') == "btns red-cell" ||
          document.getElementById("37").getAttribute('class') == "btns red-cell" &&
          document.getElementById("38").getAttribute('class') == "btns red-cell" &&
          document.getElementById("39").getAttribute('class') == "btns red-cell" &&
          document.getElementById("40").getAttribute('class') == "btns red-cell" ||
          document.getElementById("38").getAttribute('class') == "btns red-cell" &&
          document.getElementById("39").getAttribute('class') == "btns red-cell" &&
          document.getElementById("40").getAttribute('class') == "btns red-cell" &&
          document.getElementById("41").getAttribute('class') == "btns red-cell" ||
          document.getElementById("39").getAttribute('class') == "btns red-cell" &&
          document.getElementById("40").getAttribute('class') == "btns red-cell" &&
          document.getElementById("41").getAttribute('class') == "btns red-cell" &&
          document.getElementById("42").getAttribute('class') == "btns red-cell" ||
          // down 1
          document.getElementById("1").getAttribute('class') == "btns red-cell" &&
          document.getElementById("8").getAttribute('class') == "btns red-cell" &&
          document.getElementById("15").getAttribute('class') == "btns red-cell" &&
          document.getElementById("22").getAttribute('class') == "btns red-cell" ||
          document.getElementById("8").getAttribute('class') == "btns red-cell" &&
          document.getElementById("15").getAttribute('class') == "btns red-cell" &&
          document.getElementById("22").getAttribute('class') == "btns red-cell" &&
          document.getElementById("29").getAttribute('class') == "btns red-cell" ||
          document.getElementById("15").getAttribute('class') == "btns red-cell" &&
          document.getElementById("22").getAttribute('class') == "btns red-cell" &&
          document.getElementById("29").getAttribute('class') == "btns red-cell" &&
          document.getElementById("36").getAttribute('class') == "btns red-cell" ||
          // down 2
          document.getElementById("2").getAttribute('class') == "btns red-cell" &&
          document.getElementById("9").getAttribute('class') == "btns red-cell" &&
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("23").getAttribute('class') == "btns red-cell" ||
          document.getElementById("9").getAttribute('class') == "btns red-cell" &&
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("23").getAttribute('class') == "btns red-cell" &&
          document.getElementById("30").getAttribute('class') == "btns red-cell" ||
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("23").getAttribute('class') == "btns red-cell" &&
          document.getElementById("30").getAttribute('class') == "btns red-cell" &&
          document.getElementById("37").getAttribute('class') == "btns red-cell" ||
          // down 3
          document.getElementById("3").getAttribute('class') == "btns red-cell" &&
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" ||
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("31").getAttribute('class') == "btns red-cell" ||
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("31").getAttribute('class') == "btns red-cell" &&
          document.getElementById("38").getAttribute('class') == "btns red-cell" ||
          // down 4
          document.getElementById("4").getAttribute('class') == "btns red-cell" &&
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" ||
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" ||
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" &&
          document.getElementById("39").getAttribute('class') == "btns red-cell" ||
          // down 5
          document.getElementById("5").getAttribute('class') == "btns red-cell" &&
          document.getElementById("12").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" ||
          document.getElementById("12").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" ||
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" &&
          document.getElementById("40").getAttribute('class') == "btns red-cell" ||
          // down 6
          document.getElementById("6").getAttribute('class') == "btns red-cell" &&
          document.getElementById("13").getAttribute('class') == "btns red-cell" &&
          document.getElementById("20").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" ||
          document.getElementById("13").getAttribute('class') == "btns red-cell" &&
          document.getElementById("20").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" &&
          document.getElementById("34").getAttribute('class') == "btns red-cell" ||
          document.getElementById("20").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" &&
          document.getElementById("34").getAttribute('class') == "btns red-cell" &&
          document.getElementById("41").getAttribute('class') == "btns red-cell" ||
          // down 7
          document.getElementById("7").getAttribute('class') == "btns red-cell" &&
          document.getElementById("14").getAttribute('class') == "btns red-cell" &&
          document.getElementById("21").getAttribute('class') == "btns red-cell" &&
          document.getElementById("28").getAttribute('class') == "btns red-cell" ||
          document.getElementById("14").getAttribute('class') == "btns red-cell" &&
          document.getElementById("21").getAttribute('class') == "btns red-cell" &&
          document.getElementById("28").getAttribute('class') == "btns red-cell" &&
          document.getElementById("35").getAttribute('class') == "btns red-cell" ||
          document.getElementById("21").getAttribute('class') == "btns red-cell" &&
          document.getElementById("28").getAttribute('class') == "btns red-cell" &&
          document.getElementById("35").getAttribute('class') == "btns red-cell" &&
          document.getElementById("42").getAttribute('class') == "btns red-cell" ||
          // NW to SE
          document.getElementById("15").getAttribute('class') == "btns red-cell" &&
          document.getElementById("23").getAttribute('class') == "btns red-cell" &&
          document.getElementById("31").getAttribute('class') == "btns red-cell" &&
          document.getElementById("39").getAttribute('class') == "btns red-cell" ||

          document.getElementById("8").getAttribute('class') == "btns red-cell" &&
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" ||
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" &&
          document.getElementById("40").getAttribute('class') == "btns red-cell" ||

          document.getElementById("1").getAttribute('class') == "btns red-cell" &&
          document.getElementById("9").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" ||
          document.getElementById("9").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" ||
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" &&
          document.getElementById("41").getAttribute('class') == "btns red-cell" ||

          document.getElementById("2").getAttribute('class') == "btns red-cell" &&
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" ||
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("34").getAttribute('class') == "btns red-cell" ||
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("34").getAttribute('class') == "btns red-cell" &&
          document.getElementById("42").getAttribute('class') == "btns red-cell" ||

          document.getElementById("3").getAttribute('class') == "btns red-cell" &&
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" ||
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" &&
          document.getElementById("35").getAttribute('class') == "btns red-cell" ||

          document.getElementById("4").getAttribute('class') == "btns red-cell" &&
          document.getElementById("12").getAttribute('class') == "btns red-cell" &&
          document.getElementById("20").getAttribute('class') == "btns red-cell" &&
          document.getElementById("28").getAttribute('class') == "btns red-cell" ||
          // NE to SW
          document.getElementById("4").getAttribute('class') == "btns red-cell" &&
          document.getElementById("10").getAttribute('class') == "btns red-cell" &&
          document.getElementById("16").getAttribute('class') == "btns red-cell" &&
          document.getElementById("22").getAttribute('class') == "btns red-cell" ||

          document.getElementById("5").getAttribute('class') == "btns red-cell" &&
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("23").getAttribute('class') == "btns red-cell" ||
          document.getElementById("11").getAttribute('class') == "btns red-cell" &&
          document.getElementById("17").getAttribute('class') == "btns red-cell" &&
          document.getElementById("23").getAttribute('class') == "btns red-cell" &&
          document.getElementById("29").getAttribute('class') == "btns red-cell" ||

          document.getElementById("6").getAttribute('class') == "btns red-cell" &&
          document.getElementById("12").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" ||
          document.getElementById("12").getAttribute('class') == "btns red-cell" &&
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("30").getAttribute('class') == "btns red-cell" ||
          document.getElementById("18").getAttribute('class') == "btns red-cell" &&
          document.getElementById("24").getAttribute('class') == "btns red-cell" &&
          document.getElementById("30").getAttribute('class') == "btns red-cell" &&
          document.getElementById("36").getAttribute('class') == "btns red-cell" ||

          document.getElementById("7").getAttribute('class') == "btns red-cell" &&
          document.getElementById("13").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" ||
          document.getElementById("13").getAttribute('class') == "btns red-cell" &&
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("31").getAttribute('class') == "btns red-cell" ||
          document.getElementById("19").getAttribute('class') == "btns red-cell" &&
          document.getElementById("25").getAttribute('class') == "btns red-cell" &&
          document.getElementById("31").getAttribute('class') == "btns red-cell" &&
          document.getElementById("37").getAttribute('class') == "btns red-cell" ||

          document.getElementById("14").getAttribute('class') == "btns red-cell" &&
          document.getElementById("20").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" ||
          document.getElementById("20").getAttribute('class') == "btns red-cell" &&
          document.getElementById("26").getAttribute('class') == "btns red-cell" &&
          document.getElementById("32").getAttribute('class') == "btns red-cell" &&
          document.getElementById("38").getAttribute('class') == "btns red-cell" ||

          document.getElementById("21").getAttribute('class') == "btns red-cell" &&
          document.getElementById("27").getAttribute('class') == "btns red-cell" &&
          document.getElementById("33").getAttribute('class') == "btns red-cell" &&
          document.getElementById("39").getAttribute('class') == "btns red-cell"

        ){
          alert("The Winner is Red!!!");
          reset();

        } else if (
          // row 1
          document.getElementById("1").getAttribute('class') == "btns black-cell" &&
          document.getElementById("2").getAttribute('class') == "btns black-cell" &&
          document.getElementById("3").getAttribute('class') == "btns black-cell" &&
          document.getElementById("4").getAttribute('class') == "btns black-cell" ||
          document.getElementById("2").getAttribute('class') == "btns black-cell" &&
          document.getElementById("3").getAttribute('class') == "btns black-cell" &&
          document.getElementById("4").getAttribute('class') == "btns black-cell" &&
          document.getElementById("5").getAttribute('class') == "btns black-cell" ||
          document.getElementById("3").getAttribute('class') == "btns black-cell" &&
          document.getElementById("4").getAttribute('class') == "btns black-cell" &&
          document.getElementById("5").getAttribute('class') == "btns black-cell" &&
          document.getElementById("6").getAttribute('class') == "btns black-cell" ||
          document.getElementById("4").getAttribute('class') == "btns black-cell" &&
          document.getElementById("5").getAttribute('class') == "btns black-cell" &&
          document.getElementById("6").getAttribute('class') == "btns black-cell" &&
          document.getElementById("7").getAttribute('class') == "btns black-cell" ||
          // row 2
          document.getElementById("8").getAttribute('class') == "btns black-cell" &&
          document.getElementById("9").getAttribute('class') == "btns black-cell" &&
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("11").getAttribute('class') == "btns black-cell" ||
          document.getElementById("9").getAttribute('class') == "btns black-cell" &&
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("12").getAttribute('class') == "btns black-cell" ||
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("12").getAttribute('class') == "btns black-cell" &&
          document.getElementById("13").getAttribute('class') == "btns black-cell" ||
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("12").getAttribute('class') == "btns black-cell" &&
          document.getElementById("13").getAttribute('class') == "btns black-cell" &&
          document.getElementById("14").getAttribute('class') == "btns black-cell" ||
          // row 3
          document.getElementById("15").getAttribute('class') == "btns black-cell" &&
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" ||
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" ||
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("20").getAttribute('class') == "btns black-cell" ||
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("20").getAttribute('class') == "btns black-cell" &&
          document.getElementById("21").getAttribute('class') == "btns black-cell" ||
          // row 4
          document.getElementById("22").getAttribute('class') == "btns black-cell" &&
          document.getElementById("23").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" ||
          document.getElementById("23").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" ||
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" ||
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" &&
          document.getElementById("28").getAttribute('class') == "btns black-cell" ||
          // row 5
          document.getElementById("29").getAttribute('class') == "btns black-cell" &&
          document.getElementById("30").getAttribute('class') == "btns black-cell" &&
          document.getElementById("31").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" ||
          document.getElementById("30").getAttribute('class') == "btns black-cell" &&
          document.getElementById("31").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" ||
          document.getElementById("31").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" &&
          document.getElementById("34").getAttribute('class') == "btns black-cell" ||
          document.getElementById("32").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" &&
          document.getElementById("34").getAttribute('class') == "btns black-cell" &&
          document.getElementById("35").getAttribute('class') == "btns black-cell" ||
          // row 6
          document.getElementById("36").getAttribute('class') == "btns black-cell" &&
          document.getElementById("37").getAttribute('class') == "btns black-cell" &&
          document.getElementById("38").getAttribute('class') == "btns black-cell" &&
          document.getElementById("39").getAttribute('class') == "btns black-cell" ||
          document.getElementById("37").getAttribute('class') == "btns black-cell" &&
          document.getElementById("38").getAttribute('class') == "btns black-cell" &&
          document.getElementById("39").getAttribute('class') == "btns black-cell" &&
          document.getElementById("40").getAttribute('class') == "btns black-cell" ||
          document.getElementById("38").getAttribute('class') == "btns black-cell" &&
          document.getElementById("39").getAttribute('class') == "btns black-cell" &&
          document.getElementById("40").getAttribute('class') == "btns black-cell" &&
          document.getElementById("41").getAttribute('class') == "btns black-cell" ||
          document.getElementById("39").getAttribute('class') == "btns black-cell" &&
          document.getElementById("40").getAttribute('class') == "btns black-cell" &&
          document.getElementById("41").getAttribute('class') == "btns black-cell" &&
          document.getElementById("42").getAttribute('class') == "btns black-cell" ||
          // down 1
          document.getElementById("1").getAttribute('class') == "btns black-cell" &&
          document.getElementById("8").getAttribute('class') == "btns black-cell" &&
          document.getElementById("15").getAttribute('class') == "btns black-cell" &&
          document.getElementById("22").getAttribute('class') == "btns black-cell" ||
          document.getElementById("8").getAttribute('class') == "btns black-cell" &&
          document.getElementById("15").getAttribute('class') == "btns black-cell" &&
          document.getElementById("22").getAttribute('class') == "btns black-cell" &&
          document.getElementById("29").getAttribute('class') == "btns black-cell" ||
          document.getElementById("15").getAttribute('class') == "btns black-cell" &&
          document.getElementById("22").getAttribute('class') == "btns black-cell" &&
          document.getElementById("29").getAttribute('class') == "btns black-cell" &&
          document.getElementById("36").getAttribute('class') == "btns black-cell" ||
          // down 2
          document.getElementById("2").getAttribute('class') == "btns black-cell" &&
          document.getElementById("9").getAttribute('class') == "btns black-cell" &&
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("23").getAttribute('class') == "btns black-cell" ||
          document.getElementById("9").getAttribute('class') == "btns black-cell" &&
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("23").getAttribute('class') == "btns black-cell" &&
          document.getElementById("30").getAttribute('class') == "btns black-cell" ||
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("23").getAttribute('class') == "btns black-cell" &&
          document.getElementById("30").getAttribute('class') == "btns black-cell" &&
          document.getElementById("37").getAttribute('class') == "btns black-cell" ||
          // down 3
          document.getElementById("3").getAttribute('class') == "btns black-cell" &&
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" ||
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("31").getAttribute('class') == "btns black-cell" ||
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("31").getAttribute('class') == "btns black-cell" &&
          document.getElementById("38").getAttribute('class') == "btns black-cell" ||
          // down 4
          document.getElementById("4").getAttribute('class') == "btns black-cell" &&
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" ||
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" ||
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" &&
          document.getElementById("39").getAttribute('class') == "btns black-cell" ||
          // down 5
          document.getElementById("5").getAttribute('class') == "btns black-cell" &&
          document.getElementById("12").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" ||
          document.getElementById("12").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" ||
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" &&
          document.getElementById("40").getAttribute('class') == "btns black-cell" ||
          // down 6
          document.getElementById("6").getAttribute('class') == "btns black-cell" &&
          document.getElementById("13").getAttribute('class') == "btns black-cell" &&
          document.getElementById("20").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" ||
          document.getElementById("13").getAttribute('class') == "btns black-cell" &&
          document.getElementById("20").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" &&
          document.getElementById("34").getAttribute('class') == "btns black-cell" ||
          document.getElementById("20").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" &&
          document.getElementById("34").getAttribute('class') == "btns black-cell" &&
          document.getElementById("41").getAttribute('class') == "btns black-cell" ||
          // down 7
          document.getElementById("7").getAttribute('class') == "btns black-cell" &&
          document.getElementById("14").getAttribute('class') == "btns black-cell" &&
          document.getElementById("21").getAttribute('class') == "btns black-cell" &&
          document.getElementById("28").getAttribute('class') == "btns black-cell" ||
          document.getElementById("14").getAttribute('class') == "btns black-cell" &&
          document.getElementById("21").getAttribute('class') == "btns black-cell" &&
          document.getElementById("28").getAttribute('class') == "btns black-cell" &&
          document.getElementById("35").getAttribute('class') == "btns black-cell" ||
          document.getElementById("21").getAttribute('class') == "btns black-cell" &&
          document.getElementById("28").getAttribute('class') == "btns black-cell" &&
          document.getElementById("35").getAttribute('class') == "btns black-cell" &&
          document.getElementById("42").getAttribute('class') == "btns black-cell" ||
          // NW to SE
          document.getElementById("15").getAttribute('class') == "btns black-cell" &&
          document.getElementById("23").getAttribute('class') == "btns black-cell" &&
          document.getElementById("31").getAttribute('class') == "btns black-cell" &&
          document.getElementById("39").getAttribute('class') == "btns black-cell" ||

          document.getElementById("8").getAttribute('class') == "btns black-cell" &&
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" ||
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" &&
          document.getElementById("40").getAttribute('class') == "btns black-cell" ||

          document.getElementById("1").getAttribute('class') == "btns black-cell" &&
          document.getElementById("9").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" ||
          document.getElementById("9").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" ||
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" &&
          document.getElementById("41").getAttribute('class') == "btns black-cell" ||

          document.getElementById("2").getAttribute('class') == "btns black-cell" &&
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" ||
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("34").getAttribute('class') == "btns black-cell" ||
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("34").getAttribute('class') == "btns black-cell" &&
          document.getElementById("42").getAttribute('class') == "btns black-cell" ||

          document.getElementById("3").getAttribute('class') == "btns black-cell" &&
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" ||
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" &&
          document.getElementById("35").getAttribute('class') == "btns black-cell" ||

          document.getElementById("4").getAttribute('class') == "btns black-cell" &&
          document.getElementById("12").getAttribute('class') == "btns black-cell" &&
          document.getElementById("20").getAttribute('class') == "btns black-cell" &&
          document.getElementById("28").getAttribute('class') == "btns black-cell" ||
          // NE to SW
          document.getElementById("4").getAttribute('class') == "btns black-cell" &&
          document.getElementById("10").getAttribute('class') == "btns black-cell" &&
          document.getElementById("16").getAttribute('class') == "btns black-cell" &&
          document.getElementById("22").getAttribute('class') == "btns black-cell" ||

          document.getElementById("5").getAttribute('class') == "btns black-cell" &&
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("23").getAttribute('class') == "btns black-cell" ||
          document.getElementById("11").getAttribute('class') == "btns black-cell" &&
          document.getElementById("17").getAttribute('class') == "btns black-cell" &&
          document.getElementById("23").getAttribute('class') == "btns black-cell" &&
          document.getElementById("29").getAttribute('class') == "btns black-cell" ||

          document.getElementById("6").getAttribute('class') == "btns black-cell" &&
          document.getElementById("12").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" ||
          document.getElementById("12").getAttribute('class') == "btns black-cell" &&
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("30").getAttribute('class') == "btns black-cell" ||
          document.getElementById("18").getAttribute('class') == "btns black-cell" &&
          document.getElementById("24").getAttribute('class') == "btns black-cell" &&
          document.getElementById("30").getAttribute('class') == "btns black-cell" &&
          document.getElementById("36").getAttribute('class') == "btns black-cell" ||

          document.getElementById("7").getAttribute('class') == "btns black-cell" &&
          document.getElementById("13").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" ||
          document.getElementById("13").getAttribute('class') == "btns black-cell" &&
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("31").getAttribute('class') == "btns black-cell" ||
          document.getElementById("19").getAttribute('class') == "btns black-cell" &&
          document.getElementById("25").getAttribute('class') == "btns black-cell" &&
          document.getElementById("31").getAttribute('class') == "btns black-cell" &&
          document.getElementById("37").getAttribute('class') == "btns black-cell" ||

          document.getElementById("14").getAttribute('class') == "btns black-cell" &&
          document.getElementById("20").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" ||
          document.getElementById("20").getAttribute('class') == "btns black-cell" &&
          document.getElementById("26").getAttribute('class') == "btns black-cell" &&
          document.getElementById("32").getAttribute('class') == "btns black-cell" &&
          document.getElementById("38").getAttribute('class') == "btns black-cell" ||

          document.getElementById("21").getAttribute('class') == "btns black-cell" &&
          document.getElementById("27").getAttribute('class') == "btns black-cell" &&
          document.getElementById("33").getAttribute('class') == "btns black-cell" &&
          document.getElementById("39").getAttribute('class') == "btns black-cell"
        ){
          alert("The Winner is Black!!!");
          reset();

        }
      }
