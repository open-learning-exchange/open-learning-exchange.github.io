# Tech Genius Support

Welcome to the Tech Genius support section. You are here because you have completed the First Steps section and you are going to deploy and support a community, group of communities, and/or national server.

## The Big Picture

As Tech Geniuses you have demonstrated the familiarity with the  necessary tools and procedures. We encourage you to subscribe to the Tech Genius Gitter chatroom. As you are aware, Planet Learning is a virtual library and student management protal that is deployed internationally to support content and opportunity distribution.

## Deployment Scenarios

**Note:** This is a living document. We hope that you will utilize the github fuctionality to pinpoint weaknesses and to make edits to this document.

## Step 0 // Introduction

This document was created to meet the immediate needs of tech support for the Madagascar Ministry of Education. We fully expect that this document will become the general use case for any partners that are on-boarding our program.

The MOE is working to establish a system for sharing digital content across schools at both the primary and secondary levels. This effort will begin with a pilot program at the Ministry to fully understand deployment challenges, and to upload existing content into a national library so that it can be quickly and easily shared. This effort will begin with the MOE establishing a number of local communities at the MOE. Content will be loaded into community and pushed to the national server. This strategy will allow the MOE to work off line as bandwidth is a challenge.

## Step 1 // Pre-Requisites

It is understood that tech geniuses have completed [the training exercises found here](firststeps.md)

## Step 2 // Vagrant Environment Installation Confirmation

Review and complete (if necessary) the [instructions on how to setup a pre-built community environment via Vagrant](vagrant.md). It is important that you fully understand how to build a local community and that a working community is installed on the target laptop. If you have completed the the installation guide then you will find c:/users/USERNAME/ole--vagrant-vi under your file system. The "ole--vagrant-vi" directory indicates that this community is attached to the "virtual intern" Nation. This is the development environment that OLE uses for training and to develop, test, and deploy new features.

In the steps outlined below we will build a community that is attached to the a Nation as opposed to the vi environment. In this case - The Madagascar Nation. To achieve this we will do the following:

* Use git command line tools to make a clone of the ole--vagrant-community repository;
* Us Vagrant command line tools to start the new virtual machine; and
* Run the set configuration process on the new virtual machine so that it is attached to the Madagascar Nation.

## Step 3 // vagrant -clone

### Install a Community BeLL on your OS

**If you are running Windows:**

Please start git-bash by pressing the Windows key to open the home screen, and then type "git bash" to bring up the Git Bash launch option. You can also use the command prompt or command prompt(admin).

**If you are running OSX or any version of Linux:**

Please open a terminal session.

In your `Terminal` or `Command Prompt`, type the following commands:

**Enter the following commands at the command prompt:**

```bash
git clone https://github.com/dogi/ole--vagrant-community.git
cd ole--vagrant-community
vagrant up
```

## Step 4 // Configure the new Community

We now need to configure the local community. This is done from the browser. Please start firefox and enter [http://localhost:8084](http://localhost:8084) into the address bar. When the community loads you should see the following configuration screen.

Please enter and **record** details for the community administrator.

Insert image (community-admin-config-01.png)

Click `Save` to continue.

This will bring you to the follow screen:

Insert image (community-admin-config-02.png)

Please complete all fields as follows:

* Name = name of the school or community;
* Code = Same as the name field but ALL LETTERS capitalized with no spaces or special characters;
* Select Nations = MadagascarBell;
* Launguage = Your local language;
* Region = Your region of the world;
* Sponsoring Organizations Name, Address, and URL
* General Manager = Same as Administrator or fill in individual fields if different;
* Tech Support = Same as Administrator or fill in individual fields if different.

Click `Save` at the bottom of the page.

You should see the following confirmation dialogue.

Insert image (community-admin-config-08.png)

## Step 5 // First Time Login

Now return to the community login page. [http://localhost:8084](http://localhost:8084). You now have access to the community. However, it has not yet been activated by the administrator. You can tell that activation is pending because of the orange dot top right of the page.

Insert image (community-admin-config-04.png)

Once the Community registration has been accepted by the Nation administrator the dot will be green.

## Step 6 // Accepting Community Registrations

The Nation Administrator is responsible for accepting new community registrations. Wnen new communities are registered you will receive an alert when the administrator logs in to the Nation home page as in the below image.

Insert image (community-admin-config-05.png)

Click on the New Community link.

Insert image (community-admin-config-07.png)

Click on Accept to complete the registration.
