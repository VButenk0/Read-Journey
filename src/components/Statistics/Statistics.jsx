import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { selectSelectedItem } from "../../redux/selectors";
import {
  DoughnutWrpr,
  ReadedStatWrpr,
  StatBottomWrpr,
  StatTextWrpr,
  StatisticsWrpr,
} from "../Dashboard/Dashboard.styled";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const selectedItem = useSelector(selectSelectedItem);
  const { totalPages, progress } = selectedItem;

  const getCurrentPage = () => {
    if (progress.length !== 0) {
      const activeProgress = progress?.find((p) => p.status === "active");
      if (activeProgress) {
        return activeProgress.startPage;
      } else {
        const lastProgress = progress[progress?.length - 1];
        return lastProgress.finishPage;
      }
    } else {
      return 0;
    }
  };

  const readed = () => {
    const actualPage = getCurrentPage();
    const readedPercentage = (actualPage / totalPages) * 100;
    return readedPercentage;
  };

  const data = {
    datasets: [
      {
        data: [readed(), 100 - readed()],
        backgroundColor: ["#30B94D", "#1F1F1F"],
        borderRadius: [50, 0],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    cutout: "80%",
    responsive: false,
    maintainAspectRatio: false,
    hover: { mode: null },
  };

  return (
    <StatisticsWrpr>
      <p>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <ReadedStatWrpr>
        <DoughnutWrpr>
          <Doughnut data={data} options={options} />
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "24px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {readed().toFixed(0)}%
          </p>
        </DoughnutWrpr>
        <StatBottomWrpr>
          <span />
          <StatTextWrpr>
            <p>{readed().toFixed(2)}%</p>
            <p>{getCurrentPage() + " pages read"} </p>
          </StatTextWrpr>
        </StatBottomWrpr>
      </ReadedStatWrpr>
    </StatisticsWrpr>
  );
};

export default Statistics;
