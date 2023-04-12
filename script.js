const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
  input.addEventListener("click", function () {
    if (input.value === "") {
      input.addEventListener("keyup", function (e) {
        if (input.value !== "") {
          input.classList.add(
            "bg-white",
            "rounded-none",
            "border-b-2",
            "border-slate-300",
            "-translate-y-1",
            "scale-110"
          );
        } else {
          input.classList.remove(
            "bg-white",
            "rounded-none",
            "border-b-2",
            "border-slate-300",
            "-translate-y-1",
            "scale-110"
          );
        }
      });
    }
  });
});

const btn = document.querySelector("#btn-login");
btn.addEventListener("click", function (e) {
  e.preventDefault();
});
