import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//          Carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//                 Style
import styles from  "./Carousel.module.scss";
//                 Context
import { CryptoContext } from "../../contexts/CryptoContextProvider";
//                 Api
import { getTrendingCrypto } from "../../services/Api";

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
      <Link to={`/${coin.id}`} className={styles.carouselItem}>
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
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={styles.carousel}>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={responsive}
      />
    </div>
  );
};

export default Carousel;
