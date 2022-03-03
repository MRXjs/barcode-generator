const title = document.getElementById('title')
const para = document.getElementById('para')
const btnSubmit = document.getElementById('submit')

const barcodeGenarate = () => {
    const inputText = document.getElementById('inputText').value
    JsBarcode("#barcode",inputText);
}

const hideItem = () => {
    title.style.display="none"
    para.style.display="none"
    btnSubmit.style.display="none"
}

btnSubmit.addEventListener('click',()=>{
    barcodeGenarate()
    hideItem()
})

