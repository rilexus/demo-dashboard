import { useDrag } from "react-dnd";

const ItemTypes = {
  WIDGET: "widget",
};

const Widget = ({ children }) => {
  const [{ isDragging }, ref] = useDrag(() => ({
    type: ItemTypes.WIDGET,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={ref}
      className={"widget"}
      style={{
        height: "100%",
        width: "100%",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  );
};

export default Widget;
