import React from "react";
import SideBar from "../../components/SideBar/Sidebar";
import "./NewArticle.css";
import checkMark from '../../assets/img/checkmark.svg'

class NewArticle extends React.Component {
    submit = event => {
        event.preventDefault();
    };
    render() {
        return (
            <div className="createArticle">
                <SideBar />
                <div className="form">
                    <form action="Create New Article" className="main_form" method="POST" onSubmit={this.submit}>
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
                            />
                        </div>

                        <div className="input_group">
                            <label htmlFor="Body" className="label">
                                Body
                            </label>
                            <textarea name="body" cols="50" rows="30" placeholder="Write your Article" className="input"></textarea>
                        </div>


                        <div className="btns">
                            <div className="save_btn">
                                <button className="save_btn">Save <img src={checkMark} alt="" width="18px" height="18px" style={{marginLeft: '5px'}}/></button>
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

export default NewArticle;
