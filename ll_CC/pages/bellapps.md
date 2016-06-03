##BeLL-Apps: Community and Nation

The BeLL (Basic e-Learning Library) is not only a library, but also an individualized learning system where students can select their own books and courses to target their individual goals. We have two kinds of BeLLs: nations and communities. Using Vagrant, you've already created a community on your laptop via the first week's assignment. Communities are how the BeLL functions via intranet as users connect to a community using either a laptop or a RPi and a router. Communities connect and sync back to a larger nation which is used on the internet. You can send materials and information between the communities and nations to complete our feedback loop. 

As previously mentioned, you created a community (which we will now refer to as a vagrant BeLL) on your laptop. To access this community, please check that your vagrant is up and running with `vagrant global-status`. Assuming that it's on or you turn it on using `vagrant up`, open FireFox (please download if you don't already have it- it's VERY important that you always use the BeLL in FireFox to limit errors). Go to http://127.0.0.1:5985. You could also use http://localhost:5985, meaning that 127.0.0.1 refers to your machine. Both localhost:5985 and 127.0.0.1:5985 are interchangable. Please be sure to have the correct port number (5985), otherwise it will not work correctly. 

Your first page will look like this:

![127.0.0.1:5985](/ll_CC/pages/uploads/images/127.0.0.1-5985.png)

As you can see from this page, [CouchDB](https://en.wikipedia.org/wiki/CouchDB)  (also known as Apache CouchDB) is database software that we use for the BeLL. You can see the backend interface of our CouchDB at http://127.0.0.1:5985/_utils. In _utils, you have the opportunity to see all of the software dev of your vagrant BeLL.

To see the actual user interface, go to http://127.0.0.1:5985/apps/_design/bell/MyApp/index.html. You will be prompted with the below page:

![Login Page](/ll_CC/pages/uploads/images/adminlogin.png)

Login using the username: admin and the password: password. Following, you will be prompted with this page:

![Set Configurations](/ll_CC/pages/uploads/images/setconfigurations.png)

You will then fill out the information as I have done. The name should be all lowercase and the code should be all uppercase. Please keep this format and they should be identitical other than the case. Please use your name for simplicity and so we know who owns it when we use the nation side. For the nation name and the nation URL, they should be exactly the same as I have done. We will be using the viBeLL nation to connect your community, so please be sure that this information is accurate. Leave Region, Version, and Notes blank. Before hitting "Submit Configurations", please take a screenshot and save for later to submit to us. Then click "Submit Configurations."

After submitting configurations on the community, you can now see the main dashboard of the BeLL. Please watch the videos below to show you the basic functions of your BeLL. These videos are a little old as they were created 2 years ago, but I think they will do a decent job of orienting you to the BeLL.   

[My Dashboard Video](/ll_CC/pages/uploads/movies/mydashboard.mp4)

[Library](/ll_CC/pages/uploads/movies/library.mp4)

[Feedback](/ll_CC/pages/uploads/movies/feedback.mp4)

[Generating Activity Reports](/ll_CC/pages/uploads/movies/generatingactivityreports.mp4)

I would suggest playing around a bit as well. Please explore and feel comfortable with the software as you'll be using it quite a bit this summer. 

We want you to practice uploading resources to the BeLL. Although there are several different kinds of resources, most of them are either PDFs, mp3s, or mp4s. I have provide you with some resources (linked below) where you can download them and upload them to your BeLL. 

[Here is the first page of the PDF "Feelings"](/ll_CC/pages/uploads/images/feelings.pdf)
[Here is the song "Opposite Song"](/ll_CC/pages/uploads/music/oppositesong.mp3)
[Here is the video "Burka Avenger"](/ll_CC/pages/uploads/movies/burkaavenger.mp4) 

Please click on each one of these links and 
**(1)**you will be directed to the GitHub page. 
or
**(2)** the file will be opened up in a new tab.

**(1)**
After that, you will click on the `raw` button as you see below:

[Raw](/ll_CC/pages/uploads/images/raw.png)

Either right-click or control-click on the raw button and select `Save Link As...` and then save to your desktop. 
**(2)**
Go to the new tab -> right click the webpage -> choose save to save it on your desktop


After downloading the file, go to your vagrantBeLL. Select `Library` from the dashboard and then select `Add a Resource`. You will then be prompted to go to this page: 

![Burka Avenger Upload](/ll_CC/pages/uploads/images/burkaavengerupload.png)

Fill out the information, although as we are just doing this as a test, accuracy of information/source of content is not very important. Just be sure to put something, even if it is your name (as I have done). The important thing is that you have something in all of the drop-down menus and you ensure that for `Open` you switch it to the correct format (PDF, mp3, or mp4). Then click `Save`. You have now uploaded the resource. I suggest finding it and making sure that you can open it to double check. Continue with all three resources. 

Please then send your screenshot of your community configurations (from earlier when you were submitting configurations) to [our chat](https://gitter.im/open-learning-exchange/chat). Dogi and I will then set the configurations from the nation side so it will be connected to viBeLL. 
