import { Card } from "../components/Crad";
import Layout from "../components/Layout";
import useSWR from "swr";
import { ApiResponse } from "./api/get-records";
import Loading from "../components/Loading";

const fetcher = (input: RequestInfo, init?: RequestInit) => fetch(input, init).then((res) => res.json());

const Home: React.FC = () => {
  const { data, error } = useSWR<ApiResponse>("/api/get-records", fetcher);
  return (
    <Layout>
      {!data && <Loading />}
      {data && data.data.map((record) => <Card {...record} key={record.title} />)}
      {error && <div>failed to load</div>}
    </Layout>
  );
};

export default Home;
