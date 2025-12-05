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

        <div className="fade-in">
        <div className="background">

            <Stars onClickStar = {handleClickStar}/>

        </div>

        <div className={`
            title ${hideTitle ? "fade-out" : ""}`} 
            onAnimationEnd={() => setFullyHidden(true)}
            style={{display: fullyHidden ? "none" : "block" }}
        > 
        
            THE HAB-HYG VISUALIZATION
        
        </div>

        <div className="foreground">
            <Table star = {selectedStar}/>
            <br/><br/>
            <Link to="/glossary">
                <Button className="glossary-btn"> Glossary </Button>
            </Link>
            <br/><br/>
            <Link to="/refs">
                <Button className="refs-btn"> References </Button>
            </Link>
        </div>
        </div>
    </Wrapper>

);
};

export default HomePage;