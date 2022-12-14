function renderVagas(empregos){
    const list = document.querySelector('.list__container')
    console.log(list)
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

    button.classList.add('list__vagas--button')
    button.innerText = element.selectJob


    container.append(title, enterprise, city, descrition, modalities, button)

    return container

}
renderVagas(jobsData)


