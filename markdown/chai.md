# heading 1

This is a paragraph about heading.
and how to make chai. lorem ipsum

---
## heading 2
### heading 3
#### heading 4

**mySirg**
*mysirg*
>this is a blockquote

1.this is a list
2.this is a list 2
3.this is a list 3
4.this is a list 4

- unordered list
- secondunrodered list
- threeOrdered list


`#include<stdio.h>`

```javascript
console.log("hello world")
document.getElementById('map')
```

[facebook](https://www.facebook.com) 

![facebook](https://www.facebook.com) 

- [x] this is a task   //This is a github flavour
- [ ] this is a task

<!-- :joy: -->  //This is a github enhanced flavour.
😁
<!-- H~2~0 -->
| syntax | description | test |
| --- | --- | --- |
| sumi | Aaditya | Eva |
|Ambani | Adani | Gukesh |
|mia-khalifa |sunnyleone |Eva Adam |


<!-- ![alt text]() -->


![subscribe](https://img.shields.io/github/stars/:org)  //shield.io



[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code
## project 1
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

```javascript   
// console.log("Aaditya")
const buttons=document.querySelectorAll('.button')
console.log(buttons)
const body=document.querySelector('body')

buttons.forEach(function(btn){
  console.log(btn);
  btn.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='purple'){
      body.style.backgroundColor=e.target.id
    }
  })
});

```


