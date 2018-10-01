export async function fetchData (text, type) {
  try {
    let response = await fetch(`https://swapi.co/api/${type}/?search=${text}`)
    let data = await response.json()
    return data.results
  } catch (err) {
    console.log('ERROR!!!', err)
  }
}
