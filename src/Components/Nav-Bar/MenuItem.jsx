import { MenuList } from "./MenuList";

export const MenuItem = ({ item }) => {
  return (
    <li onClick={}>
      {item.label}
      {item && item.children ? <MenuList list={item.children} /> : null}
    </li>
  );
};
