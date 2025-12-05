import Glossary from "../components/Glossary";
import Wrapper from "../components/Wrapper";
import { Button } from "@mui/material";
import { Link, Route, Routes } from "react-router";
import '../App.css';

const GlossaryPage = () => {

return (
    <Wrapper>
        <div className="fade-in"> {/* container to trigger animation */}
        <h1> Glossary </h1>
        <p>This dataset was created by merging the HYP dataset with the Hab-Cat dataset. <br/>Therefore, not all entries have exact meatches. </p>
        <br/>
        <Glossary/>
        <br/>
                    <Link to="/">
                <Button className ="btn">Return to map </Button>
            </Link>
        </div>
        </Wrapper>
    );
};

export default GlossaryPage;