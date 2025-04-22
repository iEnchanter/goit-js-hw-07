const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
});



const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("h1 > #name-output");
nameInput.addEventListener("input", (evt) => {
    const names = nameInput.value.trim();
    if(names === "") {
        nameOutput.textContent = "Anonymous"
        }else {
            nameOutput.textContent = names;
        }
        

} )