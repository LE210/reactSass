import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import Button from "../../styling-with-styled-components/src/components/Button";
import Dialog from "./components/Dialog";
import {useState} from "react";

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top : 4rem;
    border: 1px solid black;
    padding: 1rem;
`;


const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

function App() {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        console.log("???")
        setDialog(true);
    };
    const onConfirm = () => {
        console.log('확인');
        setDialog(false);
    };
    const onCancel = () => {
        console.log('취소');
        setDialog(false);
    };

    return (
        <ThemeProvider
            theme={{
                palette: {
                    blue: '#228be6',
                    gray: '#495057',
                    pink: '#f06595'
                }
            }}
        >
            <>
                <AppBlock>
                    <ButtonGroup>
                        <Button size="large">BUTTON</Button>
                        <Button color="gray">BUTTON</Button>
                        <Button color="pink" size="small">BUTTON</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large">BUTTON</Button>
                        <Button color="gray">BUTTON</Button>
                        <Button color="pink" size="small">BUTTON</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large">BUTTON</Button>
                        <Button color="gray">BUTTON</Button>
                        <Button color="pink" size="small">BUTTON</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" outline>BUTTON</Button>
                        <Button color="gray" outline>BUTTON</Button>
                        <Button color="pink" size="small" outline>BUTTON</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" fullWidth>BUTTON</Button>
                        <Button color="gray" fullWidth>BUTTON</Button>
                        <Button color="pink" size="small" fullWidth onClick={onClick}>삭제</Button>
                    </ButtonGroup>
                </AppBlock>
                <Dialog
                    title="정말로 삭제하시겠소?"
                    confirmText="그렇소"
                    cancelText="하지 않겠소"
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    visible={dialog}
                >
                    데이터를 정말로 삭제하시겠소?
                </Dialog>
            </>
        </ThemeProvider>
    );
}

export default App;
