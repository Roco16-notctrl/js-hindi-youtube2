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