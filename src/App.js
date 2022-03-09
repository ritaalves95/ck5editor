import Editor from 'ckeditor5-custom-build/build/ckeditor'
import CKEditor from "@ckeditor/ckeditor5-react"
import parse from "html-react-parser"
import React, { useState } from "react"
import doc from './img/Doc.svg';
import pdfimg from './img/toPdf.svg';
import printimg from './img/print.svg';
import Pdf from "react-to-pdf";
import "./App.css"

function App() {
  const [text, setText] = useState('Welcome to ck Text Editor')
  const ref = React.createRef();

  const print = () =>{
    window.print()
  }

  return (
    <div className="App">
      <div className="editor">
        <div className="layout">
          <div className="layout-content">
            <article className='icon-wrapper'>
              <img className="icon-doc" src={doc} alt="doc" />
            </article>

            <article className="layout-options">
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => 
                <button className="sub-icon-wrapper" onClick={toPdf}>
                  <img className="icon-doc" src={pdfimg} alt="pdf-export" />
                </button>
                }
              </Pdf>

                <button className="sub-icon-wrapper" onClick={() => print()}>
                  <img className="icon-doc" src={printimg} alt="print" /*style={{top: '50%', transform: 'translate(-4%, 5%)'}}*/ />
                </button>
            </article>
          </div>
        </div>

          <div>
          <CKEditor
            editor={Editor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData()
              setText(data)
            }}
          />
        </div>
      </div>

      <div ref={ref} className={`toPdf section-to-print`}>
        <p>{parse(text)}</p>
      </div>
    </div>
  )
}

export default App