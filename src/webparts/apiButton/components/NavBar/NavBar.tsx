import * as React from "react";

const NavBarButton = ({ text, onClick, style }: { text: string, onClick?: () => void, style?: React.CSSProperties }) => {
    return (
        <button
            style={{
                color: "white",
                backgroundColor: "#007ab3",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "5px",
                ...style
            }}
            onClick={onClick}>
            {text}
        </button>
    )
};

const NavBar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)", padding: "0.8rem 1rem" }}>
            <img src={require<string>('../../assets/logo.png')}alt="logo" style={{ width: "7rem" }} />
            <div style={{ display: "flex", gap: "2.4rem" }}>
                <NavBarButton text="Trouver une agence" />
                <NavBarButton
                    text="Espace client"
                    style={{
                        backgroundColor: "white",
                        color: "#007ab3",
                        border: "1px solid #007ab3"
                    }}
                />
            </div>
        </div>
    )
};

export default NavBar;