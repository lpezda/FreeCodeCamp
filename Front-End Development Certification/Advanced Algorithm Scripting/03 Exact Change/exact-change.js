function checkCashRegister(price, cash, cid) {
    
    var change = 0;
    var changeLeft = 0;
    var totalCid = 0;
    var result = [];
  
    price = price * 100;
    cash = cash * 100;
    change = cash - price;
    changeLeft = change;
    totalCid = getTotalCid(cid);
    
 
    if (change > totalCid) {
        
        return 'Insufficient Funds';
    
    } else if (change === totalCid) {
        
        return 'Closed';
    }
 
    for (var i = cid.length - 1; i >= 0; i--) {
        var coinName = cid[i][0];
        var coinTotal = cid[i][1] * 100;
        var coinValue = getValue(coinName);
        var coinAmount = coinTotal / coinValue;
        var toReturn = 0;
 
        while (changeLeft >= coinValue && coinAmount > 0) {
            changeLeft -= coinValue;            
            coinAmount--;
            toReturn++;
        }
 
        
        if (toReturn > 0) {
            result.push([coinName, toReturn * (coinValue / 100)]);
        }
    }
 
   
    if (getTotalCid(result) != change) {
        return 'Insufficient Funds';            
    }
 
    return result;  
 
 
    function getTotalCid(val) {
        
        var total = 0;
        
        for (var i = 0; i < val.length; i++) {
            total += val[i][1] * 100;
        }
        return total;
    }
 
    function getValue(val) {
        switch (val) {
            case 'PENNY':
                return 1;
            case 'NICKEL':
                return 5;
            case 'DIME':
                return 10;
            case 'QUARTER':
                return 25;
            case 'ONE':
                return 100;
            case 'FIVE':
                return 500;
            case 'TEN':
                return 1000;
            case 'TWENTY':
                return 2000;
            case 'ONE HUNDRED':
                return 10000;
        }
    }
}