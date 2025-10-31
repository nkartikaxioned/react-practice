import { MenuItem } from "./MenuItem";

export const MenuList = ({ list }) => {
  return (
    <ul>
      {list.map((menu) => {
        return <MenuItem item={menu} />;
      })}
    </ul>
  );
};
