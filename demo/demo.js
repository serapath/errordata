const errordata = require('..')

const ed = errordata()

console.log(ed)

if (typeof window) document.body.innerHTML = `<xmp>${JSON.stringify(ed, 0, 2)}</xmp>`
