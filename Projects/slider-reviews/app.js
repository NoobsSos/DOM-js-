// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Nazar Mraka',
    job: 'Backend Developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I have to write some text here but i don`t know what. Next slides will be genereted with ChatGPT",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')


let current = 0

window.addEventListener('DOMContentLoaded', function() {
  const item = reviews[current]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
})

const btn_prev = document.querySelector('.prev-btn')
const btn_next = document.querySelector('.next-btn')

const nextPerson = () => {
  current += 1
  const item = reviews[current]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

const prevPerson = () => {
  if (current >= 0){
    current -= 1
    const item = reviews[current]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
  } else return
}

btn_prev.addEventListener('click', prevPerson)
btn_next.addEventListener('click', nextPerson)


