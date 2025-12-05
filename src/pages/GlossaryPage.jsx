import Glossary from "../components/Glossary";
import Wrapper from "../components/Wrapper";
import { Button } from "@mui/material";
import { Link, Route, Routes } from "react-router";
import '../App.css';

const GlossaryPage = () => {

return (
    <Wrapper>
        <h1> Glossary </h1>
        <p>This dataset was created by merging the HYP dataset with the Hab-Cat dataset. <br/>Therefore, not all entries have exact meatches. </p>
        <Glossary/>
                    <Link to="/">
                <Button variant ="glossary">Return to map </Button>
            </Link>
        </Wrapper>
    );
};

export default GlossaryPage;