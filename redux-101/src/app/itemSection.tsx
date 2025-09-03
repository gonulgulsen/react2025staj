import { useAppSelector } from "./store";
import { selectEmail } from "./userSlice";

const ItemSection = () => {
  const email = useAppSelector(selectEmail);
  return <div>itemSection Email : {email}</div>;
};

export default ItemSection;
