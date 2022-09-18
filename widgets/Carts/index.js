import dynamic from "next/dynamic";

const Carts = dynamic(() => import("./Carts"));

export { Carts };
