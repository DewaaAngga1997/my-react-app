import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    //code di bawah set nilai count = 0
    this.state = {
      count: 0,
    };
    // console.log("constructor");
  }

  componentDidMount() {
    //code di bawah set nilai count = 1 mengubah nilai dari state awal yaitu count = 0
    this.setState({ count: 0 });
    // console.log("componentDidMount");
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
    //code di bawah set nilai count = 0 jika nilai count yang sudah sampai 0 maka akan di kembalikan lagi menjadi 0
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }
  render() {
    return (
      <div className="flex items-center">
        <h1 className="p-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {/* {console.log("render")} */}
      </div>
    );
  }
}

export default Counter;
