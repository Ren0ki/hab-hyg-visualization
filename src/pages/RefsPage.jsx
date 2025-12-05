import Glossary from "../components/Glossary";
import Wrapper from "../components/Wrapper";
import { Button } from "@mui/material";
import { Link, Route, Routes } from "react-router";
import '../App.css';

const RefsPage = () => {

return (
    <Wrapper>
        <h1> References </h1>
        <ul>
        <a href ="https://heasarc.gsfc.nasa.gov/W3Browse/all/hipparcos.html"> HIPPARCOS - Hipparcos Main Catalog </a>
        <a href="https://phl.upr.edu/projects/habcat"> PHL @ UPR Arecibo - HabCat: A Catalog of Nearby Habitable Systems </a>
        <a href="https://en.wikipedia.org/wiki/Flamsteed_designation#Overviewt"> Flamsteed designation - Wikipedia </a>
        <a href="https://en.wikipedia.org/wiki/Bright_Star_Catalogue"> Bright Star Catalogue - Wikipedia </a>
        <a href="https://en.wikipedia.org/wiki/Stellar_classification"> Stellar classification - Wikipedia </a>
        <a href="https://en.wikipedia.org/wiki/Gliese_Catalogue_of_Nearby_Stars"> Gliese Catalogue of Nearby Stars - Wikipedia </a>
        <a href="https://en.wikipedia.org/wiki/Durchmusterung"> Durchmusterung - Wikipedia </a>
        <a href="https://en.wikipedia.org/wiki/Henry_Draper_Catalogue"> Henry Draper Catalogue - Wikipedia </a>
        <a href="https://ui.adsabs.harvard.edu/abs/1908AnHar..50....1P/abstract"> Revised Harvard Photometry </a>
        <a href="List of proper names of stars - Wikipedia"> Revised Harvard Photometry </a>
        </ul>
        <Link to="/">
                <Button className="star-btn">Return to map </Button>
            </Link>
        </Wrapper>
    );
};

export default RefsPage;