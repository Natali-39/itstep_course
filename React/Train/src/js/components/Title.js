function Title({titleText, level}) {

    switch(level){
        case 1:
            return (<h1>{titleText}</h1>); 
        case 2:
            return (<h2>{titleText}</h2>);
        case 3:
            return (<h3>{titleText}</h3>);
        case 4:
            return (<h4>{titleText}</h4>); 
        case 5:
            return (<h5>{titleText}</h5>);
        case 6:
            return (<h6>Неправильное значение</h6>);
    }
}

export default Title;