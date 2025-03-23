import Button from "../../../components/common/Button";
import { useAuth } from "../../../hooks/useAuth";

const Profile = () => {

    const { logout } = useAuth();
    return (
        <>
            <h1>Profile</h1>
            <Button type="button" fuction={logout}>
                Cerrar sesión
            </Button>
        </>
    )
};

export default Profile;