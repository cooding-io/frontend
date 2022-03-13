import React,{useState} from 'react';
import Iframe from "react-iframe";

import  {Api,FindInstitute} from '../core/cooding'


export default ()=> {
  const [url, setURL] = useState("https://udpiler.udp.cl/");

//   if (!FindInstitute(2)){
//     return 
//   }

//   let api = new Api("external")
//   api.getAll().then((data)=>{
//     setURL(data.Url)
//   })
    return  <Iframe
              url={url}
              width="100%"
              height="700px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
  }
