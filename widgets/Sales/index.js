import dynamic from "next/dynamic";
import { sleep } from "../../utils/sleep";

const Sales = dynamic(
  async () => {
    await sleep(1000);
    return import("./Sales");
  },
  {
    ssr: false,
    loading: () => <div>Loading Sales ...</div>,
  }
);

export { Sales };
