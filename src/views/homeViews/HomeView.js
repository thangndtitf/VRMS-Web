import { Component } from "react";


class HomeView extends Component{
    constructor(props){
        super(props)
        this.state ={  // Tạo state với giá trị cần trong các thẻ input trong form 
            value: ' ',
            value2: '',
            selectValue: 'coconut',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }
    handleChange(event) {  // hàm dùng để setState các giá trị trong state khi người dùng thay đổi giá trị trong input (Text)
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    handleChangeSelect(event) {// hàm dùng để setState các giá trị trong state khi người dùng thay đổi giá trị trong input (Select)
        this.setState({selectValue: event.target.value});
    }
      
    
     handleSubmit(event) { // Hàm dùng để handle khi người dùng nhấn nút submit : hiển thị lên giá trị mà người dùng đã nhập ( chọn ) 
        alert('A name was submitted: ' + this.state.value + ' Value2  is : ' + this.state.value2);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} name="value" onChange={this.handleChange} />
                </label>
                <label>
                    Name:
                    <input type="text" value={this.state.value2} name="value2" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <select value={this.state.selectValue} onChange={this.handleChangeSelect}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </div>

            

        );
      }
}

export default HomeView;