# Android Device Emulator

One of the deployment environments that you are going to be working in is Android Studio's Android device emulator. These Steps will guide you to get the emulator up and running.

## Android Studio Emulator Setup

To run the app in Android Studio's virtual device, you will have to create a new emulator as follows.

* Click on the run button located at the top of your IDE. You will be prompted to Select Deployment Target. Select “Create New Emulator” button.

![Android Deployment Target](images/rbts-android-deployment-target.png)

* Select a device definition from the list provided and click the next button
           
![Android Hardware Selection](images/rbts-android-hardware-selection.png)

* Select system image from the list shown. API Level 22 and above works best. Preferably, choose 22 with Android 5.1. Click next to continue.
	
![Android Marshmellow System](images/rbts-android-marshmellow-system.png)

* Name the emulator and specify the necessary configuration as shown below. Click on finish to save the emulator. 
	
![Android Virtual Device](images/rbts-android-virtual-device.png)

* You will be presented with the “Select Deployment Target” dialogue again . Choose the emulator we just created and click on the “OK” button.

![Android Deployment Target](images/rbts-android-deployment-target.png)

* The emulator will be opened with application installed. You have successfully configured the development environment to get you started.

Now you should be able to run the app in your virtual device.

## Logging in on Android Emulator

The Take Home application by default is setup to run on an actual Android device. You will need to modify the IP address in the Setup menu on the Member Login screen to be able to login successfully using the Android Emulator.

Note: You must have completed the [First Steps](#!./pages/vi-first-steps.md) that relate to Vagrant in order for your Android Emulator to work. Make sure you can log-into MyBeLL before continuing these steps.*

First, you need to find your IP address.

For Windows, Open Command Prompt and type ```ipconfig``` in the window.

![Android Takehome Setup IP](images/rbts-android-takehome-setup-ip.png)

For macOS and Ubuntu, Open Terminal and type ```ifconfig``` in the terminal.

![Android Takehome Setup IP For Mac](images/rbts-android-takehome-setup-ip-for-osx.png)

Second, you need to find your port number in MyBeLL.

![Android Takehome Setup IP For Mac](images/rbts-android-takehome-find-port.png)

Finally, You will combine both numbers into this format ```http://192.168.1.213:5985``` and then place it into the Setup menu inside the Take Home application.

![Android Takehome Setup Port](images/rbts-android-takehome-setup-ip-port.png)

After entering the IP and Port, click "Test". You should be prompted with a success screen.

![Android Take-Home Completed](images/rbts-android-takehome-completed.png)

You should now be able to sign into the Take Home application using the same login information that you use for MyBeLL.

Note: In order to connect to the Nation instead of your local community, place URL 'http://vi:oleoleole@vi.ole.org:5999' into the Setup menu and login with the default credentials (User: `admin` Password: `password`)