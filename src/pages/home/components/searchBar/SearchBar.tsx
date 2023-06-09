import './SearchBar.css'

type SearchBarProps = {
  setName: React.Dispatch<React.SetStateAction<string>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

function SearchBar({ setName, setPage }: SearchBarProps) {
  const handleSearchBar = (e: any) => {
    setName(e.target.value)
    setPage(1)
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
