function exercise($el) {
  console.log($el);
  console.log($el.parent());
  console.log($el.closest('section'));
  console.log($el.next());
  console.log($el.prev());
  console.log($el.nextAll());
}

const $popular = $('section.popular-recipes');
const $nav = $('nav');
const $aside = $('aside');
const $form = $('form');

exercise($popular);
console.log('----------------');
exercise($nav);
console.log('----------------');
exercise($aside);
console.log('----------------');
exercise($form);
