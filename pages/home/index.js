
function newLocalStorage(array) {   
    const newArrayJson = JSON.stringify(array)
    localStorage.setItem("jobsCart", newArrayJson);
}

function renderVagas(empregos){
    const list = document.querySelector('.list__container')

    empregos.forEach(element => {
        const card = createCard(element)
        list.appendChild(card)
        
    });

}


function createCard(element){
    const container = document.createElement('li')
    const title = document.createElement('h2')
    const enterprise = document.createElement('span')
    const city = document.createElement('span')
    const descrition = document.createElement('p')
    const modalities = document.createElement('a')
    const button = document.createElement('button')


    container.classList.add('list__vagas')

    title.classList.add('list__vagas--title')
    title.innerText = element.title

    enterprise.classList.add('list__vagas--enterprise')
    enterprise.innerText = element.enterprise

    city.classList.add('list__vagas--city')
    city.innerText = element.location

    descrition.classList.add('list__vagas--descrition')
    descrition.innerText = element.descrition

    modalities.classList.add('list__vagas--modalities')
    modalities.innerText = element.modalities

    newLocalStorage(cart)

    button.classList.add('list__vagas--button')
    button.innerText = element.selectJob
    button.dataset.id = element.id


    container.append(title, enterprise, city, descrition, modalities, button)

    return container

}
renderVagas(jobsData)
newLocalStorage(cart)


function renderSelectJob(array){
    const cartList = document.querySelector('.list__cart__container')
    cartList.innerHTML = ''

    if(cart.length <= 0 ){
        const empetyCart = createEmptyCart()

        cartList.appendChild(empetyCart)
    } else{
        array.forEach(job => {
            const card = creatCartJob(job)
        
            cartList.appendChild(card)
        
        }) 
    }
    removeCart(array)
}


function createEmptyCart(){
    const container = document.createElement('li')
    const title = document.createElement('h2')
    const message = document.createElement('p')
    

    container.classList.add('cart__item--empty')
    
    title.innerText = 'Carrinho Vazio'
    message.innerText =  'selecione um emprego'

    container.append(title, message)
    return container
}

function creatCartJob(element){
    const container = document.createElement('li')
    const cartJob = document.createElement('div')
    const titleCart = document.createElement('h2')
    const enterpriseCart = document.createElement('span')
    const cityCart = document.createElement('span')
    const button = document.createElement('button')

    container.classList.add('cart__job')

    cartJob.classList.add('cart__job--work')
    titleCart.innerText = element.title
    enterpriseCart.innerText = element.enterprise
    cityCart.innerText = element.location

    newLocalStorage(cart)

    button.classList.add('cart__button--remove')
    button.dataset.cartId = element.cartId
    

    cartJob.append(titleCart, enterpriseCart, cityCart, button)
    container.append(cartJob)

    return container

}

function addToCart(){
    const buttons = document.querySelectorAll('.list__vagas--button')

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const elementFound = jobsData.find(element => {
                return element.id == Number(event.target.dataset.id)
            })

            const elementToSelect = {
                ... elementFound,
                cartId: cart.length + 1
            }
            console.log(elementFound)

            cart.push(elementToSelect)

            renderSelectJob(cart)
        })
    })
}

function removeCart(array){
    const removeBtns = document.querySelectorAll('.cart__button--remove')

    removeBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const jobInCart = array.find(job => {
                return job.cartId === Number(event.target.dataset.cartId)
            })

            const jobIndex = array.indexOf(jobInCart)

            array.splice(jobIndex, 1)

            renderSelectJob(array)
            console.log('click')
        })
    })

}

addToCart()
renderSelectJob(cart)
newLocalStorage(cart)


