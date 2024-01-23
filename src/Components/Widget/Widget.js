import "../Widget/Widget.css"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Widget = ({type}) => {

    let data;

    //tempory
    const amount=100;
    const diff= 20;

    switch (type){
        case "user":
        data={
           title:"user",
           ismoney: false,
           link:"see all users",
           iconp:
            <PersonOutlineIcon className="iconp" style={{color:"crimson"}}/>,
           
        };
        break;
        case "order":
            data={
               title:"order",
               ismoney: false,
               link:"view all oders",
               iconp:
              <ShoppingCartIcon className="iconp" style={{color:"gold"}}/>
               
            };
            break;
            case "erarning":
                data={
                   title:"erarning",
                   ismoney: true,
                   link:"view net erarings",
                   iconp:
                  <CurrencyExchangeIcon className="iconp"  style={{color:"green"}}/>
                   
                };
                break;
                case "blance":
                    data={
                       title:"blance",
                       ismoney: true,
                       link:"let see details",
                       iconp:
                      <AccountBalanceIcon className="iconp" style={{color:"purpole"}}/>
                       
                    };
                    break;
        default:
            break;
    }
    

  return (
    <>
    <div className="widget">
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="value">{data.ismoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}%
            </div>
           {data.iconp}
        </div>
        </div>
        
        
        
        
        
        </>
  )
}

export default Widget