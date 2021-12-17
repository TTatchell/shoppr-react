export const FeaturedProduct = (props) => {
    return (
        <div>
            <section className="section">
                <p className="subtitle">You might like:</p>
                <br></br>

                <article className="message is-info">
                    <div className="message-header">
                        <p>{props.featuredProduct.list.name}</p>
                    </div>
                    <div className="message-body">
                <img src={props.featuredProduct.list.image_url} alt="Featured"></img>
                        {props.featuredProduct.list.description} Priced only at <strong>${props.featuredProduct.list.price}</strong>, it's set to sell quickly! Grab yours now!
                    </div>
                </article>
            </section>
        </div>
    );
};
