import Portfolio from './Portfolio';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Portfolio />
    </main>
  );
};

export default Home;