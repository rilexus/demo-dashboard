import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import mergeRefs from "../utils/mergeRefs/mergeRefs";
import {
  FadeInTransition,
  ScaleTransition,
  TranslateTransition,
} from "react-transitions-library";

const StyledDialog = styled.dialog`
  background: transparent;
  border: none;
  padding: 0;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(3px);
  }
`;

const Dialog = forwardRef(function Dialog(
  { open, children, onClick, ...props },
  outsideRef
) {
  const dialogRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    let timer = null;
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  const handleClick = (e) => {
    const clickedOnBackdrop = !childRef.current?.contains(e.target);
    if (clickedOnBackdrop && onClick) {
      onClick(e);
    }
  };

  return (
    <StyledDialog
      {...props}
      ref={mergeRefs(dialogRef, outsideRef)}
      data-open={open}
      onClick={handleClick}
    >
      <div ref={childRef}>{children}</div>
    </StyledDialog>
  );
});

const DialogTransition = ({ children, onExit, ...props }) => {
  return (
    <FadeInTransition timeout={200} from={0} to={1} onExit={onExit} {...props}>
      <TranslateTransition
        timeout={400}
        from={["0px", "0px"]}
        to={["0px", "-3rem"]}
        {...props}
      >
        <ScaleTransition timeout={400} from={0.98} to={1} {...props}>
          {children}
        </ScaleTransition>
      </TranslateTransition>
    </FadeInTransition>
  );
};

const AnimatedDialog = forwardRef(function AnimatedDialog(
  { children, onClick, ...props },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const open = () => {
    setIsOpen(true);
    setAnimate(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        open,
        close: () => {
          setAnimate(false);
        },
      };
    },
    []
  );

  return (
    <Dialog open={isOpen} onClick={onClick}>
      <DialogTransition in={animate} onExited={close}>
        {children}
      </DialogTransition>
    </Dialog>
  );
});

export default AnimatedDialog;
