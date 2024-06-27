import ListItems from "@/app/list-items";

export default function Page() {
  const initialInts = [1,2,3];
  return (
    <ListItems initialInts={initialInts} />
  )
}