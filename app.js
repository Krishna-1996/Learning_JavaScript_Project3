(function () {
  const form = document.querySelector("#msg_form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const msg = document.querySelector("#msg");
    const feedback = document.querySelector(".feedback");
    const msg_content = document.querySelector(".msg_content");

    if (msg.value === "") {
      feedback.classList.add("show");
      setTimeout(function () {
        feedback.classList.remove("show");
      }, 4000);
    } else {
      msg_content.textContent = msg.value;
      msg.value = "";
    }
  });
})();
