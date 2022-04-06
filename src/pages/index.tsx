import { GetStaticProps } from "next";
import { Card } from "../components/Crad";
import Layout from "../components/Layout";
import { getRecords } from "../lib/get-records";
import { RecordItem } from "../types/records";

interface Props {
  records: RecordItem[];
}

function filterTruthy<T>(x: T | false): x is T {
  return Boolean(x);
}

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
      records: records.sort((a, b) => {
        return new Date(a.date) < new Date(b.date) ? 1 : -1;
      })
    }
  };
};

const Home: React.FC<Props> = ({ records }) => {
  return (
    <Layout>
      {records.map((record) => (
        <Card {...record} key={record.title} />
      ))}
    </Layout>
  );
};

export default Home;
