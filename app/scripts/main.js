const addAnimation = (target, animation = "hexagon-animation", reverseAnimation = "reverse-hexagon-animation") => {

  $(`${target}`).find('.hexagon').addClass(animation)
  $(`${target}`).find('.reverse-hexagon').addClass(reverseAnimation)
}

setTimeout( () => {
  setTimeout(addAnimation('.container-one'))
}, 1000)
setTimeout( () => {
  setTimeout(addAnimation('.container-four'))
}, 2000)
setTimeout( () => {
  setTimeout(addAnimation('.container-three'))
}, 3000)
setTimeout( () => {
  setTimeout(addAnimation('.container-two'))
}, 4000)
setTimeout( () => {
  setTimeout(addAnimation('.container-five'))
}, 5000)
console.log("done");
