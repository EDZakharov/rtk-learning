import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className="bg-gray-400 flex basis-36 h-withoutHeader">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/notes">notes</Link>
        </li>
      </ul>
    </div>
  );
};
