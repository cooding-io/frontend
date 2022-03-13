import { useState } from 'react';



import Bar from './leftBar'
import { data, Me, Api, UUID, GenerateUUID, Render } from '../core/cooding'
import { CodeCpp, CodeJava, CodePython, CodeGolang, CodeSQL } from './codes'


import IDE from './ide'
import RunCode from './RunCode';
import Coder from './CoderSync';

const h = window.innerHeight - 133



var ID = 0
var last = CodeCpp, NewCode = CodeCpp
Render.then(() => {
    ID = Me.id
})

export default () => {

    const [url, setURL] = useState("");
    const [code, setCode] = useState(CodeCpp);
    const [lang, setLang] = useState("Cpp");
    const [err, setErr] = useState("");
    const coder = new Coder(Me, { setCode, setLang, setURL, setErr, code, lang, url, err })


    return <div className="" style={{ 'marginTop': '-00px', zIndex: '1' }}>
        <div className="row"  style={{'marginTop': '-0px' ,'--bs-gutter-x':'0'}}>
            <div className="col-md-2"  >
                <div > {/*style={{'position':'fixed','height':"100px"}}>*/}
        
                    <Bar Coder={coder}/>
                    </div>
                
            </div>
            <div className="col-md-8" style={{ height: h + 'px' }}>
                {url != "" || err != "" ? <RunCode url={url} err={err} /> : null}
                <IDE Type={"csharp"} Code={code} Lang={lang} Coder={coder} />
            </div>
            <div className="col-md-2" >

                {/* <Bar /> */}
            </div>

        </div>

    </div>
}

