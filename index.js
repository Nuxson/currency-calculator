const calculatorItems = document.querySelectorAll('.calculator__item');
const currencies = {
     RUB: 1,
     USD: 100,
     EUR: 150,
     BTC: 0.00001,
     ETH: 0.00005
}
const selectCurrency = ['RUB','USD'];

calculatorItems.forEach((itemBlock, calculatorItemIdx) =>{


    const selectbox = itemBlock.querySelector('.selectbox')
    const selectboxSelected = itemBlock.querySelector('.selectbox__selected')

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
                selectCurrency[calculatorItemIdx] = currencyName
                }
            }
     
})