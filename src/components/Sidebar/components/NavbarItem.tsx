import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Board } from '../index';
import iconImg from '../images/icon-board.png';
import '../Sidebar.scss';

type Props = {
  data: Board,
}

export function NavbarItem({ data } : Props) {
  const [isActive, setIsActive] = useState('navbar__link');

  //const handleActive = (data.id) => {
  //  data.status = true;
  //  if (data.status) {
  //    setIsActive('navbar__link navbar__link__active');
  //  }
  //    setIsActive('navbar__link');
  //  console.log(isActive);  
  //}

  return (
    <Link className={isActive} key={data.id} to={`/boards/${data.id}`}>
        <img className='navbar__img' src={iconImg} alt="icon" />
        {data.attributes.title}
    </Link>
  )
} 