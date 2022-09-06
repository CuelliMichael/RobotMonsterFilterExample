import { MonsterModel } from "../../Model/MonsterModel"
import './MonsterCard.css';

interface MonsterListProps {
    monsters: MonsterModel[]
}

export const MonsterList: React.FC<MonsterListProps> = ({ monsters }) => {

    return (
        <div className="card-list">
            {monsters &&
                monsters.map(monster => (
                    <MonsterCard
                        {...monster}
                    />
                ))
            }
        </div>
    )
}

export const MonsterCard: React.FC<MonsterModel> = ({ id, email, name }: MonsterModel) => {
    return (
        <div className="card-container" key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set1&size=180x180`}
            />
            <h2>
                {name}
            </h2>
            <p>
                {email}
            </p>
        </div>
    )
}