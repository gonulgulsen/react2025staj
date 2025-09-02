type Props = {
  metin: string;
  renk: "green" | "blue" | "red" | "yellow";
};

const MyButton = (props: Props) => {
  return (
    <button
      className={`bg-${props.renk}-500 text-white p-4 rounded hover:bg-blue-800`}
    >
      {props.metin}
    </button>
  );
};

const app = () => {
  return (
    <div>
      <MyButton metin={"Satın Al"} renk={"red"} />
      <MyButton metin={"Satın Al"} renk={"green"} />
      <MyButton metin={"Satın Al"} renk={"blue"} />
      <MyButton metin={"Satın Al"} renk={"yellow"} />
    </div>
  );
};

export default app;
