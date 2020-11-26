import react from "react";
import { FormControl, InputGroup, Col, Container, Row} from "react-bootstrap";
import { FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "../assets/css/email.css"


function email() {

    return(
        <div className={["container input-fields"]}>
             <div className={["row"]}>
                 <div className={["col-lg-12"]}>
                     <header className="header-inputfields"><strong>Vul hieronder u <span className="name-email">naam en email</span> in</strong></header>
                     <p className="subtext-inputfields">Op deze manier blijft u op de hoogte!!! </p>
                    <InputGroup className={["name"]}>
                    <FaUserAlt className="usericon"></FaUserAlt>
                        <FormControl
                            placeholder="naam"
                        />
                    </InputGroup>
                 </div>
            </div>

            <div className={["row"]}>
                <div className={["col-lg-12"]}>
                    <InputGroup className={["email"]}>
                        <FaEnvelope className="envelope"></FaEnvelope>
                        <FormControl
                            placeholder="@email.com"
                        />
                    </InputGroup>
                </div>
            </div>

            <div className={["buttons"]}>
                <div className={["row"]}>
                    <div className={["col-lg-12"]}>
                        <NavLink to="/"><button className={["cancel"]}>annuleer</button></NavLink>
                        <NavLink to="./information"><button className={["login"]}>login</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default email