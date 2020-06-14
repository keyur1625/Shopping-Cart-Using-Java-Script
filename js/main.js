    let carts =document.querySelectorAll('.add-cart');
    
    let products=[
        {
            name: 'Pineapple cake',
            tag: 'pineapplecake',
            price:60,
            incart:0
        },
        {
            name: 'uthappizza',
            tag: 'uthappizza',
            price:160,
            incart:0
        },
        {
            name: 'Vadonut',
            tag: 'Vadonut',
            price:40,
            incart:0
        },
        {
            name: 'zuchhipakoda',
            tag: 'zuchhipakoda',
            price:70,
            incart:0
        }
        


    ];

    for(let i=0;i<carts.length; i++){
            carts[i].addEventListener('click',()=>{
                cartNumbers(products[i]);
                totalCost(products[i])
            })
        }
        function onLoadcardNUmbers(){
            let productNumbers =localStorage.getItem('cartNumbers');

            if(productNumbers){
                document.querySelector('.cart span').textContent=productNumbers;
                
            }
        }

    function cartNumbers(product){
        console.log("dishes added to cart",product);
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
        setItems(product);
            
}   
    
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems =JSON.parse(cartItems);
    // console.log("my cartItems are",cartItems)
    if(cartItems!==null){
      
       if(cartItems[product.tag] == undefined){
           cartItems= {
               ...cartItems,
               [product.tag]:product
           }
       }
        // console.log(cartItems[product.tag]);
        cartItems[product.tag].incart +=1;

    }else{
        product.incart =1;
        cartItems = {
        [product.tag]:product
        }
        
    }
    

    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
    
}
function totalCost(product){
    // console.log("the price is ",product.price);
    let cartCost = localStorage.getItem("totalCost");

    console.log("My Cost is",cartCost);
    
    if(cartCost!= null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);

    }else{
        localStorage.setItem("totalCost",product.price);
    }
}
onLoadcardNUmbers();