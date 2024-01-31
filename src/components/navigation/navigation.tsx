const Navigation = () => {
    return (
        <div className="container m-auto">
            <nav className="flex justify-between mt-4 mb-10">
                <div className="logo">React Buttons</div>
                <div className="nav-items flex gap-x-11 justify-center items-center">
                    <div className="buy-coffee ">Docs</div>
                    <div className="menu-icon">Button Builder</div>
                    <div className="menu-icon">Collections</div>
                    <div className="menu-icon gradient-text">
                        AI Button Generator{" "}
                    </div>
                </div>
                <div className="nav-items flex gap-x-11 justify-center items-center">
                    <button className="button">Get Started</button>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
