
type Props = {
  metin: string;
}

const MyButton = (props: Props) => {
  return (
    <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-800">
      {props.metin}
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
