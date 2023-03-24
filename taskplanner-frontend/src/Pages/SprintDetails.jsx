import "./sprint.css";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchApiGetWithToken } from "../helper";
import { Box } from "@chakra-ui/react";


const SprintDetails = () => {

    const [task, setTask] = useState([]);

    const parm = useParams();

 

    const getSprint = async () => {
        try {
          const response = await fetchApiGetWithToken("/users/sprint/"+parm.id);
          const data = await response.json();
          setTask(data);
        } catch (error) {
          console.log(error.message);
        }
      };
      console.log(task);
      useEffect(() => {
        getSprint();
      }, []);





    return (

        <Box m={10}>

            <h1><span className="blue"  m={10}>&lt;</span>Table<span className="blue">&gt;</span> <span className="yellow">Responsive</span></h1>
            <h2>Created with love by <a href="https://github.com/pablorgarcia" target="_blank">Pablo García</a></h2>

            <table className="container">
                <thead>
                    <tr>
                        <th><h1>Task Name</h1></th>
                        <th><h1>Type</h1></th>
                        <th><h1>Status</h1></th>
                        <th><h1>Assigne</h1></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        task.map((el, i) => {
                            return (
                                <tr key={i} >
                                    <td>{el.name}</td>
                                    <td>{el.type}</td>
                                    <td>
                                        <select 
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            console.log(el._id);
                                        }}
                                        id={i}>
                                            <option value={"todo"}>To do</option>
                                            <option value={"in progress"}>In Progress</option>
                                            <option value={"done"}>Done</option>
                                        </select>
                                    </td>
                                    <td>{el?.assignee?.name}</td>
                                </tr>
                            )
                        })
                    }

                    {/* <tr>
                        <td>
                            <select>
                                <option value="volvo">Volvo</option>
                                <option value="volvo">Volvo</option>
                                <option value="volvo">Volvo</option>
                                <option value="volvo">Volvo</option>
                                <option value="volvo">Volvo</option>
                            </select>

                        </td>
                        <td>9518</td>
                        <td>6369</td>
                        <td>01:32:50</td>
                    </tr>
                    <tr>
                        <td>Twitter</td>
                        <td>7326</td>
                        <td>10437</td>
                        <td>00:51:22</td>
                    </tr>
                    <tr>
                        <td>Amazon</td>
                        <td>4162</td>
                        <td>5327</td>
                        <td>00:24:34</td>
                    </tr>
                    <tr>
                        <td>LinkedIn</td>
                        <td>3654</td>
                        <td>2961</td>
                        <td>00:12:10</td>
                    </tr>
                    <tr>
                        <td>CodePen</td>
                        <td>2002</td>
                        <td>4135</td>
                        <td>00:46:19</td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td>4623</td>
                        <td>3486</td>
                        <td>00:31:52</td>

                    </tr> */}
                </tbody>
            </table>

        </Box>

    )
}

export default SprintDetails