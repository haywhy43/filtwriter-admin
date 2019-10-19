import React from "react";
import SideBar from "../../components/SideBar/Sidebar";
import "./EditArticle.css";
import getAllArticles from "../../api/Articles/all";
import checkMark from "../../assets/img/checkmark.svg";
import Cookies from "js-cookie";
import axios from "axios";

class EditArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            body: "",
            file: ""
        };
    }

    componentDidMount() {
        getAllArticles().then(data => {
            data.data.forEach(article => {
                if (article.id.toString() === this.props.match.params.id) {
                    this.setState({ author: article.author });
                    this.setState({ title: article.title });
                    this.setState({ body: article.body });
                    // this.setState({ file: article.profile_id });
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
        axios
            .post(process.env.REACT_APP_API_URL + "/article/edit", formData, {
                headers: {
                    Authorization: "Bearer " + Cookies.get("token"),
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(data => console.log(data));

        // console.log(this.props.match.params.id)

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
                        <div className="input_group">
                            <label htmlFor="author" className="label">
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                className="input"
                                // placeholder={this.state.editingArticle.author}
                                required
                                onChange={this.handleChange}
                                value={this.state.author}
                            />
                        </div>

                        <div className="input_group">
                            <label htmlFor="title" className="label">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                className="input"
                                placeholder="Enter Title of the Article"
                                required
                                onChange={this.handleChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="input_group">
                            <label htmlFor="body" className="label">
                                Body
                            </label>
                            <textarea
                                name="body"
                                cols="50"
                                rows="30"
                                placeholder="Write your Article"
                                className="input"
                                required
                                onChange={this.handleChange}
                                value={this.state.body}
                            ></textarea>
                        </div>

                        <div className="input_group">
                            <label htmlFor="picture" className="label">
                                Upload cover Image
                            </label>
                            <input
                                type="file"
                                ref="file"
                                if="file"
                                // value={this.state.editingArticle.profile_id}
                                className="input"
                                onChange={this.uploadfile}
                            />
                        </div>

                        <div className="btns">
                            <div className="save_btn">
                                <button className="save_btn" type="submit">
                                    Save
                                    {/* <img
                                        src={checkMark}
                                        alt=""
                                        width="18px"
                                        height="18px"
                                        style={{ marginLeft: "5px" }}
                                    /> */}
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
