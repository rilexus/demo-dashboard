import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import mergeRefs from "../utils/mergeRefs/mergeRefs";

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
  { delay, open, children, onClick, ...props },
  outsideRef
) {
  const [_open, _setOpen] = useState(false);

  const isDelayed = () => {
    return !!delay;
  };

  const dialogRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    let timer = null;
    if (open) {
      if (isDelayed()) {
        timer = setTimeout(() => {
          dialogRef.current?.showModal();
          _setOpen(true);
        }, delay.open);
      } else {
        dialogRef.current?.showModal();
        _setOpen(true);
      }
    } else {
      if (isDelayed()) {
        timer = setTimeout(() => {
          _setOpen(false);
          dialogRef.current?.close();
        }, delay.close);
      } else {
        _setOpen(false);
        dialogRef.current?.close();
      }
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
      data-open={_open}
      onClick={handleClick}
    >
      <div ref={childRef}>{_open && children}</div>
    </StyledDialog>
  );
});

export default Dialog;
