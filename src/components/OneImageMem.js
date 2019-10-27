import React from 'react';
import { Button, InputGroup, InputGroupText, InputGroupAddon, Input, FormGroup, Label } from 'reactstrap';
let Img = require('react-image'); 

export  class OneImageMem extends React.Component {
    constructor(props) {
        super();

        this.state = {
            top: "",
            bottom: "",
            image: ""
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

                    <Button color="primary" size="lg" block onClick={this.generate}> generate</Button>

                    <Img src={this.state.image} />

                </div>

            </div >
        );
    }

}