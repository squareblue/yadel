# Yadel

_Create elements and do other DOM things._

Input:

```js
// Instantiate a Yadel <p> element
const p1 = ya('p#status.ok', {
  style: 'color:cornflowerblue;'
}, 'Everything is A-OK.');

// Conditionally modify the instance
if (!OK) {
  p1.style({ color: 'red' });
  p1.removeClass('ok').addClass('danger');
  p1.text('DANGER! NOT OK!');
}

// Render to the specified target (existing or new element)
p1.renderTo(document.body);
```

Output:

_(if ok)_
```html
<p id="status" class="ok" style="color:cornflowerblue;">
    Everything is A-OK.
</p>
```

_(if NOT ok)_
```html
<p id="status" class="danger" style="color:red;">
    DANGER! NOT OK!
</p>
```
