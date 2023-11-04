const body = document.body;
const list = body.querySelector("#categories");

console.log(`Number of categories: ${list.children.length}`);
[...(list.children)].forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItemCount = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemCount}`);
})