export const NoProductsError = () => {
    return (
        <section className="section">

            <article className="message is-warning">
                <div className="message-header">
                    <p>Hmm. Something isn't right</p>
                </div>
                <div className="message-body">
                    At this time, there are no products to display. Try refreshing the page.
                </div>
            </article>
        </section>
    );
};
