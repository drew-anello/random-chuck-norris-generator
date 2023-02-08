const request = new Request('https://api.chucknorris.io/jokes/random')
const btn = document.getElementById('chuckTime')
const div = document.getElementById('display')

btn.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(e.target)
  fetch(request)
    .then(response => response.json())
    .then(data => {
      if (div.firstChild) {
        div.removeChild(div.firstChild)
      }
      const joke = document.createTextNode(data.value)
      div.appendChild(joke)
    })
})
