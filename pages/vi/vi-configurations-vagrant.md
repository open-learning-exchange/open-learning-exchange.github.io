# Planet Configurations (Step 1.2)

## Objectives

- Learn about Planet and the difference between Nations and Communities
- Create a local Planet Community
- Register your Community and sync it with the Nation

## Introduction

The Planet is not only a library, but also an individualized learning system, where students can select their own books and courses to target their individual goals. The two kinds of Planet apps are described below.

### Planet Communities (Local)

- Communities are how the Planet functions on a local network, with users connecting to a community using either a laptop or a Raspberry Pi and a router.
- Periodically communities sync with Nations on the internet, which includes sending and receiving educational materials.
- In the prior step, you created a Planet community on your computer. As you follow the steps on this page, you will access and configure your community.

### Planet Nations (Internet)

- Nations are Planet apps for the Internet, allowing communities to interact with each other.
- Nations are connected to many communities and can run reports on any communities it owns.
- As you complete these instructions, an OLE administrator will complete the registration of your community with the Virtual Intern Nation.

## Check if Planet is running

### macOS

Please run `docker ps -a` in the command line to check if your Community Planet's status is "up" and running. If it's not, `cd` into the `~/planet` directory on your local machine and run `docker compose -f planet.yml -p planet start`.

### Linux

Please run `docker ps -a` in the command line to check if your Community Planet's status is "up" and running. If it's not, `cd` into the `/srv/planet` directory on your local machine and run `docker compose -f planet.yml -p planet start`.

### Windows

<!-- TODO: probably need to change `/srv/planet` here -->

Please run `docker ps -a` in the command line to check if your Community Planet's status is "up" and running. If it's not, `cd` into the `/srv/planet` directory on your local machine and run `docker compose -f planet.yml -p planet start`.

## Database

- [Apache CouchDB](https://en.wikipedia.org/wiki/Apache_CouchDB) is a database software that we use for the Planet. You can see the back-end interface of our CouchDB at http://localhost:2200/_utils. In `_utils`, you have the opportunity to see all data of your Planet application.

- [PouchDB](https://pouchdb.com/learn.html) is an open-source JavaScript database inspired by Apache CouchDB that is designed to run well within the browser. This allows applications to save data locally, so that users can enjoy all the features of an app even when they're offline. This database is also used in the planet.

## Configure Your Planet Community

Visit [http://localhost](http://localhost) or [http://127.0.0.1](http://127.0.0.1) to access the initial admin configuration page. Fill out the admin username and password, and make sure to remember the password.

![Become an Administrator](images/vi-become-admin.png)

**WARNING:** Do not close this browser tab before completing the configuration, as you cannot return to this form. If you accidentally close the tab, run `docker compose -f planet.yml -p planet down` followed by `docker compose -f planet.yml -p planet up -d` to restart the process.

Fill out the configurations, ensuring your name matches your GitHub name for easy identification in Virtual Intern Nation. Select **Virtual Intern Nation (vi)** as the nation, as shown below. **After completing the configurations, save a screenshot of the page to post on the Discord server after submitting your registration request.**

![Configurations](images/vi-configuration.png)

Next, provide the contact details of the community administrator.

![Contact Details](images/vi-contact-details.png)

Click the **"Submit"** button to send your registration request for approval. You will see the following message:

![Community Accepted into the Nation](images/vi-registration-accepted.png)

You can now log in with the admin credentials you created.

Finally, post the screenshot you took earlier to the [Discord server](https://discord.gg/mtgGD4EnYW).

## Troubleshooting

1. When trying to access http://localhost:3100 you may experience an error such as the following: "no_db_found". A simple solution will be using ```vagrant halt prod``` ```vagrant destroy prod``` to delete the current machine, then try ```vagrant up prod``` to rebuild it.

2. If you accidentally delete your Planet admin account, creating a new learner account on the login page will cause problems in later steps. The best way to solve this problem is to start over and create a new community. 
Run`docker compose -f planet.yml -p planet up -d`
in your planet folder. This destroys and removes your community, pulls the latest code, and starts a community from scratch.

3. In the case that you use the command `vagrant destroy prod`, your community Planet would be wiped together with the virtual machine, but  community registration would still exist on the nation side. After rebuilding your community Planet using `vagrant up prod`, fill out the configurations again with a slightly different Name (e.g. adding a number or letter to the end of your original GitHub username) so that we can still locate your community on the Nation side. Also, remember to take a screenshot of the new configuration page and post it to the [Discord server](https://discord.gg/mtgGD4EnYW).

4. There is a chance upon having your account approved that the website does not recognize you as registered. You will be stuck infinitely loading and upon refresh, the page will be blank. 

  ![Not recognized](https://user-images.githubusercontent.com/22685147/58755806-bb6fe700-84b9-11e9-8a27-d3e3ab56ffba.png) 
  
  ![Blank](https://user-images.githubusercontent.com/22685147/58755807-be6ad780-84b9-11e9-86b5-c745f584ac41.png) 
  
  In order to fix this problem, simply follow the procedures stated above in step 3: use `vagrant destroy prod`, then `vagrant up prod`. Afterwards, use a slightly different name for your configuration, take a screenshot of the new configuration page, and post it to the [Discord server](https://discord.gg/mtgGD4EnYW).

5. When you are trying to access http://localhost:3100 the page may not load at all, even if your account was configured correctly and fully approved. A first step would be to run `vagrant halt prod`. Then, you should proceed to clear the cookies from your browser. This step will be different for each browser. Finally, you should run `vagrant up prod` to restart the VM before you reopen the browser to access the Planet again. **If this does not work, follow the previous steps above to rebuild your planet account.**

#### Return to [First Steps](vi-first-steps.md#Step_1_-_Planet_and_Vagrant)
