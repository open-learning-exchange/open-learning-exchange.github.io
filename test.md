<html>
  <script>
  
  		
		// Create a new request object
var request = new XMLHttpRequest(); // global var




//parseInt(request.responseText.substr(18,3))

  
  
  //-------- Website
    function goToURL() {
		var user = prompt("Please enter username", "Dogi");

  
location.href = 'https://github.com/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3A'+user+'+is%3Apublic+repo%3Aopen-learning-exchange%2Fopen-learning-exchange.github.io+is%3Amerged+'
    }
	
	function goToURL2() {
		var user = prompt("Please enter username", "Dogi");


 

location.href ='https://github.com/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3A'+user+'+is%3Apublic+repo%3Aopen-learning-exchange%2Fopen-learning-exchange.github.io'
    }
	
	
	
	
	
	
	//------------------------API
	
	function goToURL3() {
	var user = prompt("Please enter username", "Dogi");
    
 
		
		location.href =  'https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:'+user+'+is:merged&sort=created&order=asc'
		
		
		

    }
	function goToURL4() {
	var user = prompt("Please enter username", "Dogi");
    
     
		location.href =  'https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:'+user+'+type:pr&sort=created&order=asc'
				


    }
	
		function goToURL5() {
	var user = prompt("Please enter username", "Dogi");
    
     
		location.href =  'https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:'+user+'+type:issue&sort=created&order=asc'
				


    }
	
	function Total_PRs(){ //Test-ALL
	var user = prompt("Please enter username", "Dogi");
     
		
		var object= 'github.com';
		object =  'https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:'+user+'+type:pr&sort=created&order=asc'
		console.log(object)
	

	
// Initialize a request
request.open('get', object)
request.send()
		request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Number of PRs:"+request.responseText.substr(18,3))	
    }
	}
	

    }
	
		function Total_Issues(){ //Test-ALL
	var user = prompt("Please enter username", "Dogi");
     
		
		var object= 'github.com';
		object =  'https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:'+user+'+type:issue&sort=created&order=asc'
		console.log(object)
	

	
// Initialize a request
request.open('get', object)
request.send()
	request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Number of Issues:"+request.responseText.substr(18,3))	
    }
	}
	

    }
	function Merged_PRs() { // test-Merged-PRs
	var user = prompt("Please enter username", "Dogi");
    
		var object= 'github.com';
		object =  'https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:'+user+'+is:merged&sort=created&order=asc'
		console.log(object)
		//location.href =  object

	
// Initialize a request
request.open('get', object)
request.send()

			request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Number of PRs:"+request.responseText.substr(18,3))	
    }
	}

	
    }

  </script>
 <style>
 body {background-color: white;}
h1   {color: blue;}
p    {color: red;}

.center {
    margin: auto;
    width: 50%;
    padding: 10px;
} </style>



<body >
<center><h1>Git statistics </h1></center> 
<div>
<h2>
Directions:
</h2> 
<li>Click on a Link and Type in a valid user-name.</li>
<li>You can view the search results for the API. Chrome users can view regular search results.</li>
<li>The GitHub search results at the bottom won't work on JsFiddle but they should be fine on a text editor.</li>


</div>
 <div class="center">

<center> <h1>PRs / Issues </h1> </center>
	
	<div  class="center">
	<center><h2> Stats</h2> </center>
  <a href="javascript:void(0)" onclick="Total_PRs(); return false;">Total PRs</a> 
  <a href="javascript:void(0)" onclick="Merged_PRs(); return false;"># of Merged PRs</a>  
   <a href="javascript:void(0)" onclick="Total_Issues(); return false;"># of Issues</a>  


  </div>
  
  <div class="center">  
  	<center><h2> API search </h2> </center>

<a href="javascript:void(0)" onclick="goToURL3();  ;return false;">Merged-Pr</a> 
 <a href="javascript:void(0)" onclick="goToURL4(); return false;">All PRs</a>     
 <a href="javascript:void(0)" onclick="goToURL5(); return false;">Issues</a>    
 </div>
  
</div>

	

 


<div class="center">


	<h2> GitHub search results(Chrome Only)</h2>
  <a href="javascript:void(0)" onclick="goToURL(); return false;">Merged-PRs</a>
  <a href="javascript:void(0)" onclick="goToURL2(); return false;">All PRs</a> 

  
  </div>
  
 
</body>

</html>

