$("#selector").css("display", "block");
$("title").text("Welcome !");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function redirectToPage(url) {
  return fetch(url, { method: "HEAD" })
    .then(async (response) => {
      if (response.ok) {
        $("#lang").fadeOut(1000);
        await wait(1000);
        window.location.href = url;
      } else {
        console.log("Le fichier HTML n'existe pas.");
        return true;
      }
    })
    .catch((error) => {
      console.log("Erreur lors de la vérification du fichier HTML:", error);
      return true;
    });
}

async function main() {
  const elements = [
    $("#text1"),
    $("#text2"),
    $("#text3"),
    $("#text4"),
    $("#lang"),
  ];

  elements.forEach((element, index) => {
    element.hide();
    if (index === 0) {
      element.fadeIn(1000);
    }
  });

  for (let i = 1; i < elements.length; i++) {
    await wait(1000);
    elements[i - 1].fadeOut(1000);
    await wait(1000);
    elements[i].fadeIn(1000);
  }
}

$("#EN").click(async function () {
  if (await redirectToPage("./pages/language/en/index.html")) {
    $("#EN").removeClass("ok");
    $("#EN").addClass("no");
    $("#dialog_en").dialog({
      dialogClass: "no-close",
      buttons: [
        {
          text: "OK",
          click: function () {
            $(this).dialog("close");
          },
        },
      ],
    });
  }
});

$("#FR").click(async function () {
  if (await redirectToPage("./pages/language/fr/index.html")) {
    $("#FR").removeClass("ok");
    $("#FR").addClass("no");
    $("#dialog_fr").dialog({
      dialogClass: "no-close",
      buttons: [
        {
          text: "OK",
          click: function () {
            $(this).dialog("close");
          },
        },
      ],
    });
  }
});

$("#RU").click(async function () {
  if (await redirectToPage("./pages/language/ru/index.html")) {
    $("#RU").removeClass("ok");
    $("#RU").addClass("no");
    $("#dialog_ru").dialog({
      dialogClass: "no-close",
      buttons: [
        {
          text: "ХОРОШО",
          click: function () {
            $(this).dialog("close");
          },
        },
      ],
    });
  }
});

$("#ESP").click(async function () {
  if (await redirectToPage("./pages/language/esp/index.html")) {
    $("#ESP").removeClass("ok");
    $("#ESP").addClass("no");
    $("#dialog_esp").dialog({
      dialogClass: "no-close",
      buttons: [
        {
          text: "OK",
          click: function () {
            $(this).dialog("close");
          },
        },
      ],
    });
  }
});

main();
