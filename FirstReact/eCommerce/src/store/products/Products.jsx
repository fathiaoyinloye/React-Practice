import React from "react";
import{useGetAllProductsQuery} from "../../apis/ProductApi"
const Products = () => {
    const data = useGetAllProductsQuery()
    console.log(data)

    return(
        <div>
            {

                data?.data.map((product) => (
                    <div key={product.id}> 
                        <img src={product.image} alt="" />
                        <span> {product.description}</span>
                    </div>
                )
            )}



        </div>
    )
}


export default Products