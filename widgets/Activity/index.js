import dynamic from "next/dynamic";

const Activity = dynamic(() => import("./Activity"), {
  ssr: false,
  loading: () => <div>Loading Activity ...</div>,
});

export { Activity };
