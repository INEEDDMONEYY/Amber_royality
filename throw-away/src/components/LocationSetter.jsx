export default function LocationDropDown() {
    //City arrays
    const Cities = [
        'Aurora',
        'Denver',
        'Colorado Springs',
        'Broomfield',
        'Loveland',
        'Castle Rock',
        'London',
        'Westminister',
        'Manchester',
        'Texas',
        'Dallas',
        'Memphis',
        'California',
        'Sacromento',
        'Englewood',
        'Compton',
        'Bompton',
        'Hollywood',
        'Tennesse',
    ];
    //City array is functioning correctly for location dropdown
    return(
        <>
        <div className="">
            <div className="dropdown-container">
                <label htmlFor="location" className="text-white underline">Set Location</label>
                <select name="cities" id="" className="m-1 text-black border-2 border-pink-400 rounded-sm">
                {Cities.map(city => {
                    return(
                        <>
                        <option value="city" className="h-40">{city}</option>
                        </>
                    )
                })}
                </select>
            </div>
        </div>
        </>
    )
}