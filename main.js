var player1 = 0;
var player2 = 0;

 var turn = 1;

    $("#pages").click(function(){
      $('#intro').hide("slow");
      $('#everything').show("slow");

    })

    function resetBoard(){

        $(".btns").removeClass('black-cell');
        $(".btns").removeClass('red-cell');
        $(".btns").removeClass('green-cell');
    }

    function resetScore(){
      $("#playerone").html("Score: 0");
      $("#playertwo").html("Score: 0");
      player1 = 0;
      player2 = 0;
    }


    function resetAll(){
      $(".btns").removeClass('black-cell');
      $(".btns").removeClass('red-cell');
      $(".btns").removeClass('green-cell');
      $("#playerone").html("Score: 0");
      $("#playertwo").html("Score: 0");
      player1 = 0;
      player2 = 0;
    }

    $("#reset").click(resetBoard);
    $("#restart").click(resetAll);


  $('.btns').click(function() {

    // if( turn === 1 ) {
    //
    //     if ($(this).hasClass("black-cell")){
    //       $(this).toggleClass("green-cell")
    //     }
    //     else if ($(this).hasClass("green-cell")){
    //       $(this).toggleClass("grey-cell")
    //     }
    //     else if ($(this).hasClass("red-cell")){
    //       alert("Nice try dummy, you just waisted a turn!");
    //     }
    //     else{
    //       $(this).toggleClass("red-cell");
    //     } console.log( this );
    //
    //   turn = 2;
    //   winner();
    //
    // } else {
    //
    //     if ($(this).hasClass("red-cell")){
    //       $(this).toggleClass("green-cell")
    //     }
    //     else if ($(this).hasClass("green-cell")){
    //       $(this).toggleClass("grey-cell")
    //     }
    //     else if ($(this).hasClass("black-cell")){
    //       alert("Nice try dummy, you just waisted a turn!");
    //     }
    //     else{
    //       $(this).toggleClass("black-cell");
    //     } console.log( this );
    // Can't get code to work for removing green dot class


      if( turn === 1 ) {
          if ($(this).hasClass("black-cell")){
            $(this).removeClass("black-cell")
          } else if ($(this).hasClass("red-cell")){
            alert("Nice try dummy, you just waisted a turn!");
          } else{
            $(this).toggleClass("red-cell");
          } console.log( this );
          console.log(this.id);
        turn = 2;
        winner();

      } else {
          if ($(this).hasClass("red-cell")){
            $(this).removeClass("red-cell")
          } else if ($(this).hasClass("black-cell")){
            alert("Nice try dummy, you just waisted a turn!");
          } else{
            $(this).toggleClass("black-cell");
          } console.log( this );

        turn = 1;
        winner();

      }
    })
function checkWin(color){
  return ( document.getElementById("1").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("2").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("3").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("4").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("2").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("3").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("4").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("5").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("3").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("4").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("5").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("6").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("4").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("5").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("6").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("7").getAttribute('class') == "btns "+color+"-cell" ||
  // row 2
  document.getElementById("8").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("9").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("9").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("13").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("13").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("14").getAttribute('class') == "btns "+color+"-cell" ||
  // row 3
  document.getElementById("15").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("21").getAttribute('class') == "btns "+color+"-cell" ||
  // row 4
  document.getElementById("22").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("28").getAttribute('class') == "btns "+color+"-cell" ||
  // row 5
  document.getElementById("29").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("30").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("30").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("34").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("34").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("35").getAttribute('class') == "btns "+color+"-cell" ||
  // row 6
  document.getElementById("36").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("37").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("38").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("39").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("37").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("38").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("39").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("40").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("38").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("39").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("40").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("41").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("39").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("40").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("41").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("42").getAttribute('class') == "btns "+color+"-cell" ||
  // down 1
  document.getElementById("1").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("8").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("15").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("22").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("8").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("15").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("22").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("29").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("15").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("22").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("29").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("36").getAttribute('class') == "btns "+color+"-cell" ||
  // down 2
  document.getElementById("2").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("9").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("9").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("30").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("30").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("37").getAttribute('class') == "btns "+color+"-cell" ||
  // down 3
  document.getElementById("3").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("38").getAttribute('class') == "btns "+color+"-cell" ||
  // down 4
  document.getElementById("4").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("39").getAttribute('class') == "btns "+color+"-cell" ||
  // down 5
  document.getElementById("5").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("40").getAttribute('class') == "btns "+color+"-cell" ||
  // down 6
  document.getElementById("6").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("13").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("13").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("34").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("34").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("41").getAttribute('class') == "btns "+color+"-cell" ||
  // down 7
  document.getElementById("7").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("14").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("21").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("28").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("14").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("21").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("28").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("35").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("21").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("28").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("35").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("42").getAttribute('class') == "btns "+color+"-cell" ||
  // NW to SE
  document.getElementById("15").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("39").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("8").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("40").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("1").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("9").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("9").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("41").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("2").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("34").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("34").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("42").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("3").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("35").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("4").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("28").getAttribute('class') == "btns "+color+"-cell" ||
  // NE to SW
  document.getElementById("4").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("10").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("16").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("22").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("5").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("11").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("17").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("23").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("29").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("6").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("12").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("30").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("18").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("24").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("30").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("36").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("7").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("13").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("13").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("19").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("25").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("31").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("37").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("14").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" ||
  document.getElementById("20").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("26").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("32").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("38").getAttribute('class') == "btns "+color+"-cell" ||

  document.getElementById("21").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("27").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("33").getAttribute('class') == "btns "+color+"-cell" &&
  document.getElementById("39").getAttribute('class') == "btns "+color+"-cell")

}
      function winner(){
        if (checkWin('red')){

            player1++;
            $("#playerone").html("Score: " + player1);

            if (player1 == 3){
            alert("Red has won the match!");
            resetScore();
          } else {
            alert("The winner is red!");
          }

            resetBoard();

          }   else if (

                  checkWin('black')){

                  player2++;
                  $("#playertwo").html("Score: " + player2);

              if (player2 == 3){
                  alert("Black has won the match!");
                  resetScore();

          }   else {
                  alert("The winner is black!");
          }

          resetBoard();

        }
      }
