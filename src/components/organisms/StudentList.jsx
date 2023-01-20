import Caption from "../atoms/Caption";
import Widge from "../atoms/Widge";
const StudentList = ({studentsList}) => {
    return ( 
        <>
          <Caption msn="Lista de alumnos del 4-A"></Caption>
          {studentsList.map((item)=>
            <Widge item={item}></Widge>
          )}
        
        </>
     );
}
 
export default StudentList;