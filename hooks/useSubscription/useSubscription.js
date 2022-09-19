import { useEffect, useState } from "react";

const useSubscription = (source) => {
  const [state, setState] = useState(source.getState());

  useEffect(() => {
    const handle = (s) => {
      setState(s);
    };
    source.subscribe(handle);
    return () => {
      source.unsubscribe(handle);
    };
  }, []);

  return [state, source];
};

export default useSubscription;
