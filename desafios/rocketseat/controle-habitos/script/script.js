const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-17','01-18','01-19'],
    water: ['01-17','01-19'],
    workout: ['01-16','01-18','01-20']
}

nlwSetup.setData(data)
nlwSetup.load()