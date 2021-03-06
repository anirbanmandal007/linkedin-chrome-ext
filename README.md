# React Chrome Extension for fetching Linkedin public data

## Features

- Used ReactJs to write chrome extension
- Injecting extension to host page as content script
- Utilized the Chrome messaging API
- Isolated extension CSS using Iframe
- Fetched public data from Linkedin and show it in sidebar

## Installation
>Make sure you have latest **NodeJs** version installed

Clone repo

```
git clone https://github.com/anirbanmandal007/linkedin-chrome-ext.git
```
Go to `chrome-extension-react` directory run

```
npm install
```
Now build the extension using
```
npm run build
```
You will see a `build` folder generated inside `[PROJECT_HOME]`

## Adding React app extension to Chrome

In Chrome browser, go to chrome://extensions page and switch on developer mode. This enables the ability to locally install a Chrome extension.


Now click on the `LOAD UNPACKED` and browse to `[PROJECT_HOME]\build` ,This will install the React app as a Chrome extension.

Now, visit any Linkedin profile and click the recently added chrome extension icon. It will fetch some public data from linkedin and show in the right panel.


## License

The repo is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
