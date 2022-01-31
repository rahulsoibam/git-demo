package main

import "fmt"

func add5(arg int) int {
	return arg + 5
}

func main() {
	a := `<!DOCTYPE html>
	<html lang="en">
	
	<head>
	  <meta charset="UTF-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <title>API Test</title>
	</head>
	
	<body>
	  <div>
		<img id="avatar" src="" alt="" />
		<p id="name">\n</p>
		<a href="#" id="link">Click here</a>
	  </div>
	  <script>
		fetch("https://api.github.com/users/rahulsoibam")
		  .then((response) => response.json())
		  .then((result) => {
			document.getElementById("avatar").src = result.avatar_url;
			document.getElementById("name").innerHTML = result.login;
			document.getElementById("link").href = result.url;
		  });
	  </script>
	</body>
	
	</html>`

	b := "hello" + fmt.Sprint(5)

	fmt.Println(b)

	fmt.Println(a)
}
