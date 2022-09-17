import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//          Carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//                 Style
import styles from "../components/css/Carousel.module.scss";
//                 Context
import { CryptoContext } from "../contexts/CryptoContextProvider";
//                 Api
import { getTrendingCrypto } from "../services/Api";

const Carousel = () => {
  const { currency, symbolText } = useContext(CryptoContext);
  const [trending, setTrending] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setTrending(await getTrendingCrypto(currency));
    };
    fetchApi();
  }, [currency]);

  const items = trending?.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link className={styles.carouselItem} to={`/${coin.id}`}>
        <img src={coin.image} alt={coin.name} />
        <span>
          {coin.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
            }}
          >
            {profit && "+"}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontWeight: "700" }}>
          {symbolText} {coin.current_price.toFixed(2)}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

  return (
    <div className={styles.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
