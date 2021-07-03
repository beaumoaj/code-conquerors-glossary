import React,{useState} from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        setIsOpen(false);
        fetch("https://wm2-glossary.herokuapp.com/api/contributor/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password, }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // setToken(data.auth)
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div id="yourAppElement">
            <button onClick={openModal}>LOGIN</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>LOGIN</h2>
                <button onClick={closeModal}>close</button>
                
                <form onSubmit={handleSubmit}>
                    <label>Username</label><br></br>
                    <input
                        type="email"

                        value={email}
                        onChange={(event) => setEmail(event.target.value)} className="login-box"
                    /><br></br>
                    <label>Password</label><br></br>
                    <input
                        type="password"
                        value={password}

                        onChange={(event) => setPassword(event.target.value)} className="login-box"
                    /><br></br>
                    <button type="submit" className="submit-btn">SUBMIT</button>
                    <button onClick={(e) => { e.preventDefault(); setIsOpen(false) }}>X</button>
                </form>

            </Modal>

        </div>
    )
};
export default Login;
