import React, { Component } from 'react';
import Form from './Form';

class Main extends Component {
    state = {
        word: '',
        palindrom: '',
        ispalindrom: '',
        cssforresult:'palinresult'
    };

    

    SubmitHandler = (e) => {

        e.preventDefault();
        let array = [];
        let reg = /[^\w|_]/g;
        array = this.state.word.split("");
        let str2 = (array.reverse(array).join("")).replace(reg ,'');
        let result = this.state.word.replace(reg ,'') === str2;
       
        this.setState({
            ispalindrom:result,
            palindrom: str2,
            cssforresult:'palinresult'
        });
        return(
            <div>

                <span>
                    {this.state.ispalindrom}

                </span>
            </div>

        )

    }
    render() {

       const valuechange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
                ispalindrom : 'Waiting for input',
                cssforresult : 'palinresult waiting'
            })
           
        }

        return (
            <div>
                <main>

                    <Form palindrom={this.state.palindrom}
                        send={(e) => this.SubmitHandler(e)}
                        valuechange={valuechange}
                       />
                    <hr />
                    <div>
                        {this.state.palindrom}
                        :   : is palindrome ?.
                        <div className={this.state.ispalindrom === true ? this.state.cssforresult +' ispalindrom' : 
                        this.state.cssforresult +' notPalindrom'}>

                       {`${this.state.ispalindrom}`} 
                        </div>

                    </div>
                </main>
            </div>
        );
    }
}

export default Main;