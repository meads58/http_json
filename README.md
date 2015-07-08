##Set up
* make sure npm is installed
* clone the repo and cd into the directory
* run ```npm install```
* Start the server with ```npm start```
* In a browser go to http://localhost:3000

##Functionality
* Data is saved in the data/json_messages.txt file
* Resize the window and the before and after size will be saved.
* Copy and Past in any of the fields will update the data file with this action.
* The time from your first keystroke in any field until you press the Submit button will be recorded in the data file.

##Improvements given more time
* I would move all the javascript into a separate js folder.
* Set up tests using mocha, chai and selenium-io
* Arrange the json object to append within a sessionID, something like this.
```
[
    {
        "sessionId": "123123-123123-123123123",
        "events": [
            {
                "eventType": "copyAndPaste",
                "websiteUrl": "https://ravelin.com",
                "pasted": true,
                "formId": "inputCardNumber"
            },
            {
                "eventType": "timeTaken",
                "websiteUrl": "https://ravelin.com",
                "time": 72
            }
        ]
    },
    {
        "sessionid": "223322-223322-443344223",
        "events": [
            {
                "eventType": "copyAndPaste",
                "websiteUrl": "https://ravelin.com",
                "pasted": true,
                "formId": "inputEmail"
            }
        ]
    }
]
```