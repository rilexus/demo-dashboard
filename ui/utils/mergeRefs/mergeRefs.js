const mergeRefs = (...refs) => {
  return (ref) => {
    refs.forEach((r) => {
      if (typeof r === "function") {
        r(ref);
      } else {
        if (r) {
          r.current = ref;
        }
      }
    });
  };
};

export default mergeRefs;
