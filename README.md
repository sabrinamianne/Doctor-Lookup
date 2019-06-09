#  🚑👨‍⚕️👩‍⚕️  Doctor-Lookup  👨‍⚕️👩‍⚕️ 🚑



[![forthebadge](http://forthebadge.com/images/badges/made-with-javascript.svg)](http://forthebadge.com)


An Application that find a doctor in Seattle depends to your symptoms.

## 💾 Install

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/sabrinamianne/Doctor-Lookup.git

# Go into the repository
$ cd Doctor-Lookup

# Install dependencies
$ npm install

# Run the app
$ npm start

# Enter your Api Key
$ Create your Api Key on https://developer.betterdoctor.com/
$ Place your token in an .env file at the top level of your directory
$ Name your API key variable exports.apiKey
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.
## Specifications


| Specs  |
| ------------- |
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.|
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.|
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).|
|If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)|

## Technologies Used

* JS
* webpack
* ES6


## 📜 License


[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Copyright (c) 2019 **_Sabrina Mianne_ **
