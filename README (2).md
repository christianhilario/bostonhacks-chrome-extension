# Chrome Extension Workshop — BostonHacks 2026

A currency converter that lives in your Chrome toolbar. Type an amount in US dollars, pick a currency, and get a live exchange rate.

It uses the [Frankfurter API](https://frankfurter.dev/), which is free and needs no account or API key.

## Files

| File | What it does |
| --- | --- |
| `manifest.json` | The blueprint. Tells Chrome the extension's name, which page to open, and which website it can talk to |
| `index.html` | The popup you see: input box, dropdown, button, result |
| `exchange.js` | Grabs what you typed, calls the API, and shows the result (with error handling) |

## Run it

1. Download or clone this repo
2. Go to `chrome://extensions`
3. Turn on **Developer mode** (top right)
4. Click **Load unpacked** and pick this folder (the one with `manifest.json` in it)
5. Click the puzzle piece icon, pin the extension, and click it

Changed the code? Hit the reload arrow on the extension's card in `chrome://extensions`, then reopen the popup.

## Stuck?

| What you see | How to fix it |
| --- | --- |
| "Manifest file is missing or unreadable" | You picked the wrong folder, or `manifest.json` has a typo (missing comma, extra comma at the end) |
| Nothing happens when you click Convert | Right-click the popup → Inspect → Console to see the error |
| "Cannot read properties of null" | An id in `exchange.js` doesn't match `index.html`, or the code is outside `DOMContentLoaded` |
| "Refused to execute inline script" | Move your JavaScript out of `index.html` and into `exchange.js` |
| "Couldn't get the rate. Try again." | Check your Wi-Fi, the `apiURL` spelling, and `host_permissions` in the manifest |
| Your changes don't show up | Hit reload on `chrome://extensions`, then reopen the popup |

## Stretch goals

- Add more currencies: just add more `<option>`s to the dropdown
- Add a second dropdown so you can convert *from* any currency, not just USD (swap `usd` in the URL for its value)
- Show the date the rate is from
- Style the popup with CSS
- Add an `icon.png` and a `"default_icon": "icon.png"` line inside `action` in the manifest
