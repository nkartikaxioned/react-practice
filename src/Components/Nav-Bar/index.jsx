import { MenuList } from "./MenuList"

export const PrimaryNav = ({menu = []}) => {

  return (
    (menu && menu.length > 0) ? 
      <nav className="primary-nav">
        <MenuList list = {menu}/>
      </nav> 
      : "null"
  );
  
}