const navEl = document.querySelectorAll('.item');
console.log('Number of categories:'+ navEl.length);

navEl.forEach(function (element) {
    const title = element.firstElementChild.textContent;
    const sum = element.lastElementChild.children.length;

    console.log('Category:', title);
    console.log('Elements:', sum);
})