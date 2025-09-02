type Props = {
  emoji: string;
  baslik: string;
  aciklama: string;
};

const Card = (props: Props) => {
  return (
    <div className="m-4 bg-white shadow p-4 flex flex-col gap-4 rounded">
      <span className="text-4xl">{props.emoji}</span>
      <span>{props.baslik}</span>
      <span className="text-gray-400">{props.aciklama}</span>
    </div>
  );
};

const app = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <Card emoji="☕" baslik="Americano" aciklama="Orta Boy" />
      <Card emoji="🧋" baslik="Bubble tea" aciklama="Büyük Boy" />
      <Card emoji="🍰" baslik="Pasta" aciklama="Dilim Pasta" />
    </div>
  );
};

export default app;
