import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            content: '',
            a_val: '',
            b_val: ''
        }

        this.getData = this.getData.bind(this);
        this.postData = this.postData.bind(this);
        this.formData = this.formData.bind(this);
        this.changeA = this.changeA.bind(this);
        this.changeB = this.changeB.bind(this);

    }

    // get 讀取資料
    getData(){
        // fetch (url, {method:get..})
        fetch('http://localhost/read_data.php?f=2&a='+this.state.a_val+'&b='+this.state.b_val,{method:'GET'})
        .then(res => res.json())
        .then(data => {
            console.log('data: ',data);
            if (data['status']==='succ'){
                this.setState({content:data['result']});
            }
            else {
                this.setState({content:data['ERROR']});
            }  
        })
        .catch(err=> {
            console.log('Err:',err);
        })
    }

    // post 讀取資料
    postData(){
        // fetch (url, {method:get..})
        fetch('http://localhost/read_data.php',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({a:this.state.a_val, b:this.state.b_val})
        })
        .then(res => res.json())
        .then(data => {
            console.log('data:',data);
            if(data['status']==='succ'){
                this.setState({content:data['result']});
            }
            else {
                this.setState({content:data['ERROR']});
            }  
        })
        .catch(err=>{
            console.log('Err:',err);
        })
    }

    formData(){
        let data = {
            a:this.state.a_val,
            b:this.state.b_val};
        const formData = Object.keys(data).map(
            (keyname) => {
                return encodeURIComponent(keyname)+'='+encodeURIComponent(data[keyname]);
            }
        ).join('&');

        fetch('http://localhost/read_data.php',{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log('data:',data);
            if(data['status']==='succ'){
                this.setState({content:data['result']});
            }
            else {
                this.setState({content:data['ERROR']});
            }  
        })
        .catch(err=>{
            console.log('Err:',err);
        })
    }

    changeA(e){
        this.setState({a_val: e.target.value});
    }

    changeB(e){
        this.setState({b_val: e.target.value});
    }

    render(){
        return (
            <div>
                a:<input type='text' value={this.state.a_val} onChange={this.changeA}/><br/>
                b:<input type='text' value={this.state.b_val} onChange={this.changeB}/><br/>

                <button onClick={this.getData}>Get Data</button><br/>
                <button onClick={this.postData}>Post Data</button><br/>
                <button onClick={this.formData}>Form Data</button><br/>
                <p>{this.state.content}</p>
            </div>
           
        )
    }
}

export default App;