import {useState, useEffect} from 'react';

import H1 from './headers/H1.js';

const START_BALANCE = 1000;

function uid() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
} //генерация уникального индификатора

export default function App () {

    const savedFinances = window.localStorage.getItem("finance");

    let summ = savedFinances ? JSON.parse(savedFinances).reduce(function(accum, item){
        return accum += parseFloat(item.amount);
    }, START_BALANCE) : START_BALANCE;

    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(summ);

    const [finances, setFinances] = useState(savedFinances ? JSON.parse(savedFinances) : []);

    function add(event) {
        event.preventDefault();

        const newFinances = [
            ...finances,
            {id: uid(), date: date, description: description, amount: amount}
        ];

        setFinances(newFinances);

        let summ = newFinances.reduce(function(accum, item){
            return accum += parseFloat(item.amount);
        }, 0);

        setTotal(summ);

        setDate("");
        setDescription("");
        setAmount(0);
    }

    useEffect(() => {
        window.localStorage.setItem("finance", JSON.stringify(finances));
    }, [finances]);

    
    return(
        <>
            <H1 headerText={"Трекер расходов"} />
            <form className="track" onSubmit={add}>
            <div className="expense">
                <div className="date">
                    <label for="">Дата</label>
                    <input type="date" value={date} onChange={ (e) => setDate(e.target.value) }/>
                </div>
                <div className="discription">
                    <label for="">Описание</label>
                    <input type="text"value={description} onChange={ (e) => {setDescription(e.target.value)}}/>
                </div>
                <div className="summ">
                    <label for="">Сумма</label>
                    <input type="number" value={amount} onChange = { (e) => setAmount(e.target.value) }/>
                </div>
                <button className="btn-add">Добавить</button>
            </div>
            <div className="balance">
                <label for="">Баланс</label>
                <input type="number" className="total" value={total}/>
                <button className="btn-bal">Установить сумму</button>
            </div>
            </form>
            {
                fanance.length > 0 ? 
                (<ul className="list">
                    {
                        fanance.map(function(finance) { 
                            return(
                                <li className={finance.amount > 0 ? "item negative": "item negative"} key={finance.id} >
                                    <span>{finance.date}</span>
                                    <span>{finance.description}</span>
                                    <span>{finance.amout} BYN</span>
                                </li>
                                )
                            }
                        )
                    }
                </ul>) : <div className="empty">"Список расходов пока пустой"</div>
            }
            
        </>
    );
}