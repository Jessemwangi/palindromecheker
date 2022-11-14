import React from 'react';

function Form(props) {
    return (
        <form action="" onSubmit={props.send} onChange={props.valuechange}>
            <div style={{
                display:"inline-block"
                
            }}>
                <label htmlFor="word"></label>
                <input type="text" id='word' name='word' onChange={props.valuechange} />

                <button type='submit' onClick={props.send}>check Palindrom</button>
          

            </div>

        </form>
    );
}

export default Form;