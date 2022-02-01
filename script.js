function clearName() {
  if (document.getElementById('nameField').value == 'First and Last Name') {
    (document.getElementById('nameField').value = '')
  }
}
// function will remove the text "example: 212-123-1234" in the Phone Number box when clicked

function clearPhone() {
  if (document.getElementById('phoneField').value == 'example: 212-123-1234') {
    (document.getElementById('phoneField').value = '')
  }
}

function clearEmail() {
  if (document.getElementById('emailField').value == 'JohnDoe@Example.com') {
    (document.getElementById('emailField').value = '')
  }
}
// Function to bring back default text if name field is empty
function resetName() {
  if (document.getElementById('nameField').value == '') {
    (document.getElementById('nameField').value = 'First and Last Name')
  }
}

function resetPhone() {
  if (document.getElementById('phoneField').value == '') {
    (document.getElementById('phoneField').value = 'example: 212-123-1234')
  }
}


function resetEmail() {
  if (document.getElementById('emailField').value == '') {
    (document.getElementById('emailField').value = 'JohnDoe@Example.com')
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
