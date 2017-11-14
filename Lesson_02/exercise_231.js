const $a = $("h1");
console.log($a, $a.html(), $a.text());

const $b = $("aside h2");
console.log($b, $b.html(), $b.text());

const $c = $("aside section:last-child p");
console.log($c, $c.html(), $c.text());

const $d = $("fieldset:last-child");
console.log($d, $d.html(), $d.text());

const $e = $("ul li:nth-last-child(2n)");
console.log($e, $e.html(), $e.text());

const $f = $("input:checked");
console.log($f, $f.html(), $f.html());
