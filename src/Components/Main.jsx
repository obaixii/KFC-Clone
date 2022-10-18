function Main({products}){
    
    return(
        <>
        <main>
        {
            products.map(product=>{
                return(
                    <>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.stock}</p>
                    </>
                )
            })
        }
        </main>
        </>
    )
}
export default Main