import { forwardRef, memo } from "react";

import { IconProps } from "@/shared/assets/types/types";

export const UserListIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
        <svg
            fill={"none"}
            height={24}
            ref={ref}
            width={24}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <path
                d={"M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6 10a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1h12Z"}
                fill={"#ffffff"}
            />
        </svg>
    );
  }),
);
