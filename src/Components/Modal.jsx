import { useEffect, useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(128, 128, 128, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 0%;
  padding: 10px;
  width: 60%;
  overflow: auto;
  max-height: 50%;
`;

const HeaderContainer = styled.h3`
  background-color: gray;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 10%;
  padding: 10px 10px;
  width: 60%;
  overflow: auto;
  max-height: 5%;
`;

const FooterContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 0% auto;
  padding: 10px 10px;
  width: 60%;
  overflow: auto;
  max-height: 5%;
  text-align: center;
`;

export const Modal = ({
  children,
  open,
  headerText,
  showClose,
  onClose,
  onSubmit,
}) => {
  const [shouldShow, setShouldShow] = useState(open);

  useEffect(() => {
    if (shouldShow !== open) {
      setShouldShow(open);
    }
  },[shouldShow, open]);

  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={() => onClose()}>
          <HeaderContainer onClick={(e) => e.stopPropagation()}>
            {headerText ? headerText : "Popup"}
          </HeaderContainer>
          <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
          {(showClose || onSubmit) && (
            <FooterContainer onClick={(e) => e.stopPropagation()}>
              <div></div>
              <div>
                {onSubmit && <button>Submit</button>}
                {showClose && <button onClick={() => onClose()}>Close</button>}
              </div>
            </FooterContainer>
          )}
        </ModalBackground>
      )}
    </>
  );
};
