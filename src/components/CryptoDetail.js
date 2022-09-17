import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//                 config
import { chartDays } from "../config/data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//            chartjs
import { Line } from "react-chartjs-2";

//                 Style
import styles from "./css/CryptoDetail.module.scss";

//                                          Api
import { getDetailCrypto, getHistoricalChart } from "../services/Api";

//                                    Helper
import { shortenDes } from "../helper/function";
import HTMLReactParser from "html-react-parser";

//                  Context
import { CryptoContext } from "../contexts/CryptoContextProvider";

//                    Components
import Loading from "./Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CryptoDetail = () => {
  const { currency, symbolText } = useContext(CryptoContext);
  const [detailCrypto, setDetailCrypto] = useState();
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchApi = async () => {
      setDetailCrypto(await getDetailCrypto(id));
    };
    fetchApi();
  }, [id]);

  useEffect(() => {
    const fetchApi = async () => {
      setHistoricalData(await getHistoricalChart(id, days, currency));
    };
    fetchApi();
  }, [days, currency, id]);

  return detailCrypto ? (
    <main className={styles.DetailMain}>
      <section className={styles.information}>
        <img src={detailCrypto.image.large} alt="" />
        <h1>{detailCrypto.name}</h1>
        <p>{HTMLReactParser(shortenDes(detailCrypto.description.en))}</p>
        <span className={styles.title}>
          Rank : <span>{detailCrypto.market_cap_rank}</span>
        </span>
        <span className={styles.title}>
          Current Price :
          <span>
            {symbolText === "$"
              ? ` ${symbolText}  ${detailCrypto.market_data.current_price.usd.toLocaleString()} `
              : `  ${detailCrypto.market_data.current_price.usd.toLocaleString()} ${symbolText} `}
          </span>
        </span>
        <span className={styles.title}>
          Market Cap :{" "}
          <span>
            {symbolText === "$"
              ? ` ${symbolText}  ${detailCrypto.market_data.current_price.usd.toLocaleString()} `
              : `  ${detailCrypto.market_data.current_price.usd.toLocaleString()} ${symbolText} `}
          </span>
        </span>
      </section>
      <section className={styles.chart}>
        {!historicalData ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            <Line
              data={{
                labels: historicalData?.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData?.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div className={styles.btnDisplay}>
              {chartDays.map((day) => (
                <button
                  className={
                    day.value === days ? styles.selectedBtn : styles.daysBtn
                  }
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                  }}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  ) : (
    <Loading/>
  );
};

export default CryptoDetail;
