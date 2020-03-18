# Captcherr

This is the back-end repository of Captcherr

Captcherr is a captcha protection service for websites. You can add captcha protection to your website in less than 5 minutes.

[View LIVE App](https://captcherr.herokuapp.com)<br/>
[View LIVE Demo](https://captcherr.herokuapp.com/src/example.html)

## How to add Captcha to existing webpage

### Create Captcherr Account 
Signup on Captcherr to get an API Key. [Click here](https://captcherr.herokuapp.com/signup) to create an account now.

### Add Captcha Widget
Paste the following code just before the end of body tag.
```html
<script src="https://captcherr.herokuapp.com/src/scripts/catpcha.js"></script>
```
When this script is loaded, a `captchaId` variable will be added to `window` object. This variable is needed later to validate captcha.

### Validate Captcha
Send a `POST` request to `https://captcherr.herokuapp.com/captcha/validate` with following params as request payload
```json
{
  "captchaId": window.captchaId,
  "key": "YOUR_API_KEY",
  "text": "TEXT_FROM_USER_INPUT"
}
```
The API will respond as
```json
{
  "err": null,
  "data": {
    "_id": "5e724a615f511037840344af",
    "solved": true,
    "user": "5e6f42d5660ca41440d4836e",
    "createdAt": "2020-03-18T16:20:49.552Z",
    "validated": true
  }
}
```

If the Captcha is validated successfully, `validated` field will be true.<br/>
`solved` field will always be true. It implies that an attempt made to solve this captcha.

