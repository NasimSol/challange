import React from "react";
import "./Cart.scss";
import translations from "../../translation";

const Cart = React.forwardRef(({post}, ref) => {
    const postBody = (
        <div className="product">
            <div className="product__image__container">
                <img className="product__image" alt={post.name} src={post.imageUrl}/>
            </div>
            <div className="content">
                <p className="content__title">
                    {" "}
                    {post.name?.length > 70
                        ? `${post.name.substring(0, 70)}...`
                        : post.name}
                </p>

                <p className="content__startingprice">{translations.minPriceFrom}</p>
                <div className="content__minprice">
                    <div
                         className="content__price">{post?.minPrice?.toLocaleString()}</div>
                    <div className="content__unitPrice">{translations.toman}</div>
                </div>
            </div>
        </div>
    );

    const content = ref ? (
        <article ref={ref}>{postBody}</article>
    ) : (
        <article>{postBody}</article>
    );

    return content;
});

export default Cart;
