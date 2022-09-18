import dynamic from "next/dynamic";
import { sleep } from "../../utils/sleep";

const Insights = dynamic(
  async () => {
    await sleep(2000);
    return import("./Insights");
  },
  { ssr: false, loading: () => <div>Loading Insights ...</div> }
);

export { Insights };
