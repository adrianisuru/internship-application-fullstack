const VARIANTS_URL = 'https://cfw-takehome.developers.workers.dev/api/variants'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    return await fetch(VARIANTS_URL).then(response => { 
        return response.json().then(obj => {
            let variants = obj.variants
            let idx = Math.floor(Math.random() * variants.length)
            let variant = variants[idx]
            return fetch(variant)
        })
    }).catch(e => {
        console.log(e)
    })
}
