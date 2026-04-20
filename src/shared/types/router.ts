import { UserRoleType } from "@/entities/User";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRoleType[];
}
