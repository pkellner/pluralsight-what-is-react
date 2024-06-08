import ListItemsTowersOfHanoi from "./list-items-towers-of-hanoi";

export default function Page() {
  return (
    <div>
      <header className="header">
        <h1>Towers of Hanoi</h1>
        <img
          src="/blocks-header-100b.png"
          alt="Placeholder"
          className="image"
        />
      </header>
      <TowersOfHanoiContainer />
    </div>
  );
}
