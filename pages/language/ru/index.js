function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function redirectToPage(url) {
  return fetch(url, { method: "HEAD" })
    .then(async (response) => {
      if (response.ok) {
        $("body").fadeOut(1000);
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

$("#1 #1\\.2, #1 #1\\.1, #2, #3").hide();

async function main() {
  $("html").fadeIn(500);
  await wait(500);
  $("#1\\.1").slideDown(1000);
  await wait(500);
  $("#1\\.2").slideDown(1000);
  await wait(1500);
  $("#2").fadeIn(1000);
  await wait(1500);
  $("#3").fadeIn(1500);
}

$("#about").click(async function () {
  if (await redirectToPage("./about/index.html")) {
    $("#about").removeClass("ok");
    $("#about").addClass("no");
    $("#dialog_err").dialog({
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

$("#project").click(async function () {
  if (await redirectToPage("./project/index.html")) {
    $("#project").removeClass("ok");
    $("#project").addClass("no");
    $("#dialog_err").dialog({
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

$("#contact").click(async function () {
  if (await redirectToPage("./contact/index.html")) {
    $("#contact").removeClass("ok");
    $("#contact").addClass("no");
    $("#dialog_err").dialog({
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

$("#exit").click(async function () {
  if (await redirectToPage("../../../index.html")) {
    $("#exit").removeClass("ok");
    $("#exit").addClass("no");
    $("#dialog_err").dialog({
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

main();
