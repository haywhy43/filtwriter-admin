import React from "react";
import SideBar from "../../components/SideBar/Sidebar";
import "./NewArticle.css";
import checkMark from "../../assets/img/checkmark.svg";
import FormInput from "../../components/FormInput/FormInput";
import TextArea from "../../components/TextArea/TextArea";
import { uploadArticle } from "../../api/Articles/uploadArticle";


class NewArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            author: "",
            title: "",
            body: "",
            file: "",
            saved: false
        };
    }
    // function to handle input change and store value in this.state
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // function to get the file uploaded by the user in the input
    uploadfile = () => {
        this.setState({ file: this.refs.file.files[0] });
    };

    save = (event) => {
        this.submitFunc(event, "upload");
    };

    publish = (event) => {
        this.submitFunc(event, "publish");
    };

    submitFunc = (event, type) => {
        const formData = new FormData();
        formData.append("author", this.state.author);
        formData.append("title", this.state.title);
        formData.append("body", this.state.body);
        formData.append("picture", this.state.file);

        uploadArticle(type, formData).then((data) => {
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
            <div className="createArticle">
                <SideBar />
                <div className="form">
                    <form action="Create New Article" className="main_form" method="POST" onSubmit={this.save}>
                        <div>
                            <h1>Create A New Article</h1>
                        </div>
                        <FormInput
                            label="Author"
                            placeholder="Enter Author's name"
                            name="author"
                            htmlFor="author"
                            handleInput={this.handleChange}
                            required
                        />

                        <FormInput
                            label="Title"
                            placeholder="Enter Title"
                            name="title"
                            htmlFor="title"
                            handleInput={this.handleChange}
                            required
                        />

                        <TextArea
                            label="Body"
                            placeholder="Type in your article"
                            name="body"
                            cols="50"
                            rows="30"
                            handleInput={this.handleChange}
                        />

                        <div className="input_group">
                            <label htmlFor="picture" className="label">
                                Upload cover Image
                            </label>
                            <input
                                type="file"
                                ref="file"
                                if="file"
                                name="picture"
                                className="input"
                                onChange={this.uploadfile}
                            />
                        </div>

                        <div className="btns">
                            <div className="save_btn">
                                <button className="save_btn" type="submit">
                                    Save{" "}
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
                                <button className="save_btn" onClick={this.publish}>
                                    Publish
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewArticle;
