# Nation Planet (Step 7)

## Objectives

- Learn how to sync your Community with the Nation.
- Use the Nation interface to verify if your Community has successfully joined the Nation.
- Update your Community Planet to the latest version.

## Introduction

In [Step 3.2 - Planet Configurations](vi-planet-configurations.md), you registered your Community Planet with the "vi" nation. Now, you will learn how to keep your Community Planet in sync with the nation.

To achieve this, there should be regular communication between the nation and the communities. Although not required for remote communities in the field, this synchronization is crucial for "improving the software and testing the increasing forms of communication and feedback between the nation and the communities." This communication involves a syncing process from the community side, where you select the material to send to the nation.

Ensure Docker is running and visit [http://localhost:3300](http://localhost:3300) to access your Community Planet.

**NOTES:** Before you can sync with the nation after registering your community, you need to create an additional dummy user in your community:
1. Quickly create an additional user under **Become a Member** on the planet login page.
2. Log in to your admin account and ensure the new user is listed under **Members** on the Manager Settings page.

## Sync With the Nation

In [Step 4 - Planet Tutorial - Different Kinds of Updates to Your Community](vi-planetapps.md#Different_Kinds_of_Updates_to_Your_Community), we described three types of updates you might receive on the community side: **Upgrades**, **Resources/Courses**, and **Sync**. One crucial sync is between your community and the nation, which sends data about your community to the nation.

To start the sync process:

1. Click on the **Manager** icon, as shown in the image below.

  ![Clicking on "Manager"](images/edit-vi-nation-manager.png "Dashboard in your localhost")

2. Next, click on **Manage Sync**.

  ![Clicking on "Sync with Nation"](images/vi-nation-sync.png "Community Manage Page in your localhost")

3. You will be taken to a page displaying all sync processes. Click the **Run Sync** button.

  ![Clicking on "Select All" and "Send"](images/vi-nation-sync-send.png "Community Manage Page in your localhost")

4. You will be prompted to enter the Administrator password. After entering the password, the sync process will begin.

By syncing, you send all community activities to the nation. The nation receives aggregated data, such as the number of resources opened, logins, members, resource ratings, technical feedback, and resource requests. This data is not specific to individual users but rather reflects overall usage and feedback.

## Check Sync Status

To verify that the sync was successful, log in to the nation site at [planet.vi.ole.org](https://planet.vi.ole.org) using the username `vi`. To obtain the password, send `-get_vi_nation_pwd` in the #vi-software Discord channel, and you will receive a DM from the YAGPDB bot containing the password.

1. Once logged in, click on the **Manager** icon.

  ![Planet Dashboard with manager icon highlighted in the upper right corner](images/vi-manager-link.png "Planet Dashboard with manager icon highlighted in the upper right corner")

1. Then, click on **Reports** to access reports from various communities within the nation.

  ![Arrow pointing to "Reports" in Planet Manager Settings](images/vi-manager-dashboard.png "Arrow pointing to \"Reports\" in Planet Manager Settings")

1. Next, click to expand the **Sandbox** tab.

  ![Sandbox Tab](images/vi-nation-sandbox.png)

1. You will see a list of communities. Locate and click on your community name to view its report.

  ![Planet - reports - community list](images/vi-nation-communities.png "Planet - reports - community list")

1. You will now see a report of your community, which includes graphical, tabular, and numerical statistics of the data you synced earlier.

  ![Generate Report](images/vi-nation-report.png "Communities Requests Page in OLE site")

## Update Your Community Planet

1. Navigate to your community Planet's Manager Settings page. Check your current **Nation Version** and **Local Version**. If both versions are the same, your planet is already up-to-date.

1. Otherwise, you should see an "**Upgrade**" button (please note it's different than "Upgrade myPlanet" button.) If the **Upgrade** button is not visible, please send a message in #vi-software channel in our Disocrd server along with a screenshot of you Manger Settings page.

  ![Check version](images/vi-planet-version.png "Communities Check version")

1. Click on the **Upgrade** button and you will be presented with the Upgrade page. Click on the **Start Upgrade** button.

1. You should then see a log of the current upgrade process showing new docker images been pulled along with a progress bar. Once the upgrade has completed, a message will appear informing you that the upgrade was successful.

  ![Upgrade Success](images/vi-planet-upgrade-success.png "Communities Upgrade successful")

1. After the upgrade is completed on the web interface, run `docker compose -f planet.yml -p planet stop` then use `docker compose -f planet.yml -p planet up -d` to have the updated services recreated.

1. Finally, force reload the Planet page in your browser and verify your community planet version is updated.

NOTE: If you see an error message during the upgrade process please try again.

## Useful Links

[Helpful links and videos](vi-faq.md#Helpful_Links)

---

**→** Next: [Step 8 - Create More Issues and Pull Requests](vi-create-issues-and-pull-requests.md)

Return to [First Steps](vi-first-steps.md#Step_7_-_Nation_Planet)
