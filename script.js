const showDataEl = document.getElementById('show-data')

const yearOptionEl = document.getElementById('year-option')
const categoryOptionEl = document.getElementById('category-option')

const newArr =[]
async function prizeData(){
    const res = await axios.get('https://api.nobelprize.org/v1/prize.json')
    const data = res.data.prizes
    data.map((year) => {if(year.year >= 1900 && year.year <= 2018){
        newArr.push(year)
    }})
    console.log(newArr)
    newArr.forEach((year) => {
        const option = document.createElement('option')
        option.textContent = year.year
        yearOptionEl.appendChild(option)
        if(year.year == 2018 ){
            const p = document.createElement('p')

            for(let i = 0; i < year.laureates.length; i++){
                p.textContent = year.laureates[i].firstname
                p.classList.add('text-green-500')
                showDataEl.appendChild(p)
            }
            console.log(year.laureates.firstname)
        }
    })
    newArr.forEach((category) => {
        const option = document.createElement('option')
        option.textContent = category.category
        categoryOptionEl.appendChild(option)
    })
    
}
prizeData()