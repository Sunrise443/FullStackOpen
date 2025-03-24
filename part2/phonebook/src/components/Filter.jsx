const Filter = ({ filterName, setFilterName }) => {
    return (
        <form>
            <div>filter show with: <input
            value={filterName}
            onChange={(event) => {
                setFilterName(event.target.value)
            }}
            />
            </div>
        </form>
    )
}

export default Filter;
