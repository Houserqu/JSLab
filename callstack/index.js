function ceo() {
  console.log('ceo')

  cto()
}

function cto() {
  console.log('cto')

  dev()
}

function dev() {
  console.log('dev')
  throw new Error('dev error')
}

ceo();