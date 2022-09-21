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

export default Dialog;
