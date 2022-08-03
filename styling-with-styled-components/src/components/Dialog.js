import React, {useEffect, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }       
`;

const fadeOut = keyframes`
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }       
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);
    
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    
    ${props =>
        props.disappear &&
        css`
            animation-name: ${fadeOut};
        `}
`;

const DialogBlock = styled.div`
    width: 320px;
    height: 200px;
    padding:1.5rem;
    background: white;
    border-radius: 2px;
    // 아래의 h3,p 는 Nested CSS 문법
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1.125rem;
    }
    
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;
    
    ${props =>
        props.disappear &&
        css`
            animation-name: ${slideDown};
        `}
`;

const ButtonGroups = styled.div`
    align-items: center;
    margin-top: 4rem;
    display: flex;
    justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
    & + & {
        margin-left: 0.5rem;
    }
`;


function Dialog({title, children, confirmText, cancelText, onConfirm, onCancel, visible}) {
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    // visible 값이 true -> false 가 되는 것을 감지
    useEffect(() => {
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    },[localVisible, visible]);

    if (!animate && !localVisible) return null;
    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroups>
                    <Button color="gray" onClick={onCancel}>{cancelText}</Button>
                    <Button color="pink" onClick={onConfirm}>{confirmText}</Button>
                </ButtonGroups>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaultProps = {
    confirmText: '확인',
    cancelText: '취소'
}

export default Dialog;