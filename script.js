const url = 'https://api.chucknorris.io/jokes/random'

const btn = document.getElementById('chuckTime')
const div = document.getElementById('display')

btn.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(e.target)
})
