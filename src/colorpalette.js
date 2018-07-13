document.addEventListener('DOMContentLoaded', () => {
  console.log('js running');

  new Clipboard(".copy-text");
  new Clipboard(".color");

  let colors = [
    ["#ff0092","#ffca1b","#b6ff00","#59d2dd","#295daa","#cd76e5",],
    ["#FF0092","#FFCA1B","#B6FF00","#228DFF","#BA01FF"],
    ["#494949","#626262","#c92f5e","#d8537b","#e27b9b"]

    // ["#C97B84", "#A85751", "#7D2E68", "#251351", "#040926"],
    // ["#006BA6", "#0496FF", "#FFBC42", "#D81159", "#8F2D56"],
    // ["#F5FDC6", "#F5C396", "#D0B17A", "#A89F68", "#41521F"]
  ];

  let colorHtml = "";
  for (let i = 0; i < colors.length; i++) {
    colorHtml += `<div id="cc${i}"class="color-container">`;
    for (let j = 0; j < colors[i].length; j++) {
      colorHtml += `<div id="co${i}${j}" class="color" data-clipboard-text="${colors[
        i
      ][j]}" style="background-color:${colors[i][j]};"></div>`;
    }
    let copyText = `'${colors[i].join("','")}'`;
    colorHtml += `</div>`;
    colorHtml += `<div id="${i}" class="copy-text" data-clipboard-text="${copyText}">${copyText}</div>`;
  }

  $(".container").append(colorHtml);

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors[i].length; j++) {
    }
    if(colors[i].length < 6){
      // console.log(`there are ${colors[i].length} colors in pallete ${i+1}`);
      // console.log(document.querySelector(`#cc${i}`).style.gridTemplateColumns)
      document.querySelector(`#cc${i}`).className += " color-container5"
      // debugger
    }

  }

  $(".copy-text").on("click", function() {
    var id = $(this).attr("id");
    copiedAnimation(id);
  });

  $(".color").on("click", function() {
    var id = $(this).attr("id");
    copiedAnimationColor(id);
  });

  $('#expander').click(()=>{
    $('.color').toggleClass("expanded")
    $('#thinger').toggleClass("container")
    $('.color-container').toggleClass("max-width")
  })

})

function copiedAnimationColor(id) {
  $(`#${id}`).append(
    `<div id="cco${id}" class="copied-alert-color">Copied!</div>`
  );
  console.log(id);
  setTimeout(function() {
    $(`#cco${id}`).css("opacity", "1");
  }, 1);
  setTimeout(function() {
    $(`#cco${id}`).css("opacity", "0");
  }, 2000);
  setTimeout(function() {
    $(`#cco${id}`).remove();
  }, 2501);
}

function copiedAnimation(id) {
  $(`#cc${id}`).append(`<div id="c${id}" class="copied-alert">Copied!</div>`);
  setTimeout(function() {
    $(`#c${id}`).css("opacity", "1");
  }, 1);
  setTimeout(function() {
    $(`#c${id}`).css("opacity", "0");
  }, 2000);
  setTimeout(function() {
    $(`#c${id}`).remove();
  }, 2501);
}
