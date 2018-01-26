# Android Device Setup

Follow these steps to install and run the **Take Home** application on an Android device.

## Step 1: Setting up Your Device

First of all, in case you are new to mobile developing. If you want to debug **Take Home** using your mobile phone (which we suggest you should). You would need to activate "Developer Options".
This functionality is purposely hidden from view because Android does not want inexperience user to mess up with the system. But for us developer there is a way to activate it.

Here’s we will show you how to activate "Developer Options".

* __Locate 'Build number' on your device.__

Here is where you can find your 'Build number' on a few popular devices.

    Stock Android: Settings > About phone > Build number
    Samsung Galaxy S5: Settings > About device > Build number
    LG G3: Settings > About phone > Software information > Build number
    HTC One (M8): Settings > About > Software information > More > Build number

![BuildNumber](https://nguyenhkbui.000webhostapp.com/rsz_build_number.jpg)

An example of "Build number" from Xperia Z5.

* __Tap on the 'Build number' section 7 times.__

A message 'You are now a Developer!' will flash on your screen.

![NowDeveloper](https://nguyenhkbui.000webhostapp.com/rsz_now-deve.jpg)

* __Go back to Settings main page.__

You can now see a new 'Developer options' section.

![BeforeDeveloper](https://nguyenhkbui.000webhostapp.com/rsz_pre-deve.jpg)

Before Activating "Developer Options"

![DeveloperOptions](https://nguyenhkbui.000webhostapp.com/rsz_developer_options.jpg)

After Activating "Developer Options"

* __Go to 'Developer options' and check 'USB Debugging'.__

Select `OK` on the 'Allow USB debugging' pop-up.

![Debugg](https://nguyenhkbui.000webhostapp.com/rsz_usb_debug.jpg)

* __Connect your device to the computer running Android Studio with USB to microUSB/Type C cable.__

You would see a 'USB debugging connected' notification from the drag down menu.

## Step 2: Install and Run Take Home on Your Device

* __Open Android Studio and locate Take Home project.__

On your computer run Android Studio, locate "Take Home" project.

    Windows default location: User/YourUsername/AndroidStudioProjects/
    Linux/Unix default location: ~/StudioProjects/

Then wait for Gradle to finish building the application. This process can take quite some times so please be patient. After the building process is done, then continue with the next step.

**NOTE**: If you don't have "Take Home" then you might have forgotten to clone it to your local machine. Please follow this guide on how to clone "Take Home". [Link]()

* __Go to menu bar and select 'Run app' from 'Run' drop-down menu in Android Studio.__

A list of connected and virtual devices will pop up.

![ListsOfDevices](https://nguyenhkbui.000webhostapp.com/Select%20Deployment%20Target_030.png)


* __Select `OK` on the Allow USB debugging pop-up on your device screen.__

You can check 'Always allow from this computer' to avoid doing it every time, before selecting `OK`. Now, your device name would appear on the above pop-op on Android Studio.

* __Click on your device name and click `OK`.__

The app would be installed on your phone as 'Planet' or 'Take Home'. This might take several minutes. In case there is another pop-op, select OK or install as appropriate.

Note: Configure and log into the app as you would on an Emulator. [You can see an example here](rbts-takehome-emulator-setup.md#Logging_in_on_Android_Emulator)
