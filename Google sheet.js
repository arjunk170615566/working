
const scriptURL = 'https://script.google.com/macros/s/AKfycbxqLzRWMEoJQIi3KzyH_CFV-ps9AgQSZFpjX9n-x_LwSvmyizmmIpthGu9Vtqs1wS0LWQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
