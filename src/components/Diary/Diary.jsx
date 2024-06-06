import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectSelectedItem } from "../../redux/selectors";
import { ReadedStatWrpr } from "../Dashboard/Dashboard.styled";
import {
  ChartPpHWrpr,
  DateText,
  DateWrpr,
  HorizWrpr,
  MinutesText,
  OneReadWrpr,
  PagesPerHourText,
  PagesText,
  PercMinWrpr,
  PercentText,
  Square,
} from "./Diary.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Diary = () => {
  const { totalPages, progress } = useSelector(selectSelectedItem);

  // const { startPage, finishPage, startReading, finishReading, speed } =
  //   progress;

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const pagesReaded = (startPage, finishPage) => finishPage - startPage + 1;

  const minutesRead = (startReading, finishReading) => {
    const startDate = new Date(startReading);
    const finishDate = new Date(finishReading);

    const differenceInMs = finishDate - startDate;
    const differenceInMinutes = Math.floor(differenceInMs / 1000 / 60);

    return differenceInMinutes;
  };
  const data = {
    labels: ["start", "finish"],
    datasets: [
      {
        fill: true,
        data: [2, 5],
        borderColor: "#30B94D",
        backgroundColor: "#30B94D33",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <ReadedStatWrpr>
      {progress.map((rs, index) => (
        <OneReadWrpr key={index}>
          <HorizWrpr>
            <DateWrpr>
              <Square>
                <div></div>
              </Square>
              <DateText>{formatDate(rs.finishReading)}</DateText>
            </DateWrpr>
            <PagesText>
              {pagesReaded(rs.startPage, rs.finishPage) + " pages"}
            </PagesText>
          </HorizWrpr>
          <HorizWrpr>
            <PercMinWrpr>
              <PercentText>
                {(
                  (pagesReaded(rs.startPage, rs.finishPage) / totalPages) *
                  100
                ).toFixed(2) + "%"}
              </PercentText>
              <MinutesText>
                {minutesRead(rs.startReading, rs.finishReading) + " minutes"}
              </MinutesText>
            </PercMinWrpr>
            <ChartPpHWrpr>
              <Line data={data} options={options} />
              <PagesPerHourText>
                {rs.speed + " pages per hour"}
              </PagesPerHourText>
            </ChartPpHWrpr>
          </HorizWrpr>
        </OneReadWrpr>
      ))}
    </ReadedStatWrpr>
  );
};

export default Diary;
