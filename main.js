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

// let odd = document.querySelectorAll('li:nth-child(odd)')
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "green"
// }

// Manipulate the DOM or Traversing the DOM
let itemList = document.querySelector('#items')


                                /* PARENT AND CHILD START */ 
// The parentNode property returns the parent node of an element or node.
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#f4f4f4"


// The parentNode.parentNode return the parent node of a first parentNode
// console.log(itemList.parentNode.parentNode)

// The parentElement property will return parentNode element 
// console.log(itemList.parentElement)

// The ChildNodes return the nodeList of child with whitespace - not good for using 
// console.log(itemList.childNodes);

// or we can use children it will not  return any whitespace and return HTML collection 
//console.log(itemList.children);

// The firstChild return the nodeList first child along with whitespace - not good for using 
//console.log(itemList.firstChild);

// or we can use firstElementChild it will not  return any whitespace and return HTML collection 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1"

// The lastChild return the nodeList last child along with whitespace - not good for using 
//console.log(itemList.lastChild);

// or we can use lastElementChild it will not  return any whitespace and return HTML collection 
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello 1"

                                /* PARENT AND CHILD END */ 


                                 /* FOR SIBLINGS START */ 

// The nextSibling return white spaces if you are using something like line break and spaces - same as firstChild and lastChild
//console.log(itemList.nextSibling)

// or we can use nextElementSibling it will not  return any whitespace and return HTML collection if html has next sibling then it'll give us otherwise it'' gives null 
// console.log(itemList.nextElementSibling);

// The previousSibling return  previous sibling along with whitespace  white spaces if you are using something like line break and spaces - same as firstChild and lastChild
//console.log(itemList.previousSibling)

// or we can use previousElementSibling it will not  return previous sibling and return HTML collection if html has prev sibling then it'll give us otherwise it'' gives null 
// console.log(itemList.previousElementSibling);

                                 /* FOR SIBLINGS END */ 

                                 /* CREATING ELEMENTS AND INSERTING ELEMENT */ 

// create a div 
let  newDiv = document.createElement('div')

// add class
newDiv.className = "hello"

// add id
newDiv.id = "hello1"

// add attr
newDiv.setAttribute('title', 'hello div')

// create  text  node 
let newDivTxt = document.createTextNode("hello World")

//add text to div
newDiv.appendChild(newDivTxt)

// add font size
newDiv.style.fontSize = "30px"
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
container.insertBefore(newDiv, h1)

console.log(newDiv);

// add HEllo word before Item 1
let itemDiv = document.createElement('div')
let itemDivText = document.createTextNode("Hello word")
itemDiv.appendChild(itemDivText)
let item = document.querySelector('#items')
item.insertBefore(itemDiv, item.firstElementChild)