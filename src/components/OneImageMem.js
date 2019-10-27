import React from 'react';
import { Button, InputGroup, InputGroupText, InputGroupAddon, Input, FormGroup, Label } from 'reactstrap';
let Img = require('react-image');

export class OneImageMem extends React.Component {
    constructor(props) {
        super();

        this.state = {
            top: "AA",
            bottom: "",
            image: "assets/nn.jpg",
            isSelected: false
        }

        this.addTopState = this.addTopState.bind(this);
        this.addBottomState = this.addBottomState.bind(this);
        this.generate = this.generate.bind(this);
        this.selectImage = this.selectImage.bind(this);

    }

    addTopState(e) {
        this.setState({
            top: e.target.value
        })
    }

    addBottomState(e) {
        this.setState({
            bottom: e.target.value
        })
    }

    selectImage(e) {
        this.setState({
            image: e.target.value
        })

        const selectedFile = e.target.files[0];
        console.log('Selected File', selectedFile);
        var data = new FormData();
        data.append('file', selectedFile, selectedFile.name);
        console.log('Form Data', data);

        /*
        
        var req = axios.post ('url', formdata or binary , name , {
            onUploadProgress : preogessEvent  => {
                     console.log('Form Data', data);
            }
        } ).then(ress =>{

        } ); 
        
        */
    }

    generate() {
        console.log(this.state);

    }



    render() {

        return (
            <div className="container">

                <div className="row">

                    <InputGroup className="item">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText >Top</InputGroupText>
                        </InputGroupAddon>
                        <Input onInputCapture={this.addTopState} />
                    </InputGroup>

                    <InputGroup className="item" >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Bottom</InputGroupText>
                        </InputGroupAddon>
                        <Input onInputCapture={this.addBottomState} />
                    </InputGroup>

                    <FormGroup>
                        <Label >mem Image</Label>
                        <Input type="file" name="file" id="exampleFile" onChangeCapture={this.selectImage} />

                    </FormGroup>

                    <Button className = "item" color="primary" size="lg" block onClick={this.generate}> generate</Button>

                    <div className="meme">
                        <Img src={this.state.image} />
                        <h2 className = "top">{this.state.top}</h2>
                        <h2 className = "bottom">{this.state.bottom}</h2>

                    </div>


                </div>

            </div >
        );
    }

}