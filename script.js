
async function readPost() {
    let postArea = document.querySelector('.bodyBlog');
    postArea.innerHTML = 'Carregando';
    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

        if (json.length > 0) { // verificar se não veio vazio
            postArea.innerHTML= "";

            for( let i in json) { // loop no json para pegar os title e body
                let posthtml = `<div><h2> ${json[i].title}</h2></br> ${json[i].body}</div></br></br>`;
                postArea.innerHTML += posthtml;
            }
            
        }else {
            postArea.innerHTML = "nenhum post para exibir."
        }
    }
    
    

readPost(); // assim que a página é carregada