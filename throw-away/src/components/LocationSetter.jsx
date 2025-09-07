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
        <div className="bg-red-300 rounded-sm">
            <div className="dropdown-container p-1 ">
                <label htmlFor="location">Set Location</label>
                <select name="cities" id="" className="m-1 text-black">
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