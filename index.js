const calculatorItems = document.querySelectorAll('.calculator__item');
const rates = {
     RUB: 1,
     USD: 60,
     EUR: 70,
     BTC: 1000,
     ETH: 500,
}
const selectCurrencies = ['RUB','USD'];
const values = [0, 0]
const reversIdx = [1, 0]


calculatorItems.forEach((itemBlock, thisIdx) =>{

    const selectbox = itemBlock.querySelector('.selectbox')
    const selectboxSelected = itemBlock.querySelector('.selectbox__selected')
    const input = itemBlock.querySelector('.calculator__input')
    const otherIdx = reversIdx[thisIdx]

    //Выпадающий список

    selectboxSelected.onclick = () => {

        if(!selectbox.classList.contains('selectbox__opened')) {
            const allSelectboxes = document.querySelectorAll('.selectbox')
            allSelectboxes.forEach(item => {
                item.classList.remove('selectbox__opened')
            })
            selectbox.classList.add('selectbox__opened')
        }else{
          selectbox.classList.remove('selectbox__opened')
        }
    }

     //Функция вабора валют 
     selectbox.onclick = (event) => {
        const target = event.target
        
        if(
            target.tagName === 'LI' &&
            !target.classList.contains('active')
            ) {
                const currencyName = target.innerText
                selectbox.classList.remove('selectbox__opened')
                selectbox.querySelector('li.active').classList.remove('active')
                target.classList.add('active')
                selectboxSelected.querySelector('span').innerText = currencyName
                selectCurrencies[thisIdx] = currencyName
                currencyCalculate()
                }
            }


    const reg = /^\d+$/

    input.oninput = () => {
        const value = Number(input.value)

        if(reg.test(value) || value === ''){

            values[thisIdx] = value
            currencyCalculate()

        }else{
            input.value = values[thisIdx]
        }
    }
     function currencyCalculate(){
        
        const value = values[thisIdx] * rates[selectCurrencies[thisIdx]]
        const result = value / rates[selectCurrencies[otherIdx]]
        values[otherIdx] = result
        calculatorItems[otherIdx].querySelector('.calculator__input').value = result
    }
})