import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Stars from "../components/Stars";
import { useCallback, useState } from "react";
import data from '../local-data/data.json';
import { Link, Route, Routes } from "react-router";
import { Button } from "@mui/material";
import '../App.css';

const HomePage = () => {
const [selectedStar, setSelectedStar] = useState(data[0]);
const [hideTitle, setHideTitle] = useState(false);
const [fullyHidden, setFullyHidden] = useState(false);

const handleClickStar = useCallback((star) => {
    setSelectedStar(star);
    setHideTitle(true);
}, []);

return (
    <Wrapper>

        <br/><br/>

        <div className="fade-in"> {/* container to trigger animation */}
        <div className="background"> {/* lower z-index */}

         {/* get selected star */}
            <Stars onClickStar = {handleClickStar}/>

        </div>

        {/* Handle text animation */}
        <div className={`
            title ${hideTitle ? "fade-out" : ""}`} 
            onAnimationEnd={() => setFullyHidden(true)}
            style={{display: fullyHidden ? "none" : "block" }}
        > 
        
            THE HAB-HYG VISUALIZATION
        
        </div>

        {/* Higher z-index */}
        <div className="foreground">

            {/* Update table based on clicked star */}
            <Table star = {selectedStar}/>
            <br/><br/>

        {/* Links to glossary and refs pages */}
            <Link to="/glossary">
                <Button className="btn"> Glossary </Button>
            </Link>
            <br/><br/>
            <Link to="/refs">
                <Button className="btn"> References </Button>
            </Link>
        </div>
        </div>
    </Wrapper>

);
};

export default HomePage;