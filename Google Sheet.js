const scriptURL = 'https://script.google.com/macros/s/AKfycbyQl-L4057aenJCYFEU0yN9idrg52V2lYgb5Iox2BN8e9Emt3tsa3djkK3k61pCuZux/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
