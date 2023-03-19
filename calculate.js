let result = document.getElementById("inputText");

let calculate = (number) => {
  result.value += number;
};

let del = () => {
  result.value = result.value.slice(0, -1);
};

let clr = () => {
  result.value = "";
};

let answer = () => {
  try {
    result.value = eval(result.value)
  } catch (e) {
    // alert("wrong input");
    result.value = "Error";
  }
};
