import './SearchBar.css'

type SearchBarProps = {
  setName: any
}

function SearchBar({ setName }: SearchBarProps) {
  const handleSearchBar = (e: any) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search..."
        onChange={handleSearchBar}
      />
    </form>
  )
}

export { SearchBar }
