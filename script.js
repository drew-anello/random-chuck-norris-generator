const request = new Request('https://api.chucknorris.io/jokes/random')
const btn = document.getElementById('chuckTime')
const div = document.getElementById('display')

btn.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(e.target)
  fetch(request)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
})
