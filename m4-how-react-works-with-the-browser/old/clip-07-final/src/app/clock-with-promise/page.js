import AnalogClock from "@/app/clock/analog-clock";


const Page = () => {
  const initialTime = new Date();
  console.log("Page initialTime", initialTime);
  return (
    <div>
      <h1>Analog Clock</h1>
      <AnalogClock initialTime = {initialTime} />
    </div>
  );
};

export default Page;