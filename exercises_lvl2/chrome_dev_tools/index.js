function getData(){
    fetch("http://swapi.dev/api/people")
        .then(res => res.json())
        .then(res => console.log(res))
        .catch((err) => console.log(err))
}

getData()
