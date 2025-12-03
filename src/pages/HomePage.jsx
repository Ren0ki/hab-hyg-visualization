import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Stars from "../components/Stars";
import { useState } from "react";

const HomePage = () => {
const [selectedStar, setSelectedStar] = useState();

return (
    <Wrapper>
        <br/><br/>
        <Stars onClickStar = {setSelectedStar}/>
        <Table selectedStar = {selectedStar}/>
    </Wrapper>

);
};

export default HomePage;