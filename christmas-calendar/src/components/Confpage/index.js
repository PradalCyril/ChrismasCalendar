import React, {Component} from 'react';

class Confpage extends Component{
    constructor(props){
        super(props);
        this.state={
            question1:'',
            question2:'',
            question3:'',
            question4:'',
            question5:'',
            question6:'',
            question7:'',
            question8:'',
            question9:'',
            question10:'',
            question11:'',
            question12:'',
            question13:'',
            question14:'',
            question15:'',
            question16:'',
            question17:'',
            question18:'',
            question19:'',
            question20:'',
            question21:'',
            question22:'',
            question23:'',
            question24:'',
            answer1:'',
            answer2:'',
            answer3:'',
            answer4:'',
            answer5:'',
            answer6:'',
            answer7:'',
            answer8:'',
            answer9:'',
            answer10:'',
            answer11:'',
            answer12:'',
            answer13:'',
            answer14:'',
            answer15:'',
            answer16:'',
            answer17:'',
            answer18:'',
            answer19:'',
            answer20:'',
            answer21:'',
            answer22:'',
            answer23:'',
            answer24:'',
        }
    }
    handleClick(){
       
    }
    handleChange(ev,type){
        console.log(type)
        this.setState({[type]:ev.target.value})
    }
    render(){
        return(
            <div>
                {console.log(this.state)}
                <ul className="parent_interact">
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question1")} className="question" placeholder='question 1'/><input type="text" className="answer" placeholder='answer 1'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question2")} className="question" placeholder='question 2'/><input type="text" className="answer" placeholder='answer 2'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question3")} className="question" placeholder='question 3'/><input type="text" className="answer" placeholder='answer 3'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question4")} className="question" placeholder='question 4'/><input type="text" className="answer" placeholder='answer 4'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question5")} className="question" placeholder='question 5'/><input type="text" className="answer" placeholder='answer 5'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question6")} className="question" placeholder='question 6'/><input type="text" className="answer" placeholder='answer 6'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question7")} className="question" placeholder='question 7'/><input type="text" className="answer" placeholder='answer 7'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question8")} className="question" placeholder='question 8'/><input type="text" className="answer" placeholder='answer 8'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question9")} className="question" placeholder='question 9'/><input type="text" className="answer" placeholder='answer 9'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question10")} className="question" placeholder='question 10'/><input type="text" className="answer" placeholder='answer 10'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question11")} className="question" placeholder='question 11'/><input type="text" className="answer" placeholder='answer 11'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question12")} className="question" placeholder='question 12'/><input type="text" className="answer" placeholder='answer 12'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question13")} className="question" placeholder='question 13'/><input type="text" className="answer" placeholder='answer 13'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question14")} className="question" placeholder='question 14'/><input type="text" className="answer" placeholder='answer 14'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question15")} className="question" placeholder='question 15'/><input type="text" className="answer" placeholder='answer 15'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question16")} className="question" placeholder='question 16'/><input type="text" className="answer" placeholder='answer 16'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question17")} className="question" placeholder='question 17'/><input type="text" className="answer" placeholder='answer 17'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question18")} className="question" placeholder='question 18'/><input type="text" className="answer" placeholder='answer 18'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question19")} className="question" placeholder='question 19'/><input type="text" className="answer" placeholder='answer 19'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question20")} className="question" placeholder='question 20'/><input type="text" className="answer" placeholder='answer 20'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question21")} className="question" placeholder='question 21'/><input type="text" className="answer" placeholder='answer 21'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question22")} className="question" placeholder='question 22'/><input type="text" className="answer" placeholder='answer 22'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question23")} className="question" placeholder='question 23'/><input type="text" className="answer" placeholder='answer 23'/></li>
                    <li className="parent_interact_list"><input type="text" onChange={(ev)=>this.handleChange(ev,"question24")} className="question" placeholder='question 24'/><input type="text" className="answer" placeholder='answer 24'/></li>
                </ul>
                <h3 className="h3_warning">Warning : please check your answers are correctly writed</h3>
                <button onClick={(ev) => this.handleClick(ev)}>Next</button>
            </div>
        )
    }
}

export default Confpage;