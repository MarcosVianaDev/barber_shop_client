import MiniBio from './MiniBio'

const SearchBar = () => (
  <nav className="d-none d-sm-block col-12 col-sm-3 border-start border-1 border-dark">
    <form
      className="w-100 d-flex flex-column justify-content-around h-25"
      acceptCharset="utf-8"
    >
      <div className="w-100 d-flex justify-content-around">
        <button className="btn btn-primary" type="button">
          Barbeiro
        </button>
        <button className="btn btn-secondary" type="button">
          Barbearia
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <input className="w-75 rounded-start-pill ps-2" type="search" />
        <button className="btn btn-primary" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </form>
    <output className="d-flex justify-content-start flex-wrap gap-2 h-75">
      <MiniBio nome="Ciclano" foto="user_profile.jpg" />
      <MiniBio nome="Beltrano" foto="user_profile.jpg" />
      <MiniBio nome="Fulano" foto="user_profile.jpg" />
      <MiniBio nome="Fulano" foto="user_profile.jpg" />
      <MiniBio nome="Fulano" foto="user_profile.jpg" />
      <MiniBio nome="Fulano" foto="user_profile.jpg" />
      <MiniBio nome="Fulano" foto="user_profile.jpg" />
      <MiniBio nome="Fulano" foto="user_profile.jpg" />
      <MiniBio nome="Fulano" foto="user_profile.jpg" />
      <MiniBio nome="+2" foto="user_profile.jpg" />
    </output>
  </nav>
)

export default SearchBar
