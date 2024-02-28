import Header from "../_components/header";

export default async function Home() {
  return (
    <div className="h-[200vh] p-6">
      <Header title="Timeslsiter" breadcrumb={["Hjem", "Timeslister"]} />
    </div>
  );
}
