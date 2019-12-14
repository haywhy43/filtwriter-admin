import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import "./nar.css";
import Cookies from "js-cookie";
import { MyUploadAdapter } from "../../util/uploadAdapter";

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader);
    };
}

class Nar extends Component {
    render() {
        return (
            <div className="Nar">
                <CKEditor
                    editor={InlineEditor}
                    config={{ extraPlugins: [MyCustomUploadAdapterPlugin] }}
                    data="<h1>Title</h1>"
                    onInit={(editor) => {
                        // You can store the "editor" and use when it is needed.

                        console.log(editor.plugins.get("FileRepository"));
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ data });
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
