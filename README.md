# How to Create Your Own Schedule Program

1. Website
   1. How to use infinityfree for free hosting if needed
      1. Either use your own hosting server OR follow these instructions to create a free infinityfree server
      2. Go to infinityfree.net
      3. Click “Client Area”
      4. Login or create an account
      5. Click “Create Account”
      6. Either choose a custom domain (and I’m sure there will be other things that need to be done, but I don’t know how to do that) OR choose your preferred subdomain and one of the predetermined endings
      7. I would recommend against changing the default password, but feel free to change the Account Label
      8. Click “Create Account” - it may take a little while to fully create everything
      9. Whenever I mention “go into your account” or something similar, that means you go to infinityfree.net, click on “Client Area,” then click “Manage” on your account
      10. Download the "htdocs" file from this GitHub
      11. Go into your account and click “Control Panel” to enable your File Manager
      12. Go back into your account and click “File Manager”
      13. Remove the “htdocs” folder
      14. Press the bottom left button and click “Upload Folder”
      15. Upload the downloaded folder
   2. How to renew (and create) the ssl certificate through infinityfree.net
      1. SSL is what makes your website secure and lets it use “https” instead of “http”
      2. Go to infinityfree.net and then click “Client Area”
      3. Click “Free SSL Certificates”
      4. Click “New SSL Certificate”
      5. Enter the domain name without the “ht<span>tp://</span>w<span>ww.</span>”
      7. Click “Check Domain”
      8. The preferred free subdomain (for a paid custom domain, it may be different) provider that infinityfree offers is ZeroSSL. If for some reason it’s not available, use GoGetSSL or any other free subdomain SSL provider - ZeroSSL just makes renewable easy.
      9. If you either don’t have a SSL certificate previously installed or you didn’t use ZeroSSL, follow these steps, otherwise skip ahead
         1. Go to your account and click “Control Panel”
         2. In the search box (not the search for new domain box), search for “CNAME”
         3. Click on “CNAME Records”
         4. Remove any previous CNAME records
         5. Go to the SSL provider tab and copy the “Record Name” text
         6. Go to the CNAME tab and paste it into the “Record Name” box
         7. Repeat the previous two steps but copy the “Destination” text and paste it into the “Destination” box
      10. Click “Verify Domain” - this may take several hours, so reload every now and then (you should also get an email) and once it loads, continue with the next steps
      11. Open a new tab (not needed, but recommended), and go to your account
      12. Click “Control Panel”
      13. In the search box (not the search for new domain box), search for “SSL”
      14. Click on “SSL/TLS”
      15. Under “Configure SSL,” click “Configure”
      16. Go back to the SSL provider tab and click “Show” for the Private Key and Certificate
      17. Copy the entire private key (including the “-----BEGIN PRIVATE KEY-----” and “-----END PRIVATE KEY-----” and paste it into the Private Key textbox in the SSL/TLS tab
      18. Click “Upload Key”
      19. Repeat the two previous steps but with the certificate instead
   3. How to add normal and custom schedules
      1. There are normal schedules (8A/8B/7A/7B/6A/6B/5A/5B) which have a dropdown to choose from and custom schedules (eg. Chiang) which have a button (top right) which when clicked lets you input text
      2. Part 1: Code
         1. Go into the main file (index.html) and find the text that says “var validSections = new Array();” (possibly using command + f)
         2. You can add or remove schedules (even normal ones, although that won’t remove it from the dropdown) by adding or removing a validSections[x] = “Name”
         3. To add a new one, copy and paste the previous validSections[x] = “Name” onto a new line and increase the value (x) by 1
         4. eg. validSections[8] = "Ranney";
         5. In this example, there is a new custom schedule on top of the regular 8 (lists start at 0) called “Ranney”
         6. When removing schedules, make sure that the x value doesn’t skip over any number and starts at 0
      3. Part 2: Files
         1. Go to htdocs (where Index.html is) and open “Schedules”
         2. Download any schedules you want to add (just use the master sheet, download as pdf, then convert to .webp)
         3. Delete any schedules you want to remove
         4. Rename the files to “Name Schedule.webp” where Name is the name of the schedule (8A/8B/7A/7B/6A/6B/5A/5B for normal or anything for custom)
   4. How to reset the day and date
      1. This is to reset the letter day if it for some reason is broken or at the start of the year
      2. Go into the main file (index.html) and find the text that says “var previousDay = ” or “var previousLetter = ” (possibly using command + f)
      3. Change “var previousDay = ” to have “new Date(year, month (starts at 0), day);” but replace the year, month (starts at 0), and day with a previous day that you know is correct
         1. eg. var previousDay = new Date(2022, 3, 25);
         2. This example has the previous day set to 4/25/2022
      4. Change “var previousLetter = ” to have the letter of that day at the end (and finish with “;”)
         1. eg. var previousLetter = "D";
         2. This example has the previous day as a D-day
   5. How to create the non-weekend no school days
      1. This is to choose what non-weekend days are skipped (where the letter will stay the same once said skipped days are over)
      2. Go into the main file (index.html) and find the text that says “var noSchoolDates = ” (possibly using command + f)
      3. Change “var noSchoolDates = ” to have “[new Date(year, month (starts at 0), day), repeat this but with other dates];” but replace the year, month (starts at 0), and day with any skipped days and replace “repeat this but with other dates” with the same as above if there are multiple skipped days
         1. eg. var noSchoolDates = [new Date(2022, 4, 30), new Date(2022, 3, 30)];
         2. This example treats the date 5/30/2022 and 4/30/2022 as weekends where the letter doesn’t change even though it’s a weekday
   6. How to add/remove/modify settings
      1. Settings for the website are kept in a single localStorage object (custom code). The only two settings not kept in that object are themeName and storageSection
      2. Go into the main file (index.html) and find the text that says var localSettings = localStorage.getObj('settings') || new Array” (possibly using command + f)
      3. The "new Array" includes the default settings
      4. If you want to add/remove/modify any, just change the "new Array" in that line and two lines underneath it to have the new defaults
      5. Change the line between the two "new Array"s to have the number that is in "length != NUMBER" to be equal to the number of settings in that object
      6. Use the following code to change settings in the program:
         1. localSettings[INDEX] = NEWVALUE; where INDEX is the index of the setting changed and NEWVALUE is the new value it's equal to
         2. localStorage.setObj('settings', localSettings);
   8. How to add/remove/modify themes
      1. Themes can be created (such as dark and light)
      2. Go into the main file (index.html) and find the text that says “var themes = {” (possibly using command + f)
      3. Copy what I did with a Christmas theme (doesn't automatically activate and can only be viewed by modifying the localStorage and looks terrible) but change the name and change the hex codes to whatever colors you want
      4. To remove a theme, just delete it from the list
      5. To change a theme's colors, just modify the hex values
      6. To change a theme's name, just modify the name
      7. To set the theme in the code, run:
         1. "localStorage.setItem("themeName", "dark");
         2. __setTheme("THEMENAME");
   9. How to set up optional side images
      1. There is a feature where if you add “?imagefolder=” and then an predetermined name to the end of the url, it will show a random image from that name’s folder
      2. Create as many folders as you want (under the htdocs folder) with different names and fill them with whatever images you want as long as they all have the same format (different folders can have different formats)
      3. Rename the files inside the folder with this format: “image#” with # being a number (increasing, starting at 0)
      4. Go into the main file (index.html) and find the text that says “let imageLengths = ” or “let imageFormats = ” (possibly using command + f)
      5. Change “let imageLengths = ” to be equal to {Name: NumberOfImages, Name2: NumberOfImages2}; (you can add as many as you want, just put the name then a colon then the number of images in that folder and make sure to put a comma between the new names)
         1. eg. let imageLengths = {AC: 35, AC2: 146};
         2. The example has the folder name AC containing 35 photos and the folder name AC2 containing 146 photos
      6. Repeat the previous step but with “let imageFormats = ” and the image format (without the .)
         1. eg. let imageFormats = {AC: 'jpeg', AC2: 'jpg'};
         2. The example has the folder name AC containing jpeg photos and the folder name AC2 containing jpg photos
      7. Now if you go to your domain with “?imagefolder=” and the chosen folder at the end, it will pick a random image from that folder to show (new one every time you reload the website)
2. Messages program
   1. Show how to setup all needed permissions (check which ones are actually needed, don't forget sleep)
   2. Explain how to change the phone numbers being sent to and the section
   3. Explain how to get the images (a bit tedious)
   4. Explain how to get the file placement all setup
   5. Explain how to install node (I think that’s necessary)
   6. Explain how to create the automatic computer startup
   7. Show how to setup the launchd file
      1. INSTRUCTIONS NEEDED (download the file and run some commands that I need to put into the instructions)
      2. To load and unload (turn it on and off) the launchd file (that runs the SendMessages file at a certain time):
         1. sudo launchctl load -w /Library/LaunchDaemons/launched.sendmessages.plist
         2. sudo launchctl unload -w /Library/LaunchDaemons/launched.sendmessages.plist
