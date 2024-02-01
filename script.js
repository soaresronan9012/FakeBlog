
async function readPost() {
    let postArea = document.querySelector('.bodyBlog');
    postArea.innerHTML = 'Carregando';
    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json(); // transforma a resposta em um json

        if (json.length > 0) { // verificar se não veio vazio
            postArea.innerHTML= "";

            for( let i in json) { // loop no json para pegar os title e body
                let posthtml = `<div><h2> ${json[i].title}</h2></br> ${json[i].body}</div></br></br>`; // cada loop imprime esse valor formatado
                postArea.innerHTML += posthtml;
            }
            
        }else {
            postArea.innerHTML = "nenhum post para exibir."
        }
    }

    

    document.querySelector('#btn').addEventListener('click', ()=>{
        let title = document.querySelector('#title').value;
        let body = document.querySelector('#corpBlog').value;
            if ( title && body) {
                 addNewPost (title, body);
            } 
            else {
                alert("preencha os campos")
                 };
    });


    readPost(); // assim que a página é carregada


    async function addNewPost( title, body){ // requisição POST com os dados do campo TITLE E BODY
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'Post', // METHOD passado
            headers: {
                'Content-Type': 'application/json' // refere-se a um cabeçalho HTTP comumente usado para indicar o tipo de conteúdo que está sendo enviado em uma solicitação ou resposta HTTP. Neste caso específico, o valor 'application/json' indica que o conteúdo está no formato JSON.
            },
            body: JSON.stringify({ //A função JSON.stringify em JavaScript é usada para converter um objeto JavaScript em uma string de texto JSON.
                title: title,
                body: body,
                userId:2
            })
        });

        document.querySelector('#title').value = ''; // limpa os campos
        document.querySelector('#corpBlog').value = '';

        readPost(); // chama a função de leitura dos posts novamente


    }

    
    

