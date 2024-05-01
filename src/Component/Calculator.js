import React from "react";
function Calculator() {
    var ch;
    var a = 0;
    function getData(str) {

        document.getElementById("t1").value += str;
    }
    function getOpr(s) {
        a = parseFloat(document.getElementById("t1").value);
        document.getElementById("t1").value = "";
        ch = s;
    } 
    function getresult() {
        var b = parseFloat(document.getElementById('t1').value);
        var c = 0;
        if (ch == '+')
            c = a + b;
        if (ch == '-')
            c = a - b;
        if (ch == '*')
            c = a * b;
        if (ch == '/')
            c = a / b;
        document.getElementById("t1").value = c;
    }
    function cl() {
        document.getElementById("t1").value = "";
    }
    return (
        <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">
                <h1>Calculator</h1>
                <br></br>
                <input type="text" id="t1" />
                <input type="button" className="btn btn-info" value="cls" onClick={() => cl()} /><br></br><br></br>
                <input type="button" className="btn btn-info" value="1" onClick={() => getData('1')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="2" onClick={() => getData('2')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="3" onClick={() => getData('3')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="." onClick={() => getOpr()} /><br /><br />
                <input type="button" className="btn btn-info" value="4" onClick={() => getData('4')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="5" onClick={() => getData('5')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="6" onClick={() => getData('6')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="+" onClick={() => getOpr('+')} /><br /><br />
                <input type="button" className="btn btn-info" value="7" onClick={() => getData('7')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="8" onClick={() => getData('8')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="9" onClick={() => getData('9')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="-" onClick={() => getOpr('-')} /><br /><br />
                <input type="button" className="btn btn-info" value="0" />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="/" onClick={() => getOpr('/')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="*" onClick={() => getOpr('*')} />&emsp;&emsp;
                <input type="button" className="btn btn-info" value="=" onClick={() => getresult()} />
            </div>
        </div>
    )
};
export default Calculator;