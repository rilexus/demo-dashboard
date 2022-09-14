import {useMemo} from "react";

function useStyle(style, deps){
  return useMemo(() => style, deps);
}

export default useStyle