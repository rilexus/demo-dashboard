import dynamic from "next/dynamic";

const Visitors = dynamic(() => import("./Visitors"), {
  ssr: false,
  loading: () => <div>Loading Visitors ...</div>,
});

export { Visitors };
