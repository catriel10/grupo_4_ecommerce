componentDidMount(){
    fetch("https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=ghttps://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rat ing=g")
     .then(results => {response.json})
     .then(data => {this.setState({gif: data.data.image_url})})
     .catch(e => {console.log(e)})
     }
    