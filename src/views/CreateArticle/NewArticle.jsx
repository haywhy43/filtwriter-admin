import React from "react";
import SideBar from "../../components/SideBar/Sidebar";
import "./NewArticle.css";
import checkMark from "../../assets/img/checkmark.svg";
import axios from "axios";
import Cookies from "js-cookie";

class NewArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            author: "",
            title: "",
            body: "",
            file: ""
        };
    }

    authorInput = event => {
        this.setState({ author: event.target.value });
    };

    titleInput = event => {
        this.setState({ title: event.target.value });
    };

    bodyInput = event => {
        this.setState({ body: event.target.value });
    };

    uploadfile = event => {
        this.setState({ file: this.refs.file.files[0] });
    };
 
    save = event => {
        this.submitFunc(event, 'upload')
    }

    publish = event => {
        this.submitFunc(event, 'publish')
    }
    submitFunc = (event, type) => {
        const formData = new FormData();
        formData.append("author", this.state.author);
        formData.append("title", this.state.title);
        formData.append("body", this.state.body);
        formData.append("picture", this.state.file);
        axios
            .post(process.env.REACT_APP_API_URL + `/article/${type}`, formData, {
                headers: {
                    Authorization: "Bearer " + Cookies.get("token"),
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(data => console.log(data));
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
                        <div className="input_group">
                            <label htmlFor="Author's name" className="label">
                                Author
                            </label>
                            <input
                                type="text"
                                name="Author's name"
                                className="input"
                                placeholder="Enter Author's name"
                                required
                                onChange={this.authorInput}
                            />
                        </div>

                        <div className="input_group">
                            <label htmlFor="Title" className="label">
                                Title
                            </label>
                            <input
                                type="text"
                                name="Title"
                                className="input"
                                placeholder="Enter Title of the Article"
                                required
                                onChange={this.titleInput}
                            />
                        </div>

                        <div className="input_group">
                            <label htmlFor="Body" className="label">
                                Body
                            </label>
                            <textarea
                                name="body"
                                cols="50"
                                rows="30"
                                placeholder="Write your Article"
                                className="input"
                                required
                                onChange={this.bodyInput}
                            ></textarea>
                        </div>

                        <div className="input_group">
                            <label htmlFor="picture" className="label">
                                Upload cover Image
                            </label>
                            <input type="file" ref="file" if="file" className="input" onChange={this.uploadfile} />
                        </div>

                        <div className="btns">
                            <div className="save_btn">
                                <button className="save_btn" type="submit">
                                    Save{" "}
                                    <img
                                        src={checkMark}
                                        alt=""
                                        width="18px"
                                        height="18px"
                                        style={{ marginLeft: "5px" }}
                                    />
                                </button>
                            </div>

                            <div className="save_btn">
                                <button className="save_btn" onClick={this.publish}>Publish</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewArticle;
