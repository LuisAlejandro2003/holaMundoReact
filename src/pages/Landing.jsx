import Header from "../components/atoms/Header";
import StudentList from "../components/organisms/StudentList";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FormLogin from "../components/atoms/FormLogin";
import Boton from "../elements/Boton";
const Landing = () => {

  const  studentsList = [
    {id:1 , name:"Luis"},
    {id:2 , name:"Pepe"},
    {id:3 , name:"Juan"},
    {id:4 , name:"Jose"}];

    return ( 
     <>
     <Header></Header>  
      <StudentList studentsList={studentsList}></StudentList>
      <Link to="/Login">Iniciar sesion</Link> 
      <Boton marginTop marginRigth negro > Iniciar sesion</Boton>
      </>
    );
}

export default Landing;