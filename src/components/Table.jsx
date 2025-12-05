import data from "../local-data/data.json";
import React from "react";
import { useState } from "react";
import '../App.css';
import Wrapper from "./Wrapper";

const Table = ({star}) => {

  console.log("Table component loaded");
//   console.log("data =", data);
//   console.log("Is data an array?", Array.isArray(data));
//   console.log("First item:", data[0]);
  
if(!star)
{
    return(
        <Wrapper/>
    )
}

const displayed = star; //user's chosen star

return(
    <table>
        <tbody>
        {/* display information tied to chosen star */}
                <tr>
                    <td> <b>ID </b> </td>
                    <td>{displayed.ID}</td>
                </tr>

                <tr> 
                    <td> <b>HIP </b> </td>
                    <td>{displayed.Hip}</td>
                </tr>

                 <tr> 
                    <td> <b> HAB? </b> </td>
                    <td>{displayed.Hab}</td>
                </tr>

                <tr> 
                    <td> <b> DISPLAY NAME </b> </td>
                    <td>{displayed.DisplayName}</td>
                </tr>

                <tr> 
                    <td> <b> HYG </b> </td>
                    <td>{displayed.Hyg}</td>
                </tr>

                <tr> 
                    <td><b> BAYER FLAMSTEED </b> </td>
                    <td>{displayed.BayerFlamsteed}</td>
                </tr>

               <tr> 
                    <td>  <b>Gliese </b> </td>
                    <td>{displayed.Gliese}</td>
                </tr>

                <tr> 
                    <td> <b> BD </b></td>
                    <td>{displayed.BD}</td>
                </tr>
                
                <tr> 
                    <td> <b> HD </b> </td>
                    <td>{displayed.HD}</td>
                </tr>

                <tr> 
                    <td> <b> HR </b> </td>
                    <td>{displayed.HR}</td>
                </tr>

                <tr> 
                    <td> <b> Proper Name </b> </td>
                    <td>{displayed.ProperName}</td>
                </tr>

                <tr> 
                    <td> <b> Spectral Class </b> </td>
                    <td>{displayed.SpectralClass}</td>
                </tr>

                <tr> 
                    <td><b> Distance </b> </td>
                    <td>{displayed.Distance}</td>
                </tr>

                <tr> 
                    <td> <b> Abs Mag </b> </td>
                    <td>{displayed.AbsMag}</td>
                </tr>
                
                <tr>
                    <td> <b> X </b> </td>
                    <td> {displayed.Xg}</td>
                </tr>
                  <tr>
                    <td> <b> Y</b> </td>
                    <td> {displayed.Yg}</td>
                </tr>
                  <tr>
                    <td> <b> Z </b></td>
                    <td> {displayed.Zg}</td>
                </tr>

        </tbody>
    </table>
);
};

export default Table;