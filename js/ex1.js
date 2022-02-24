<script>
  var op;
  function calc() {
    var result;
    var num1 = Number(document.getElem("num1").value);
    var num2 = Number(document.getElem("num2").value);
    switch (op) {
      case "+":
        result = num1 + num2;
        break
      case "-":
        result = num1 - num2;
        break
      case "*":
        result = num1 - num2;
        break
      case "/":
        result = num1 / num2;
        break
    }
  }
</script>