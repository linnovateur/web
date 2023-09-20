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

async function main() {
  $("#1").fadeIn(1000);
  await wait(1000);
  $("#2").fadeIn(1000);
  await wait(1000);

  a = 3;
  while (a != 8) {
    $(`#${a}`).fadeIn(500);
    await wait(500);
    a++;
  }
  await wait(1000);
  $("#re").fadeIn(1000);
  await wait(1000);
  $("#discord").fadeIn(1000);

  await wait(1000);
  $("#x").fadeIn(1000);
  await wait(1000);
  $("#email_section").fadeIn(1000);
  await wait(1000);
  $("#Return").fadeIn(1000);
}

$("#Discord").click(function () {
  window.open("https://discord.com/users/813461736963309628", "_blank");
});

$("#X").click(function () {
  window.open("https://x.com/Linnovateur_", "_blank");
});

$("#Email").click(function () {
  window.location.href = "mailto:linnovateur100@duck.com";
});

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
