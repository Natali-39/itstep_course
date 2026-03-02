function Header({headerTegName, headerText, headerClass} ){
    let headerType;

    switch(headerTegName){
        case 'h1':
            headerType = <h1 headerClass={headerClass}>{headerText}</h1>
        break;
        case 'h2':
            headerType = <h2 headerClass={headerClass}>{headerText}</h2>
        break;
        case 'h3':
            headerType = <h3 headerClass={headerClass}>{headerText}</h3>
        break;
        case 'h4':
            headerType = <h4 headerClass={headerClass}>{headerText}</h4>
        break;
        case 'h5':
            headerType = <h5 headerClass={headerClass}>{headerText}</h5>
        break;
        case 'h6':
            headerType = <h6 headerClass={headerClass}>{headerText}</h6>
        break;
    }
    /**
     * <h1>header</h1>
     * <h2>header</h2>
     * <h3>header</h3>
     */
    return (headerType);
}

export default Header;