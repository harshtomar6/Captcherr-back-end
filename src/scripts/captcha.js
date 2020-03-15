
// Request Captcha from server
async function getCaptcha(){
  try {
    const resObj = await fetch('/captcha', {
      method: 'POST'
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
  let captcha = await getCaptcha();
  renderCaptcha(captcha.svg);
  window.captchaId = captcha._id;
}