import React,{useState} from 'react';
// import { Select,Checkbox } from 'antd';
import {Me} from '../core/cooding'
import Admin from './adminBar';
import {Langs} from './codes'

// const { Option } = Select;

function Bar({Lang,Coder}){
    const [code, setCode] = useState("Cpp");

    let handleChange=(value)=>{
      value = value.target.value
      setCode(value)
      Coder.changeLang(value)
    }

    console.log("ME",Me)
    let lengthAdminCourses  = 0
    // for(let ownerCourse of  Me.sectionsByOwnerId.edges){
    //   if(ownerCourse.node.enable){
    //     lengthAdminCourses++
    //   }
    // }
 
    // for(let helperCourse of  Me.usersSectionsByUserId.edges){
    //   if(helperCourse.node.role <3 && helperCourse.node.sectionBySectionId.enable ){
    //     lengthAdminCourses++
    //   }
    // }


    return  <div className="card">
    <div className="card-header" style={{'margin-left': '-13px'}}>
      <h5 className="card-title ">Configuracion</h5>
      <div className="card-actions float-end">
   
      </div>
    </div>
    <div className="card-body">
      <div className="row g-0">

        <div className="">
        
                <div class="mb-3">
												
													<select class="form-select" id="example-select"  defaultValue="C++" value={Lang}  onChange={handleChange} >
														<option value="Cpp" >C++</option>
                            <option value="Python" >Python</option>
                            <option value="Java"> Java</option>
                            <option value="Golang" >Golang</option>
                            <option value="SQL" >SQL</option>
													
													</select>
												</div>

                        <div class="mb-3">
												
                        <button type="button" onClick={()=>{Coder.Exec() }} className="w-100 waves-effect waves-light btn btn-primary mb-5">Ejecutar</button>
                      </div>
                      <div class="mb-3">
												
                      <button type="button"  onClick={()=>{ Coder.Reset(code)}}  className="w-100 waves-effect waves-light btn btn-danger mb-5">Reset</button>
                      </div>

        
         </div>
      </div>
    
   </div>
  </div>
}


export default Bar