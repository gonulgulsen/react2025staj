import Card from "components/Card";
import { useEffect, useState } from "react";

const kahve = {
  title: "Banana Iced Coffee",
  description: "A banana iced coffee ",
  ingredients: ["Coffee", "Banana", "Ice"],
  image:
    "https://www.chiquita.fr/wp-content/uploads/2022/07/T-220706_DEC_Banana-Coffee-frappe.jpg",
  id: 7,
};

const App = () => {
  //usss
  const [coffeeList, setCoffeeList] = useState([kahve, kahve]);
  //uffs

  useEffect(() => {
    const API_URL = "https://api.sampleapis.com/coffee/iced";
    fetch(API_URL)
      .then((res) => res.json())
      .then((coffeeList) => setCoffeeList(coffeeList));
  }, []);

  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center">
      {coffeeList.map((kahve) => (
        <Card kahve={kahve} />
      ))}
    </div>
  );
};

export default App;
