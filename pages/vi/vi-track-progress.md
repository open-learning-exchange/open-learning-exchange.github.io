# Tracking Progress #
## Directions: ##        
 * Click on the blue "Get PRs/Issues Count" button below.
 * Type in a valid Github username
 * Remember, in order to complete the ["First Steps"](vi-first-steps.md) you need at least 5 valid PRs and 4 issues.
 * Click [here](vi-first-steps.md#Step_8_-_Create_Issues_and_Pull_Requests) to return to Step 8.

<style><!--
    .dropbtn {
        background-color: #61c2f9;
        color: white; 
        padding: 16px; 
        font-size: 16px; 
        border: none; 
        cursor: pointer;
    }
     .username {
        color: black; 
        padding: 16px; 
        font-size: 16px; 
        border: none; 
            }
--></style>
   ** Github Username: **
  <input type="text" class ="username" id = "username" name="username" placeholder ="Ex: gyawaliamit7">
  
  <button class="dropbtn" onclick="Set_User();">Get PRs/Issues Count</button>
  <br>

<div id="results"></div>

<script>
    const res = document.getElementById('results');
    var user = "gyawaliamit7";
    
    //Functions
    //Check response from the API
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }
 
    //Validate User
    function Set_User() {
        res.innerHTML = "";
        user = document.getElementById("username").value;
        if (!(user == "" || user == null)) {
            var url = "https://api.github.com/users/" + user;
            fetch(url)
                .then(checkStatus)
                .then(function(data) {
                    res.innerHTML = "<h2> Progress: </h2>";
                    Total_PRs();
                    Total_Issues();
                    Merged_PRs();
                })
                .catch(function(error) {
                    console.log(error);
                    let p = document.createElement('p');
                    p.innerHTML = "<span style='color:#FF0000;'><strong><u>Error</u>: " + user + " is not a valid GitHub Username. Make sure you are entering a valid GitHub Username.</strong></span>";
                    res.appendChild(p);
                });
        } else {
            let p = document.createElement('p');
            p.innerHTML = "<span style='color:#FF0000;'><strong><u>ERROR</u>: Blank or NULL user entered.<br></strong></span>";
            res.appendChild(p);
        }
    }
    
    //Check total number of pull requests
    function Total_PRs() {
        var url = "https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:" + user + "+type:pr&sort=created&order=asc";
        fetch(url)
            .then(checkStatus)
            .then((resp) => resp.json())
            .then(function(data) {
                let p = document.createElement('p');
                p.innerHTML = "<strong>Number of PRs:<strong> " + data.total_count;
                res.appendChild(p);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    //Check total number of Issues Created.
    function Total_Issues() {
        var url = "https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:" + user + "+type:issue&sort=created&order=asc";
        fetch(url)
            .then(checkStatus)
            .then((resp) => resp.json())
            .then(function(data) {
                let p = document.createElement('p');
                p.innerHTML = "<strong>Number of Issues:<strong> " + data.total_count;
                res.appendChild(p);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    // Check Number of merged Pull Requests
    function Merged_PRs() {
        var url = "https://api.github.com/search/issues?q=repo:open-learning-exchange/open-learning-exchange.github.io+author:" + user + "+is:merged&sort=created&order=asc";
        fetch(url)
            .then(checkStatus)
            .then((resp) => resp.json())
            .then(function(data) {
                let p = document.createElement('p');
                p.innerHTML = "<strong>Number of Merged PRs:<strong> " + data.total_count;
                res.appendChild(p);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
</script>
