import React from 'react';
import { Button, InputGroup, InputGroupText, InputGroupAddon, Input, FormGroup, Label } from 'reactstrap';
let Img = require('react-image');

export class TwoImageMem extends React.Component {
    constructor(props) {
        super();

        this.state = {
            top: "",
            bottom: "",
            image1: "",
            image2: ""
        }

        this.addTopState = this.addTopState.bind(this);
        this.addBottomState = this.addBottomState.bind(this);
        this.generate = this.generate.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.selectImage2 = this.selectImage2.bind(this);

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
            image1: e.target.value
        })
    }

    selectImage2(e) {
        this.setState({
            image2: e.target.value
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
                    <FormGroup>
                        <Label >mem Image 2 </Label>
                        <Input type="file" name="file" id="exampleFile" onChangeCapture={this.selectImage2} />

                    </FormGroup>

                    <Button color="primary" size="lg" block onClick={this.generate}> generate</Button>

                    <Img src={this.state.image} />

                </div>

            </div >
        );
    }

}