import React from "react";
import SideBar from "../../components/SideBar/Sidebar";
import "./EditArticle.css";
import { editArticle } from "../../api/Articles/uploadArticle";
import getAllArticles from "../../api/Articles/all";
import { MyUploadAdapter } from "../../util/uploadAdapter";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
    };
}

let timeout = null;

class EditArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            body: "",
            loading: true
        };
    }

    componentDidMount() {
        let article;
        getAllArticles().then((data) => {
            article = data.data.filter((res) => {
                return res.id.toString() === this.props.match.params.id;
            });
            this.setState({ id: this.props.match.params.id, body: article[0].body, loading: false });
        });
    }

    render() {
        if (this.state.loading) return null;
        return (
            <div className="edit">
                <SideBar />
                <div className="form">
                    <CKEditor
                        editor={InlineEditor}
                        config={{ extraPlugins: [MyCustomUploadAdapterPlugin] }}
                        data="<h1>Title</h1>"
                        onInit={(editor) => {
                            editor.setData(this.state.body);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();

                            clearTimeout(timeout);
                            const id = this.state.id;

                            const uploadData = {
                                body: data,
                                id: id
                            };

                            timeout = setTimeout(function() {
                                editArticle(uploadData)
                                    .then((data) => {
                                    })
                                    .catch((error) => {
                                    });
                            }, 3000);
                        }}
                        onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default EditArticle;
