const MyButton = ({ metin }: { metin: string }) => {
  return (
    <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-800">
      {metin}
    </button>
  );
};

const app = () => {
  return (
    <div>
      <MyButton metin={"Satın Al"} />
    </div>
  );
};

export default app;
