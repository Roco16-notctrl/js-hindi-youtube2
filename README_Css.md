# This is quick notes for css in web developement.

>Target an element if it has more than one class applied.
you can apply mutiple classes to an element and target them individually, or only select the element when all the classes in the selectors are present.

```HTML
<div class="notebox">This is an informational note.</div>

<div class="notebox warning">This note shows a warning.</div>

<div class="notebox danger">This note shows danger!</div>

<div class="danger">
  This won't get styled — it also needs to have the notebox class
</div>

<style>
    body {
  font-family: sans-serif;
}

.notebox {
  border: 4px solid #666;
  padding: 0.5em;
  margin: 0.5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}

</style>

```

> The universal selector
- The universal selector is indicated by an asterisk(*).It selects everything in the document.If * is chained using a descendant combinator, it selects everything inside that ancestor element.For example, p * selects all the nested elements inside the <p> element.

>For example, if we wanted to select any descendant elements of an <article> elements that are the first child of their parent, including direct children, and make them bold, we could use the :first-child psuedo-class.

```CSS
article :first-child {
  font-weight: bold;
}
}
```

However, this selector could be confused with article:first-chilld, which will select any <article> element that is the first child of another element.
>To avoid this confusion, we can add the universal selector to the :first-child pseudo-class, so it is more obvious what the selector is doing. It is selecting any element which is the first-child of an <article> element, or the first-child of any descendant element of <article>:

```CSS
article *:first-child {
  font-weight: bold;
}

```

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors</title>
 
<style>
        /* Element Selector  */
        div{
            /* background-color: red; */
        }

        /* Class Selector  */
        .red{
            background-color: red;
        }

        /* Id Selector */
        #green{
            background-color: green;
        }

        /* Child Selectors  */
        div > p {
            color: blue;
            background-color: brown;
        }

        /* Descendant Selector  */
        div p {
            color: blue;
            background-color: brown;
        }

        /* Universal Selector */
        * {
            margin:0;
            padding: 0;
        }

        /* Pseudo Selector  */
        a:visited{
            color: yellow
        }

        a:link {
            color: green;
        }

        a:active{
            background-color: red;
        }

        a:hover{
            background-color: yellow;
        }


        p:first-child{
            background-color: aqua;
        }

    </style>
</head>
<body>
    <main class="one">
        <p>I am first</p>
        <p>I am second</p>
    </main>
    <div class="red">
        I am a div
        <article>

            <p>I am a para inside div</p>
        </article>
    </div>

    <div id="green">
        I am another div
    </div>
    <a href="https://www.google.com">Go to Google</a>
    <a href="https://www.facebook2.com">Go to Facebook</a>
</body>
</html>
```


# Today we will know about content,padding,border and margin in css.

```HTML 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Boxmodel</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }

        .box {
            background-color: aqua;
        }
        .box1{
            color: yellow;
            padding: 10px;
            margin:35px;
            border: 2px solid blue;
            height: 200px;
            box-sizing: border-box;
        }
        .box2{
            color:red;
            padding: 10px;
            margin:25px;
            border: 2px solid black;
            height: 200px;
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <div class="box box1">I am a box</div>
    <div class="box box2">I am another box</div>
</body>

</html>
```
>Note:margin collapsing is a concept in css in which when two consecutive boxes have margin then greater margin in css will be applied between boxes.


# About css fonts and texts.

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fonts</title> 
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Poppins:wght@300&display=swap');
        h1 {
            font-family: 'Poppins', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
        }

        p {
            /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
            font-family: 'Baloo Bhai 2', sans-serif;
            font-size: 20px; 
            /* font-style:italic;
            font-weight: 500;  */
            
        }
        h2{
            text-align: center;
            text-transform: uppercase;
            text-decoration: underline;
            text-decoration-color: blue;
            /* text-decoration-style: dotted; */
            text-decoration-thickness: 7px ;
            /* text-indent: 45px; */
        }
        .lorem{
            border: 2px solid red;
            width: 145px;
            word-break: break-all;
            /* text-overflow: ellipsis;
            overflow: hidden; */

        }
    </style>
</head>

<body>
    <div>
        <!-- https://codepen.io/web-dot-dev/pen/yLojraG -->
        <h1>Fonts</h1>
        <h2>about Fonts</h2>
        <p>This is a video on fonts</p>
        <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi accusamus quas itaque molestias dolorem quisquam quod, adipisci maxime dolore, mollitia illo officia deserunt voluptatem iure qui. Fugit aliquam possimus aperiam commodi eum amet veniam at vel. Necessitatibus asperiores eos amet laborum dolor, ipsum porro!</p>
    </div>
</body>

</html>
```





```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Style the first paragraph inside each div */
        p:first-child {
            background-color: yellow;
            color: red;
        }

        /* Style all paragraphs except the first child */
        div p:not(:first-child) {
            background-color: blue;
            color: white;
        }
    </style>
</head>
<body>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo consectetur dicta fuga ea at vitae suscipit, repellendus illum deleniti laboriosam ipsa distinctio.</p>
        <p>I am another para</p>
        <p>I am also another para</p>
    </div>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo consectetur dicta fuga ea at vitae suscipit, repellendus illum deleniti laboriosam ipsa distinctio.</p>
        <p>I am another para</p>
        <p>I am also another para</p>
    </div>
</body>
</html>
```