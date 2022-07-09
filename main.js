// let title = document.getElementById('main-header')
// let item = document.getElementsByClassName('list-group-item')
// title.style.borderBottom = "3px solid black"
// item[1].style.fontWeight = "bold"
// item[2].style.background = "green"
// for(let i=0; i<item.length; i++)
//  {
//     item[i].style.fontWeight = 'bold'
//  }


// let li = document.getElementsByTagName('li')
// li[1].style.fontWeight = "bold"
// li[2].style.background = "green"
// for(let i=0; i<li.length; i++)
//  {
//     li[i].style.fontWeight = 'bold'
//  }

 //QUERYSELECTOR AND QUERYSELECTORALL

//querySelector
//  let li = document.querySelector('.list-group-item:nth-child(2)')
//  li.style.background = "green"
//  let thirdLi = document.querySelector('.list-group-item:nth-child(3)')
//  thirdLi.style.display = 'none'

//querySelectorAll

// let li = document.querySelectorAll('li')
// li[1].style.background = "green"

let odd = document.querySelectorAll('li:nth-child(odd)')
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "green"
}

