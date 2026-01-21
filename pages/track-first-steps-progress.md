# Tracking Progress

## Directions

- Click on the blue "Get PRs/Issues Count" button below.
- Type in a valid GitHub username
- Remember, to complete the First Steps, you need a minimum of:
  - 4 issues created (one from Step 6 and three from Step 8)
  - 4 comments on issues you didn’t create (one from Step 6 and three from Step 8)
  - 5 merged pull requests (one from Step 1, one from Step 6, and three from Step 8)

<style><!--
    .dropbtn {
        background-color: #61c2f9;
        color: white; 
        padding: 16px; 
        font-size: 16px; 
        border: none; 
        cursor: pointer;
    }
--></style>
       
<button class="dropbtn" onclick="Set_User();">Get PRs/Issues Count</button>
<div id="results"></div>

<script>
    const res = document.getElementById('results');
    var user = "dogi";
    
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
        user = prompt("Please enter username", user);
        if (!(user == "" || user == null)) {
            var url = "https://api.github.com/users/" + user;
            fetch(url)
                .then(checkStatus)
                .then(function(data) {
                    res.innerHTML = "<h2> Progress: </h2>";
                    Total_PRs();
                    Total_Issues();
                    Merged_PRs();
                    CountIssueComments(); // Call the new function here
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

    // Function to count comments made by a user in issues
    function CountIssueComments() {
    const githubToken = "YOUR-ACCESS-TOKEN-HERE"; //insert your access token here
    const query = `
        query {
            repository(owner: "open-learning-exchange", name: "open-learning-exchange.github.io") {
                issues(states: [OPEN], first: 100) {
                    edges {
                        node {
                            comments(first: 100) {
                                edges {
                                    node {
                                        author {
                                            login
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + githubToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then(checkStatus)
    .then((resp) => resp.json())
    .then(function(data) {
        let commentsCount = 0;
        data.data.repository.issues.edges.forEach(issue => {
            issue.node.comments.edges.forEach(comment => {
                if (comment.node.author && comment.node.author.login === user) {
                    commentsCount++;
                }
            });
        });
        let p = document.createElement('p');
        p.innerHTML = "<strong>Number of Comments on Issues:<strong> " + commentsCount;
        res.appendChild(p);
    })
    .catch(function(error) {
        console.log(error);
    });
}
</script>
