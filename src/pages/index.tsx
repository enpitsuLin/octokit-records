import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Card } from "../components/Crad";
import { getRecords } from "../lib/get-records";
import { RecordItem } from "../types/records";

interface Props {
  records: RecordItem[];
}

const filterTruthy = Boolean as any as <T>(x: T | false) => x is T;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await getRecords();
  const records = Object.keys(data.files)
    .map((key) => {
      try {
        return JSON.parse(data.files[key].content) as RecordItem;
      } catch (error) {
        return false;
      }
    })
    .filter(filterTruthy);

  return {
    props: {
      records: records
    }
  };
};

const Home: React.FC<Props> = ({ records }) => {
  return (
    <div className="mx-10 md:(max-w-150 mx-auto)">
      <h1 className="flex justify-between items-center my-8 md:my-20">
        <span className="text-5xl">我看过的</span>
        <span className="text-lg">电影 / 动漫 / 剧 / 书</span>
      </h1>
      <div>
        {records.map((record) => (
          <Card {...record} key={record.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
