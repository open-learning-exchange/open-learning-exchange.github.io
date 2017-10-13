# Android Studio Setup

To be able to debug / repackage / build on the android mobile application, you need to:

- download and install the most recent official IDE for android: [Android Studio](https://developer.android.com/studio/index.html) 

- Verify which version of the JDK you have: open a command line and type javac -version. If the JDK is not available or the version is lower than 1.8, download the [Java SE Development Kit 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

> MAC Users : There are, however, known stability issues in Android Studio on Mac when using JDK 1.8. Until these issues are resolved, you can improve stability by downgrading your JDK to an older version (but no lower than JDK 1.6).

- Launch Android Studio after installation.

- Select whether you want to import previous Android Studio settings, then click OK.

- GitHub Setting

- Take Home Project Setup

---

The Android Studio Setup Wizard guides you through the rest of the setup, which includes downloading Android SDK components that are required for development. 

 We only need SDK 4.4 and above. You can install as many SDK’s packages as you wish to. Note that the packages are huge and therefore precaution must be taken with HDD available space in mind.

![Android SDK Manager](images/rbts-android-SDK-manager.png)

### GitHub Setting

There are three steps that needs be done before you can make contribution to "take-home" project:

1. Find and fork the "take-home" repository
You can [find "take-home" GitHub repository here](https://github.com/open-learning-exchange/take-home). Fork the repository to your own GitHub account by clicking the fork button (just like what you did in [step 3](vi-github-and-markdown.md#Find_and_fork_the_correct_repository))

2. Clone your own GitHub repository yourGitHubUsername/take-home
In a terminal / console of your choosing, navigate into the working directory of Android studio and git clone your own “take-home“ repository at `https://github.com/yourGitHubUsername/take-home.git`

3. Configure a remote for your local repository
Under your "take-home" directory, type `git remote add upstream https://github.com/open-learning-exchange/take-home.git` so that you can fetch updates from the upstream repository (reference [step 5](vi-git-and-repositories.md#Configure_a_remote_for_your_fork))

Now, Run Android studio. Select New from the file menu and select import project. Navigate to Android studio -> take-home and select the settings.gradle file to import and open the project.

>@todo : 
>http://stackoverflow.com/questions/37397810/android-studio-unable-to-run-avd https://www.virtualbox.org/ticket/14294 NB Virtualbox version needs lower equal 4.3.28

### Take Home Project Setup

When you try to run the app now you will get an error saying you are missing two .apk files. You can find the following files here:

- [firefox_49_0_multi_android.apk](https://drive.google.com/file/d/0Bw7aA5bLT2P9TTBNSDl3VzgtVnc/view)
- [adobe_reader.apk](https://drive.google.com/open?id=0Bw7aA5bLT2P9UmhlcHA1R1BoZnM) 

Download both files and put them into the take-home raw folder found here:

- take-home\app\src\main\res\raw

Now, The Take Home project is ready to run on an Android device or an Android Emulator. Check out [Android Device Setup](rbts-takehome-device-setup.md) and [Android Device Emulator Setup](rbts-takehome-emulator-setup.md) for more details.