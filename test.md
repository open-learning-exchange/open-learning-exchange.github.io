# test
<html>
<body>



<p>Click the button to trigger a function that will output "Hello World" in a p element with id="demo".</p>

<button onclick="myFunction()">Click me</button>

<p id="demo"></p>



<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
</script>
</body>
</html>
