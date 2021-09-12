function Filter({ onChange, filter}) {
    return (
        <label>
            Filter by name:
            <input type="text" value={filter} onChange={onChange}></input>
        </label>
    )
}

export default Filter