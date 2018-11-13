# Planet Configurations

## Objectives

* Learn about Planet and the difference between Nations and Communities
* Use Vagrant to create a local Planet Community
* Register your Community and sync it with the Nation

## Introduction

The Planet is not only a library, but also an individualized learning system, where students can select their own books and courses to target their individual goals. The two kinds of Planet apps are described below.

#### Planet Communities (Local)

* Communities are how the Planet functions on a local network, with users connecting to a community using either a laptop or a RPi and a router.
* Periodically communities sync with Nations on the internet, which includes sending and receiving educational materials.
* In step 1 you created a Planet community on your computer. As you follow the steps on this page, you will access and configure your community.

#### Planet Nations (Internet)

* Nations are Planet apps for the Internet, allowing communities to interact with each other.
* Nations are over a group of communities, and can run reports on any communities it owns.
* As you complete these instructions, an OLE administrator will complete the registration of your community with the Virtual Intern Nation.

## macOS and Ubuntu

Check that your vagrant is up and running with `vagrant global-status`. Assuming that it's running or you launch it using `vagrant up dev`, open browser. Go to http://localhost:3000. Make sure to have the correct port number (3000), otherwise it will not work correctly.

## Windows

Open browser and browse [http://localhost:3000](http://localhost:3000). You should see the user interface of application (see below).  If you get an `Unable to connect` page, check out Q13 at [FAQ](vi-faq.md#Technical_Questions).

## Database
[CouchDB](https://en.wikipedia.org/wiki/CouchDB) (also known as Apache CouchDB) is a database software that we use for the BeLL. You can see the backend interface of our CouchDB at http://localhost:2200/_utils. In _utils, you have the opportunity to see all data of your Planet application.

## User Interface
To see the actual user interface, go to http://localhost:3000.
You will be shown the page below. Make sure you remember the credentials.

![Become an Administrator](images/vi-become-admin.png)

Next, fill out the configurations. Your name must be the same and should match your Github name so we can easily locate your community in Virtual Intern Nation. Pick **Virtual Intern Nation (vi)** for nation as in the example below. **After filling out your configurations, remember to save a screenshot of the configuration page so that you can post it on the [Gitter chat](https://gitter.im/open-learning-exchange/chat) after submitting your registration request.**

![Configurations](images/vi-configuration.png)

**Note:** *To add images in the chat, just drag the image from your directory to the browser context and drop it in the messaging area or simply copy and paste the image.*

Next, you will see form for contact details of administrator (maintainer) of the community. Provide your information as contact details.

![Contact Details](images/vi-contact-details.png)

Then, click on the **"Submit"** button. Your registration request for your community will be send to nation side for approval. You will see the following message.

![Community Accepted into the Nation](images/vi-registration-accepted.png)

Now you can login with the admin credential you created.

Then, post to the [Gitter chat](https://gitter.im/open-learning-exchange/chat) the screenshot you took earlier.

## Troubleshooting

1. When trying to access http://localhost:3000 you may experience an error such as the following: "no_db_found". A simple solution will be using ```vagrant halt dev``` ```vagrant destroy dev``` to delete the current machine, then try ```vagrant up dev``` to rebuild it.

2. If you accidentally delete your Planet admin acccount, creating a new learner account on login page will casue problem in latter steps. The best way to solve this problem is to start over and create a new community using `vagrant destroy dev` then `vagrant up dev` in `planet` folder.

3. In the case you use the command `vagrant destroy dev`, your community Planet will be wiped together with the virtual machine, but  community registration still exist on the nation side. After rebuilding your community Planet using `vagrant up dev`, fill out the configurations again with a slightly difference Name (e.g. adding a number or letter to the end of your original GitHub username) so we can still locate your community on the Nation side.

## Next Section **→**

Now you have configured your community Planet, head over to [Vagrant Tutorial](vi-vagrant.md) to learn about how to interact with Vagrant through the command-line interface. You should be familiar with this since you will need to use it to control virtual machines during your internship.

#### Return to [First Steps](vi-first-steps.md#Step_1_-_Planet_and_Vagrant)
