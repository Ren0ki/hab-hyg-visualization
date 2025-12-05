import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Stars from "../components/Stars";
import { useCallback, useState } from "react";
import '../App.css';

const HomePage = () => {
const [selectedStar, setSelectedStar] = useState();
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
        
        THE HAB-HYG VISUALIZATION</div>

        <div className="foreground">
            <Table star = {selectedStar}/>
        </div>
        </div>
    </Wrapper>

);
};

export default HomePage;