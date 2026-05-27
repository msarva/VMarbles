function initCards() {

    const { ScrollObserver, valueAtPercentage } = aat;

    const cards = document.querySelectorAll(".card");

    Array.from(cards).forEach((card, index) => {

        const offsetTop = 40 + index * 30;

        card.style.paddingTop = `${offsetTop}px`;

        if(index === cards.length - 1){
            return;
        }

        const toScale = 1 - (cards.length - 1 - index) * 0.08;

        const nextCard = cards[index + 1];

        const cardInner = card.querySelector(".card__inner");

        ScrollObserver.Element(nextCard, {
            offsetTop,
            offsetBottom: window.innerHeight * 0.2
        }).onScroll(({ percentageY }) => {

            cardInner.style.transform = `scale(${valueAtPercentage({
                from: 1,
                to: toScale,
                percentage: percentageY
            })})`;

            cardInner.style.filter = `brightness(${valueAtPercentage({
                from: 1,
                to: 0.75,
                percentage: percentageY
            })})`;

        });

    });

}