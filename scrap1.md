Start Script testing
=====================

Scripts:
-------
+ Wipe gradlew cache: 
>cd android/ && gradlew clean 

+ Start sever: 
>yarn react-native start 

+ Start development: 
>yarn react-native run-android"

First attempt:
>"start": "cd android/ && gradlew clean && yarn react-native start  && yarn react-native run-android",


New automate command with *concurrently* :
---------------------
>"start": "yarn concurrently \"command1 arg\" \"command2 arg\"",
