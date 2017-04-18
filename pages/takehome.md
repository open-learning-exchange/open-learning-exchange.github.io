[Google Doc](https://docs.google.com/document/d/1JUePcj0W9mg6Ea__lakJK-Zd6ZFXchmqdbztLqIU4Cs/edit#heading=h.ieliyf4f8pjx)

#Android "Take Home" Bell application development

##Project Setup
To be able to debug / repackage / build on the android mobile application, you need to:

- download and install the most recent official IDE for android: [Android Studio](https://developer.android.com/studio/index.html) 

- Verify which version of the JDK you have: open a command line and type javac -version. If the JDK is not available or the version is lower than 1.8, download the [Java SE Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

> MAC Users : There are, however, known stability issues in Android Studio on Mac when using JDK 1.8. Until these issues are resolved, you can improve stability by downgrading your JDK to an older version (but no lower than JDK 1.6).

- Launch Android Studio after installation.

- Select whether you want to import previous Android Studio settings, then click OK.

---

The Android Studio Setup Wizard guides you through the rest of the setup, which includes downloading Android SDK components that are required for development. 
 We only need SDK 4.4 and above. You can install as many SDK’s packages as you wish to. Note that the packages are huge and therefore precaution must be taken with HDD available space in mind.

![AndroidSDKManager](uploads/images/AndroidSDKManager.png)


In a terminal / console of your choosing, navigate into the working directory of Android studio and git clone the “take-home“ repository at https://github.com/open-learning-exchange/take-home.git
Run Android studio. Select New from the file menu and select import project.
Navigate to Android studio -> take-home and select the settings.gradle file to import and open the project.

>@todo : 
>http://stackoverflow.com/questions/37397810/android-studio-unable-to-run-avd
>https://www.virtualbox.org/ticket/14294 NB Virtualbox version needs lower equal 4.3.28

- Click on the run button located at the top of your IDE. You will be prompted to Select Deployment Target. Select “Create New Emulator” button.

![AndroidDeploymentTarget](uploads/images/AndroidDeploymentTarget.png)

- Select a device definition from the list provided and click the next button
           
![AndroidHardwareSelection](uploads/images/AndroidHardwareSelection.png)

- Select system image from the list shown. API Level 22 and above works best. Preferably, choose 22 with Android 5.1. Click next to continue.
	
![AndroidMarshmellowSystem](uploads/images/AndroidMarshmellowSystem.png)

- Name the emulator and specify the necessary configuration as shown below. Click on finish to save the emulator. 
	
![AndroidVirtualDevice](uploads/images/AndroidVirtualDevice.png)

- You will be presented with the “Select Deployment Target” dialogue again . Choose the emulator we just created and click on the “OK” button.

![AndroidDeploymentTarget](uploads/images/AndroidDeploymentTarget.png)

- The emulator will be opened with application installed. You have successfully configured the development environment to get you started. 

When you first run the app you will get an error saying you are missing two .apk files. You can find the following files here:

- [firefox_49_0_multi_android.apk](https://drive.google.com/file/d/0Bw7aA5bLT2P9TTBNSDl3VzgtVnc/view)
- [adobe_reader.apk](https://drive.google.com/open?id=0Bw7aA5bLT2P9UmhlcHA1R1BoZnM) 

Download both files and put them into the take-home raw folder found here:

- take-home\app\src\main\res\raw

The app is now ready to run on an Android device. If you would like to run it in Android Studio's virtual device you made, you will have to modify the code as follows.

In Android Studio:
- Navigate to app->java-> FullscreenLogin
- Find ```public boolean updateActivityLog()```
- Comment out the line containing ```String m_WLANMAC = wm.getConnectionInfo().getMacAddress();```
- Add this line below the one you just commented out ```String m_WLANMAC = "mymac";```

Your code should now look like this:

![AndroidFullscreenLoginMod](uploads/images/AndroidFullscreenLoginMod.png)

Again, In Android Studio:
- Navigate to app->java-> FullscreenActivity
- Find ```public boolean updateActivityOpenedResources(String resource_name, String resourceid)```
- Comment out the line containing ```String m_WLANMAC = wm.getConnectionInfo().getMacAddress();```
- Add this line below the one you just commented out ```String m_WLANMAC = "mymac";```

Your code should look like this:

![AndroidscreenActivity](uploads/images/AndroidscreenActivityMod.png)

Now you should be able to run the app in your virtual device.

**Note:** *Remember this change you made to the code! If you make a pull request with this change in place you will break the application when it runs on an Android device. This change is only intended for virtual device testing.*

## Logging in on Android Emulator
The Take-home application by default is setup to run on an actual Android device. You will need to modify the IP address in Setup on the Member Login screen to be able to login successfully.

**Note:** *You need to have completed the [First Steps](http://open-learning-exchange.github.io/#!pages/firststeps.md) that relate to Vagrant in order for your Android Emulator to work. Make sure you can log-into MyBeLL before continuing these steps.*

First you need to find your IP address. Open Command Prompt and type ```ipconfig``` in the window.

![AndroidTakehomeSetupIP](uploads/images/AndroidTakehomeSetupIP.png)

Find your port number in MyBeLL.

![AndroidTakehomeSetupPort](uploads/images/AndroidTakehomeSetupPort.png)

You will combine both numbers into this format ```http://192.168.1.213:5985``` and then place it into the Setup menu inside the Take Home application.

![AndroidSetupTakehomeIPPORT](uploads/images/AndroidSetupTakehomeIPPORT.png)

After entering the IP and Port, click "Test". You should be prompted with a success screen.

![AndroidTakeHomeCompleted](uploads/images/AndroidTakeHomeCompleted.png)

You should now be able to sign into the Take Home application using the same login information that you use for MyBeLL.


## Understanding the flow of the android application
WIP
