import {useCallback, useState, useRef} from "react";
import addUniqueId from "../../utility/uniqeids";
import usePosts from "../../hooks/usePosts";
import translations from "../../translation";
import Cart from "../cart/Cart";
import "./Carts.scss";

const Carts = ({merchantIds, pageNum, setPageNum}) => {
    const [results, setResults] = useState([]);

    // use this custom hook for fetching data
    const {isLoading, isError, error, hasNextPage} = usePosts(
        pageNum,
        merchantIds,
        setPageNum,
        setResults
    );

    // use this for infinit scroll with observer
    const intObserver = useRef();
    const lastPostRef = useCallback(
        (post) => {
            if (isLoading) return;

            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((posts) => {
                if (posts[0].isIntersecting && hasNextPage) {
                    setPageNum((prev) => prev + 1);
                }
            });
            if (post) intObserver.current.observe(post);
        },
        [isLoading, hasNextPage]
    );

    if (isError) return <p className="center">Error: {error?.message}</p>;

    // in this data we do not have uniqid for the map method need uniqid

    const content = addUniqueId(results).map((post, i) => {
        if (addUniqueId(results).length === i + 1) {
            return <Cart ref={lastPostRef} key={post.uniqid} post={post}/>;
        }
        return <Cart key={post.uniqid} post={post}/>;
    });


    return (
        <div className="product__container">
            {content}
            {isLoading && <p>{translations.isloading}</p>}
        </div>
    );
};
export default Carts;
