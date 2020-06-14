    let carts =document.querySelectorAll('.add-cart');

    for(let i=0;i<carts.length; i++){
            carts[i].addEventListener('click',()=>{
                cartNumbers();
          })
        }
        function onLoadcardNUmbers(){
            let productNumbers =localStorage.getItem('cartNumbers');

            if(productNumbers){
                document.querySelector('.cart span').textContent=productNumbers;
                
            }
        }

    function cartNumbers(){
        let productNumbers =localStorage.getItem('cartNumbers');
        // console.log(productNumbers);
        productNumbers =parseInt(productNumbers);
        if(productNumbers){
            localStorage.setItem('cartNumbers',productNumbers+1);
            document.querySelector('.cart span').textContent=productNumbers+ 1;

        }else{
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.cart span').textContent=1;
        }
            
}    
onLoadcardNUmbers();