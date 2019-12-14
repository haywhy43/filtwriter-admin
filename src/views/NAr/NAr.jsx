import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import "./nar.css";
import { MyUploadAdapter } from "../../util/uploadAdapter";
import SideBar from "../../components/SideBar/Sidebar";

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
    };
}

let timeout = null

class Nar extends Component {

    render() {
        return (
            <div className="Nar">
                <SideBar />
                <CKEditor
                    editor={InlineEditor}
                    config={{ extraPlugins: [MyCustomUploadAdapterPlugin] }}
                    data="<h1>Title</h1>"
                    onInit={(editor) => {
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();

                        clearTimeout(timeout);

                        timeout = setTimeout(function() {
                            console.log({ data });
                        }, 3000)
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
            </div>
        );
    }
}

export default Nar;
