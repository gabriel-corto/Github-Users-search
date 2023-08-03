

 const searchElement = document.querySelector('#searchElement') 
 const form = document.querySelector('.form')

 const showResult = document.querySelector('.showresult')
 const showUserImg = document.querySelector('.showUserImg')
    

function App() {
    form.addEventListener('submit', (event) => {

        if(searchElement.value == "") {

            showResult.innerHTML = /* html */
            
            `<div class="error">
                <i class="fa-solid fa-warning"></i>
                WARNING! Input can not be empty
            </div>`

        }
        else {

            event.preventDefault()

            showResult.innerHTML = /*html*/`
                <div class="loader">
                    <span class="loading"><i class="fa-solid fa-spinner"></i></span>
                    <span>Searching user...</span>
                </div>
            `

            getUsers()
        }
    })
    
}App()

async function getUsers(){
        
    try {
        const result = await fetch(`https://api.github.com/users/${searchElement.value}`)
        const userData = await result.json()

        showResult.innerHTML = /*html */
            `
                <p>Name: <span >${userData.name}</span></p>

                <p>followers: <span>${userData.followers}</span></p>

                <p>Repositories: <span>${userData.public_repos}</span></p>
                
                <p>Location: <span>${userData.location}</span></p>
            `
        
        showUserImg.innerHTML = /*html*/
            `
                <img src="${userData.avatar_url}" alt="Github Profile Avatar">
            `
        } 
    catch(error) {
        showResult.innerHTML = /* html */
        `<div class="warning">
            <i class="fa-solid fa-warning"></i>
            Something bad, verify your internet conection !
        </div>`
    }
    
    
}