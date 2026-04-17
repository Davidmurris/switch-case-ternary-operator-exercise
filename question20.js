let payMethod = 'cash';

switch (payMethod) {
    case 'transfer':
        console.log('fee is 10');
        
        break;
        case 'card':
            console.log('fee is 50');
            break;
            case 'cash':
                console.log('no fee');
                break;
                
    default:
        console.log('unknown payment');
        

}