const btn = document.querySelector('#submitBtn')
const input = document.querySelector('#input')

const fizzbuzz = (num) => {
  let arr = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push(`${i} = FizzBuzz`)
    } else if (i % 3 === 0) {
      arr.push(`${i} = Fizz`)
    } else if (i % 5 === 0) {
      arr.push(`${i} = Buzz`)
    } else {
      arr.push(`${i}`)
    }
  } 
 return arr;
}

const updateDisplay = (e) => {
  e.preventDefault()
  const inputValue = input.value
  const userInput = document.querySelector('#userInput')
  userInput.textContent = inputValue
  const arr = fizzbuzz(inputValue)
  let output = document.querySelector('#output')
  arr.forEach(element => {
    let h3Element = document.createElement('h3')
    h3Element.textContent = element
    output.appendChild(h3Element)
  })
}

btn.addEventListener('click', updateDisplay)