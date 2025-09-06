export default function Form() {
    return(
        <>
        <fieldset>
            <form action="get" className="form">
                <input type="text" id="" required placeholder="Email"/>
                <input type="text" id="" required placeholder="Password"/>
                <div className="submit-btn-container">
                    <button className="submit-btn">Submit</button>
                </div>
            </form>
        </fieldset>
        </>
    )
}