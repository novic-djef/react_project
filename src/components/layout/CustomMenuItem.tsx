
import {  NavLink } from "react-router-dom";
import classNames from "utilities/style/classNames";
import { MenuItemProps } from "../../navigation/navigation";

interface MoreProps {
  withChildren?: boolean; // if will show children or not
}

function CustomMenuItem({
  name,
  href,
  icon: ItemIcon,
  withChildren,
  children,
  extra: Extra,
}: MenuItemProps & MoreProps) {
  return (
    <>
    
      <NavLink
        key={name}
        to={href}
        end
        className={({ isActive }) =>
          classNames(
            isActive ? "bg-link" : "hover:bg-link hover:text-primary",
            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
          )
        }
        onClick={()=> {('href')}} 
      >
        {({ isActive }) => (
          <>
          
            <ItemIcon
              className={classNames(
                isActive ? "text-primary-500" : "group-hover:text-primary",
                "mr-4 flex-shrink-0 h-6 w-6"
              )}
              aria-hidden="true"
            
            />
            {name}
            {Extra && <Extra />}
          
          </>
        )}
      </NavLink>
      {withChildren && children && (
        <div className="ml-6 pl-4">
          {children.map((child) => (
            <CustomMenuItem
              key={child.name}
              withChildren={withChildren}
              {...child}
              
            />
          ))}
        </div>
      )}
      
    </>

  );
}
export default CustomMenuItem;
