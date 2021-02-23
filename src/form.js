import React , {useState} from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios'

const Form = () => {
    const typeValue = React.useRef('');
    const [geturl, setgetUrl] = useState("Shorten a link here");

    const onPressEvent =() =>{
        // axios.get('./shorthere').then(function(response) {
        //     console.log(response.data.shortlink);
        //     setgetUrl(response.data.shortlink)
        // })
    }


    return (
        <>
        <section className="forms">
            <form className="search-form">
                <div className="form-control">
                    <input placeholder={geturl} className="input" type="text" id="name" ref={typeValue}/>
                    <button className="start-btn" onClick={onPressEvent}>Shorten it</button>
                </div>
            </form>
        </section>
    </>
    );
}

export default Form;