import Tabs from "@/components/Tabs";
import { tabsMapperIndex } from "@/utils/tabsMapper";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-10">
      <Tabs defaultValue="LineChart" items={tabsMapperIndex} />
    </div>
  );
}
