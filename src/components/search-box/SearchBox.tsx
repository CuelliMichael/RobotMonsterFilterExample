import './Test.scss';

interface SearchBoxProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox: React.FC<SearchBoxProps> = props => {

    return (
        <label className='label-title-up-input'>
            <input
                className="search-box"
                type={"search"}
                onChange={props.onChange}
                id="search-monster-box"
                required
            />
                <span>Search Robot Monsters</span>
        </label>
    )
};
