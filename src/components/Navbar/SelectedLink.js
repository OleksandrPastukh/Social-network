import s from "./Navbar.module.css";

const SelectedLink = () => {
    return (
        select => select.isActive ? s.active : s.item
    );
}

export default SelectedLink;