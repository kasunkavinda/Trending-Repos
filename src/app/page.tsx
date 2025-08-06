import HomeComponent from "@/components/home/home";
import { SearchParams } from "@/types/util-types";

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  return (
    <div>
      <HomeComponent page={page} />
    </div>
  );
}
