const LoadingWave: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  return (
    <span
      className="rounded h-full mx-0.5 bg-green-100 animate-wave w-2 inline-block"
      style={{ animationDelay: `${delay * 200}ms` }}
    ></span>
  );
};

const Loading = () => {
  return (
    <div className="border py-8 px-2 text-center rounded">
      <div className="mx-auto h-10 my-0 w-20 flex items-center">
        <LoadingWave />
        <LoadingWave delay={1} />
        <LoadingWave delay={2} />
        <LoadingWave delay={3} />
        <LoadingWave delay={4} />
      </div>
    </div>
  );
};

export default Loading;
