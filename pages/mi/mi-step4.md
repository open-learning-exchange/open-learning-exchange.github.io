# Connecting myPlanet to Planet

## Background

We use the nation/community infrastructure because our software is often deployed in areas without internet access. Nations are services in the cloud that are connected to the internet. Communities, typically run locally on Raspberry Pis and/or laptops, operate on an intranet and are sometimes not connected to the internet. Nations, being internet-connected, facilitate communication between us (with internet access) and users in communities (without internet access). However, for a community to sync with a nation, it must connect to the internet to enable bidirectional data exchange.

## Connecting myPlanet to Planet Virtual Interns Nation "vi"

[Video tutorial for this section](https://www.youtube.com/watch?v=Gm194qUNz0o)

In this step, you will be connecting our mobile application, myPlanet, to Planet "vi" nation. To establish the connection, follow the instructions below:

- **Configuration**: Click the settings gear icon in the upper-right corner to open the settings dialog box.
  - Toggle on "manual" configuration.
  - Select "https".
  - Enter the following for "planet ip": `planet.vi.ole.org`.
  - For "server pin", send `-get_vi_nation_pin` in the [mobile intern discord channel](https://discord.com/channels/1079980988421132369/1131244649902772235) and you will receive a DM containing the PIN from YAGPDB bot
  - Click "SYNC" and allow the synchronization process to complete.

  ![Server Address Popup Screenshot](image/mi-server-address-popup.png)

- **Create a User Account**: After syncing, click "BECOME A MEMBER" and fill in the required information to create an account. Keep your credentials somewhere, as you'll need them for future logins.

- **Sign In**: Use the username and password you just created to log in to myPlanet. You have now successfully connect myPlanet app to planet server.

**NOTE**: If you encounter issues during sign-in, try the following:
1. Re-Sync: manually initiate sync by pressing the sync icon at the top left corner of the app. After syncing, try logging in again.
2. Clear app data: Clear myPlanet's app data in Android's app info page. Try configuration steps above again.
3. If the issue persists, contact us on Discord with details.

- **Explore Around**: Click around and explore the app's basic features, let us know in the Discord channel if you notice any issues.

Take a screenshot of the myPlanet app's home page on your device, then share it in the Discord channel to let us know you've completed step 4.

#### Return to [First Steps](mi-10-steps.md#Step_4_-_Connect_myPlanet_app_to_Planet)
