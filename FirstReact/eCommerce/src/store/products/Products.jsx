import React from "react";
import styles from "./products.module.css";

import{useGetAllProductsQuery} from "../../apis/ProductApi"
const Products = () => {
    const data = useGetAllProductsQuery()
    console.log(data)

    return(
        <div className={styles.product}>
            {

                data.data?.map((product) => (
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