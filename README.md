# Polymath AI Chrome Extension

This is a simple Chrome extension built with Next.js and Firebase to save and view URLs.

## Features

- Save the current page URL with a single click.
- View all saved URLs.

## Technologies

- Next.js
- Firebase
- Manifest V3

## How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/polymath-ai-chrome-extension.git
    cd polymath-ai-chrome-extension
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Load the extension in Chrome:
    - Go to `chrome://extensions/`
    - Enable "Developer mode"
    - Click "Load unpacked" and select the `polymath-ai-chrome-extension/public` directory

5. Open the extension and start saving URLs!

## Assumptions

- Firebase Firestore is used for storing URLs.
- Users need to manually enter the Firebase configuration in `firebaseConfig.js`.

## Demo Video

[Link to demo video](https://your-video-link.com)
