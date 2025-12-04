import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Stars from "../components/Stars";
import { useState } from "react";
import '../App.css';

const HomePage = () => {
const [selectedStar, setSelectedStar] = useState();

return (
    <Wrapper>

        <br/><br/>

        <div class="background">
            <Stars onClickStar = {setSelectedStar}/>
        </div>

        <div class="foreground">
            <Table star = {selectedStar}/>
        </div>
        
    </Wrapper>

);
};

export default HomePage;