import React from 'react'
const axios = require("axios");

class Upload3 extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            url_file:null
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avatar',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:3001/auth/api/v2/upload_image",formData,config)
            .then((response) => {
                this.setState({url_file:'http://localhost:3001/'+response.data.filename})
                //alert('response = ' + response.data.filename);
            }).catch((error) => {
                alert('error = ' + error);
        });
    }

    onChange = (e) => {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="avatar" onChange= {this.onChange} />
                <button type="submit">Upload</button>
                <p><img src={this.state.url_file} /></p>
            </form>
        )
    }
}

export default Upload3;


//--form 'avatar=@"/home/okto/Pictures/iso27001.jpg"'
// {"fieldname":"avatar",
// "originalname":"iso27001.jpg",
// "encoding":"7bit",
// "mimetype":"image/jpeg",
// "destination":"./uploads/",
// "filename":"iso27001.jpg-1630135497228.jpg",
// "path":"uploads/iso27001.jpg-1630135497228.jpg",
// "size":222965}