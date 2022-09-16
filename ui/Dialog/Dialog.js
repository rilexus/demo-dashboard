import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDialog = styled.dialog`
  background: transparent;
  border: none;
  padding: 0;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(3px);
  }
`;

const Dialog = ({ open, children, onClick, ...props }) => {
  const dialogRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  const handleClick = (e) => {
    const clickedOnBackdrop = !childRef.current?.contains(e.target);
    if (clickedOnBackdrop && onClick) {
      onClick(e);
    }
  };

  return (
    <StyledDialog
      data-open={open}
      ref={dialogRef}
      {...props}
      onClick={handleClick}
    >
      <div ref={childRef}>{children}</div>
    </StyledDialog>
  );
};

export default Dialog;
