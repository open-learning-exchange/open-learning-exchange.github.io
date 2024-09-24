# Planet Configurations (Step 2.2)

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

## Database

- [Apache CouchDB](https://en.wikipedia.org/wiki/Apache_CouchDB) is a database software that we use for the Planet. You can see the back-end interface of our CouchDB at http://localhost:2200/_utils. In `_utils`, you have the opportunity to see all data of your Planet application.

- [PouchDB](https://pouchdb.com/learn.html) is an open-source JavaScript database inspired by Apache CouchDB that is designed to run well within the browser. This allows applications to save data locally, so that users can enjoy all the features of an app even when they're offline. This database is also used in the planet.

## Check if Planet is Running

Visit [http://localhost:3300](http://localhost:3300) or [http://127.0.0.1:3300](http://127.0.0.1:3300) to access the initial admin configuration page. If you cannot access it, follow the instructions below based on your OS.

1. Run `docker ps -a` in your Linux/macOS terminal or <!-- Windows WSL Debian app / -->Git Bash to check if your Community Planet is "up" and running.
2. If it's not running, navigate to the `planet` directory on your local machine:

   - **Linux:** `cd /srv/planet`
   - **macOS:** `cd ~/srv/planet`
   - **Windows:** `cd ~/srv/planet`

3. Run `docker compose -f planet.yml -p planet start` to start the service.

## Configure Your Planet Community

Visit the initial admin configuration page by navigating to [http://localhost:3300](http://localhost:3300) or [http://127.0.0.1:3300](http://127.0.0.1:3300). **Use `admin` as both the username and password**, as specified in the Docker Compose YAML file from the previous step.

![Become an Administrator](images/vi-become-admin.png)

**WARNING:** Do not close this browser tab before completing the configuration, as you cannot return to this form. If you accidentally close the tab, run `docker compose -f planet.yml -p planet down -v` followed by `docker compose -f planet.yml -p planet up -d --build` to restart the process.

Fill out the configurations, ensuring your name matches your GitHub name for easy identification in Virtual Intern Nation. Select **Virtual Intern Nation (vi)** as the nation, as shown below. **After completing the configurations, save a screenshot of the page to post on the Discord server after submitting your registration request.**

![Configurations](images/vi-configuration.png)

Next, provide the contact details of the community administrator.

![Contact Details](images/vi-contact-details.png)

Click the **"Submit"** button to send your registration request for approval. You will see the following message:

![Community Accepted into the Nation](images/vi-registration-accepted.png)

You can now log in with the admin credentials you created.

Finally, post the screenshot you took earlier to [our Discord server's #vi-software channel](https://discord.com/channels/1079980988421132369/1229437557843169280).

## Troubleshooting

1. If you encounter any of the following issues, please follow the steps in the "Starting Over" section below:
   - `no_db_found`
   - Accidental deletion of your Planet admin account

1. **Planet Page Not Loading in Browser**

   If the Planet page doesn't load in your browser, even with correct account configuration and approval:
   - First, try accessing the page in your browser's incognito/private mode to check if it's a cookie/cache issue.
   - If Planet loads in incognito/private mode, clear your browser cookies.
   - If it still doesn't load, follow the "Restarting the Containers" steps below.
   - If these steps don't work, follow the "Starting Over" section below to "rebuild" your Planet.

   ![Blank](https://user-images.githubusercontent.com/22685147/58755807-be6ad780-84b9-11e9-86b5-c745f584ac41.png)

1. **Account Not Recognized After Approval**

   After your account is approved, the website might not recognize your registration, resulting in an infinite loading screen. Refreshing the page could leave it blank. To resolve this issue, follow the steps in the "Starting Over" section below.

   ![Not recognized](https://user-images.githubusercontent.com/22685147/58755806-bb6fe700-84b9-11e9-8a27-d3e3ab56ffba.png)

### Restarting the Containers

To restart the containers, use

```bash
docker compose -f planet.yml -p planet restart
```

or

```bash
# Stop `planet` without removing it
docker compose -f planet.yml -p planet stop

# Start `planet` again
docker compose -f planet.yml -p planet start
```

### Starting Over

**Warning:** This will perform a full uninstall, removing the entire community you configured, including the database.

```bash
# 1. Stop and remove containers, networks, volumes, and images
# created with the `planet.yml` configuration file
docker compose -f planet.yml -p planet down -v

# 2. Remove the planet folder you created in Step 2.1
# Linux
rm -rf /srv/planet

# macOS or Windows
rm -rf ~/srv/planet

# 3. Follow "YourOS - Run Planet Community with Docker" in Step 2.1 again
```

After planet is up and running, follow [Configure Your PlanetCommunity](#!./pages/vi/vi-configurations-vagrant.md#Configure_Your_Planet_Community) again, since your old community registration still exist on the nation side, please use a slightly different name for your configuration, e.g. `<YourGitHubUserName>-1`.

### More Help

If you continue to have issues after troubleshooting with the above instructions, please reach out to us on Discord for assistance.

## Next Section _([Step 3](vi-github-and-markdown.md))_ **→**

Markdown is a lightweight markup language with plain text formatting syntax. In the next section, you will learn Markdown to create a profile page, and learn how to create a pull request on the GitHub web interface.

#### Return to [First Steps](vi-first-steps.md#Step_2_-_Planet_and_Docker)
