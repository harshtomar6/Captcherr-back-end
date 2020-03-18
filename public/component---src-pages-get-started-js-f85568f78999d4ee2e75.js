(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{S9uz:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var l=t("q1tI"),c=t.n(l),n=t("Bl7J"),r=t("vrFN"),s=t("7vrA"),d=t("Wbzz"),m=t("8qja");function i(){return c.a.createElement(n.a,null,c.a.createElement(r.a,{title:"Get Started"}),c.a.createElement(s.a,{className:"p-5"},c.a.createElement("h2",null," Get Started"),c.a.createElement("p",{className:"lead"},"Integrate Captcha to your website in less than 5 minutes"),c.a.createElement("br",null),c.a.createElement("h5",null,"1. Signup and get API Keys"),c.a.createElement("p",{className:"ml-3"},"You need to create an account to get an API key.",c.a.createElement(d.Link,{to:"/signup"}," Click here")," to create an account"),c.a.createElement("br",null),c.a.createElement("h5",null,"2. Add Captcha widget"),c.a.createElement("p",{className:"ml-3 mb-0"},"Paste the following code before the closing body tag to request for a captcha"),c.a.createElement("pre",{className:"p-2 bg-dark ml-3"},c.a.createElement("code",{className:"ml-3 text-light"},'<script src="'+m.a+'/src/scripts/catpcha.js"><\/script>')),c.a.createElement("p",{className:"ml-3"},"When this script is loaded, a variable ",c.a.createElement("code",null,"captchaId")," is added to ",c.a.createElement("code",null,"window")," object. You need this variable later to validate the captcha."),c.a.createElement("p",{className:"mt-2 ml-3 mb-0"},"To render Captcha, Add the following code in your HTML page"),c.a.createElement("pre",{className:"p-2 bg-dark ml-3"},c.a.createElement("code",{className:"text-light"},'<div id="captcha-container" data-apikey="YOUR_API_KEY"></div>')),c.a.createElement("small",{className:"ml-3"},"* YOUR_API_KEY should be replaced by actual API Key "),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h5",null,"3. Validate Captcha"),c.a.createElement("p",{className:"ml-3"},"Validate Captcha by sending a ",c.a.createElement("code",null,"POST")," request to"," ",c.a.createElement("code",null,m.a+"/captcha/validate"),". ",c.a.createElement("br",null),"Send following params as Request payload"),c.a.createElement("pre",{className:"p-2 ml-3 bg-dark"},c.a.createElement("code",{className:"text-light"},'\n            {\n              "captchaId": window.captchaId,\n              "key": "YOUR_API_KEY",\n              "text": "TEXT_FROM_USER_INPUT"\n            }')),c.a.createElement("p",{className:"ml-3"},"The API will respond as"),c.a.createElement("pre",{className:"p-2 ml-3 bg-dark"},c.a.createElement("code",{className:"text-light"},'\n            {\n              "err": null,\n              "data": {\n                "_id": "5e724a615f511037840344af",\n                "solved": true,\n                "user": "5e6f42d5660ca41440d4836e",\n                "createdAt": "2020-03-18T16:20:49.552Z",\n                "validated": true\n              }\n            }\n            ')),c.a.createElement("p",{className:"ml-3"},"If the Captcha is validated successfully, ",c.a.createElement("code",null,"validated")," field will be true. Don't confuse ",c.a.createElement("code",null,"solved")," with ",c.a.createElement("code",null,"validated")," field.",c.a.createElement("code",null," solved")," field will always be true. It implies that an attempt made to solve this captcha.")))}}}]);
//# sourceMappingURL=component---src-pages-get-started-js-f85568f78999d4ee2e75.js.map