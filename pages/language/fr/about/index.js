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

$("#title").hide();
$("#accordion").hide();

async function main() {
  await wait(500);
  $("#title").fadeIn(1000);
  await wait(1000);
  $("#accordion").fadeIn(1000);
  $("#accordion").accordion({
    collapsible: true,
    active: false,
  });
  await wait(1000);
  $("#link_return").fadeIn(1000);
}

$("#return").click(async function () {
  if (await redirectToPage("../index.html")) {
    $("#return").removeClass("ok");
    $("#return").addClass("no");
    $("#dialog_err").dialog({
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
