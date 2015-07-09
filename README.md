##Set up
* make sure npm is installed
* clone the repo and go in the directory ```cd http_json```
* run ```npm install```
* Express.js is used to run the node server.
  * Start the server with ```npm start```
* In a browser go to http://localhost:3000

##Functionality
* The following events are cached on the server
  * Resize the window and the before and after size will be saved. This will only happen for your first resize.
  * Copy and Pasting into any of the fields will update the data file with this event message.
  * The time from your first keystroke in any field until you press the Submit button will be recorded in the data file.
* Only When 'Submit' is pressed will the cached data be written to a file.
  * Data is stored in the data/json_messages.txt file
* The terminal will display if the event was cached successfully.


##Improvements given more time
* I would move all the javascript into a separate js folder.
* Set up tests using mocha, chai and selenium-io
* The Data is stored in a text file and objects are just appended. Improvement would be to store all the objects that are submitted as an array of objects to make this file valid JSON syntax.
* The sendFormTimeAndURL() is not as robust as it could be. If the following lines are reversed from
```
sendingJson(message, urlKey);
sendingJson(message, timeKey);
```
to
```
sendingJson(message, timeKey);
sendingJson(message, urlKey);

```
then the URL won't show on the first submit because the 'timeKey' will write to the file before it has been received.
A solution could be to use a message template which populates with the ajax request.