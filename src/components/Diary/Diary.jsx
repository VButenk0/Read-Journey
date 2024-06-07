import { useMemo } from "react";
import { useSelector } from "react-redux";
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
import sprite from "../../assets/sprite.svg";
import { selectSelectedItem } from "../../redux/selectors";
import {
  DiaryWrpr,
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
  Sideline,
  Square,
  TrashIcon,
  StatsWrpr,
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

  const filteredProgress = useMemo(() => {
    return progress.filter((item) => item.finishReading);
  }, [progress]);

  const sortedProgress = useMemo(() => {
    return [...filteredProgress].sort(
      (a, b) => new Date(b.finishReading) - new Date(a.finishReading)
    );
  }, [filteredProgress]);

  const groupedProgress = useMemo(() => {
    const grouped = {};
    sortedProgress.forEach((item) => {
      const date = formatDate(item.finishReading);
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    return grouped;
  }, [sortedProgress]);

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
    <DiaryWrpr>
      {Object.entries(groupedProgress).map(([date, readings], index) => {
        const totalPagesReaded = readings.reduce(
          (acc, rs) => acc + pagesReaded(rs.startPage, rs.finishPage),
          0
        );
        return (
          <OneReadWrpr key={index}>
            <DateWrpr>
              <Square className={index === 0 ? "first" : ""}>
                <div />
              </Square>
              <HorizWrpr>
                <DateText className={index === 0 ? "first" : ""}>
                  {date}
                </DateText>
                <PagesText>{totalPagesReaded + " pages"}</PagesText>
              </HorizWrpr>
            </DateWrpr>
            {readings.map((rs, idx) => (
              <StatsWrpr key={idx}>
                <HorizWrpr>
                  <PercMinWrpr>
                    <PercentText>
                      {(
                        (pagesReaded(rs.startPage, rs.finishPage) /
                          totalPages) *
                        100
                      ).toFixed(2) + "%"}
                    </PercentText>
                    <MinutesText>
                      {minutesRead(rs.startReading, rs.finishReading) +
                        " minutes"}
                    </MinutesText>
                  </PercMinWrpr>
                  <ChartPpHWrpr>
                    <Line data={data} options={options} />
                    <PagesPerHourText>
                      {rs.speed + " pages per hour"}
                    </PagesPerHourText>
                  </ChartPpHWrpr>
                </HorizWrpr>
                <TrashIcon
                  width="14"
                  height="14"
                  stroke="var(--secondary-text)"
                >
                  <use href={sprite + "#trash"}></use>
                </TrashIcon>
              </StatsWrpr>
            ))}
          </OneReadWrpr>
        );
      })}
      <Sideline />
    </DiaryWrpr>
  );
};

export default Diary;
