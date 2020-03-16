
// Request Captcha from server
async function getCaptcha(key){
  try {
    const resObj = await fetch('/captcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key })
    });
    const res = await resObj.json();
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

function renderCaptcha(svg) {
  var container = document.getElementById('captcha-container');
  container.innerHTML = svg;
  
  // var form = document.createElement('form');
  // var input = document.createElement('input');
  // var submit = document.createElement('input');

  // input.setAttribute('type', 'text');
  // input.setAttribute('placeholder', 'Enter text in the image shown above');
  // form.appendChild(input);

  // submit.setAttribute('type', 'submit');
  // submit.setAttribute('value', 'submit');
  // form.appendChild(submit)

  // container.appendChild(form);
}

function init(){
  var container = document.getElementById('captcha-container');
  container.style.backgroundColor = '#f1f2f3';
  container.style.padding = '10px 20px';
}

window.onload = async function(){
  // this.init()
  let apiKey = document.getElementById('captcha-container').getAttribute('data-apikey');
  let captcha = await getCaptcha(apiKey);
  renderCaptcha(captcha.svg);
  window.captchaId = captcha._id;
}