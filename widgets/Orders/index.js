import dynamic from "next/dynamic";

const Orders = dynamic(() => import("./Orders"), {
  ssr: false,
  loading: () => <div>Loading Orders ...</div>,
});

export { Orders };
