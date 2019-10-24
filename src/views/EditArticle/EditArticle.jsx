import React from "react";
import SideBar from "../../components/SideBar/Sidebar";
import "./EditArticle.css";
import getAllArticles from "../../api/Articles/all";

import FormInput from "../../components/FormInput/FormInput";
import TextArea from "../../components/TextArea/TextArea";
import checkMark from "../../assets/img/checkmark.svg";
import { editArticle } from "../../api/Articles/uploadArticle";

class EditArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            body: "",
            file: "",
            saved: ""
        };
    }

    componentDidMount() {
        getAllArticles().then(data => {
            data.data.forEach(article => {
                if (article.id.toString() === this.props.match.params.id) {
                    this.setState({ author: article.author });
                    this.setState({ title: article.title });
                    this.setState({ body: article.body });
                }
            });
        });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    uploadfile = () => {
        this.setState({ file: this.refs.file.files[0] });
    };

    editArticle = event => {
        const formData = new FormData();
        formData.append("author", this.state.author);
        formData.append("title", this.state.title);
        formData.append("body", this.state.body);
        formData.append("picture", this.state.file);
        formData.append("id", this.props.match.params.id);
        editArticle(formData).then(data => {
            // to add checkmark to button
            this.setState({ saved: true });
            // to remove checkmark and redirect after 3 seconds
            setTimeout(() => {
                this.setState({ saved: false });
                this.props.history.push("/articles");
            }, 3000);
        });
        event.preventDefault();
    };
    render() {
        return (
            <div className="edit">
                <SideBar />
                <div className="form">
                    <form action="Edit Article" className="main_form" onSubmit={this.editArticle}>
                        <div>
                            <h1>Edit Article</h1>
                        </div>
                        <FormInput
                            label="Author"
                            placeholder="Enter Author's name"
                            name="author"
                            htmlFor="author"
                            handleInput={this.handleChange}
                            value={this.state.author}
                            required
                        />

                        <FormInput
                            label="Title"
                            placeholder="Enter Title"
                            name="title"
                            htmlFor="title"
                            handleInput={this.handleChange}
                            required
                            value={this.state.title}
                        />

                        <TextArea
                            label="Body"
                            name="body"
                            htmlFor="body"
                            placeholder="Type in your article"
                            cols="50"
                            rows="30"
                            handleInput={this.handleChange}
                            value={this.state.body}
                        />

                        <div className="input_group">
                            <label htmlFor="picture" className="label">
                                Upload cover Image
                            </label>
                            <input
                                type="file"
                                ref="file"
                                if="file"
                                className="input"
                                onChange={this.uploadfile}
                            />
                        </div>

                        <div className="btns">
                            <div className="save_btn">
                                <button className="save_btn" type="submit">
                                    Save
                                    {this.state.saved ? (
                                        <img
                                            src={checkMark}
                                            alt=""
                                            width="15px"
                                            height="15px"
                                            style={{ marginLeft: "5px" }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </button>
                            </div>

                            <div className="save_btn">
                                <button className="save_btn">Publish</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditArticle;
