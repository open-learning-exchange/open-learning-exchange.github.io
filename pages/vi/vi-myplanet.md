# myPlanet Tutorial (Step 4.2)

**NOTE**: If you don't have access to an Android device, you may skip this step.

## Objectives

- Install myPlanet on your Android device
- Understand basic functions of myPlanet

## Overview of myPlanet

**myPlanet** is the mobile version of the Planet application. It connects to the Planet server to retrieve data, allowing you to use the Planet application offline.

We encourage you to explore myPlanet, experiment with its features, and become familiar with how it works.

## Install myPlanet

myPlanet application is currently only available for Android devices. You can find myPlanet application in [Play Store](https://play.google.com/store/apps/details?id=org.ole.planet.myplanet).

### Enroll in Beta Testing

Join as a beta tester to help us improve the app:

- **From a Phone:**
  Join in Google Play on Android in [myPlanet app's detail page](https://play.google.com/store/apps/details?id=org.ole.planet.myplanet). Scroll all the way down, under “Join the beta,” tap Join.
- **From a Laptop or Desktop Computer:**
  Join on the web via [this testing invitation link](https://play.google.com/apps/testing/org.ole.planet.myplanet).

After enrolling, there may be a delay before you can upgrade to the beta version of the app.

## Configure myPlanet

Once you've installed the beta version of the app, launch it and grant necessary permissions.

- **Configuration**: Click the settings gear icon in the upper-right corner to open the settings dialog box.
  - Toggle on **Manual** configuration.
  - Select **HTTP**.
  - For **Planet IP**, enter the IP address of the device running production Planet from [Step 3.1 - Docker Tutorial](vi-docker-tutorial.md), followed by `:3300` (e.g., `192.168.1.35:3300`).
  - For **Server PIN**, check the **Tablet PIN number** under **Manager Settings** in Planet.
  - Click **SYNC** and allow the synchronization process to complete.

## Explore myPlanet

After logging in, explore the app for a minimal of 15 minutes, try out features like Library, Courses, Calendar, etc.

Take screenshots and attempt to crash the app. After exploration, update us on Discord: "I'm on step 4.2, spent about xx minutes in the myPlanet app and crashed it when navigating to ..." or "I'm on step 4.2, spent about xx minutes in the myPlanet app and it did not crash."

Details about the crash might take up to 24 hours to show up in Google Play Console on our end.

## Useful Links

- [Helpful links and videos](vi-faq.md#Helpful_Links)
- [myPlanet GitHub Repository](https://github.com/open-learning-exchange/myplanet)

## Next Section _([Step 5](vi-github-and-repositories.md))_ **→**

In the next step, you will learn more about how our Git repositories work, and how to sync your own repository to keep up-to-date.

#### Return to [First Steps](vi-first-steps.md#Step_4_-_Planet_and_myPlanet_Tutorial)
